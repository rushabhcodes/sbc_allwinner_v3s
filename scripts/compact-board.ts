import { mkdir, readFile, writeFile } from "node:fs/promises"

const input = "dist/index/circuit.json"
const output = "dist/compact/circuit.json"
const circuit = JSON.parse(await readFile(input, "utf8")) as any[]

const board = circuit.find((item) => item.type === "pcb_board")
if (!board || board.width !== 80 || board.height !== 70 || board.center.x !== 0 || board.center.y !== 0) {
  throw new Error("Expected the routed 80 × 70 mm board centered at the origin")
}

const pour = circuit.find((item) => item.type === "pcb_copper_pour" && item.layer === "inner1")
if (!pour || pour.shape !== "brep") throw new Error("Expected the inner-layer ground pour")

const rightEdge = 36
const pourEdge = rightEdge - 0.25
if (pour.brep_shape.inner_rings.some((ring: any) => ring.vertices.some((vertex: any) => vertex.x >= pourEdge))) {
  throw new Error("A copper-pour opening reaches the proposed right edge")
}

for (const item of circuit) {
  if (item.type === "pcb_trace" && item.route.some((point: any) => point.x > rightEdge - 0.2)) {
    throw new Error(`Trace ${item.pcb_trace_id} reaches the proposed right edge`)
  }
  if (item.type === "pcb_courtyard_outline" && item.outline.some((point: any) => point.x > rightEdge)) {
    throw new Error(`Courtyard ${item.pcb_courtyard_outline_id} crosses the proposed right edge`)
  }
}

board.center.x = -2
board.width = 76
for (const vertex of pour.brep_shape.outer_ring.vertices) {
  if (vertex.x > 0) vertex.x = pourEdge
}

await mkdir("dist/compact", { recursive: true })
await writeFile(output, JSON.stringify(circuit))
console.log(`Wrote compact 76 × 70 mm PCB to ${output}`)
