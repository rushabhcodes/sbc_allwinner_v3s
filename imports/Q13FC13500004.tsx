import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const Q13FC13500004 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematictext schX={0} schY={0.14} text="{NAME}" fontSize={0.12} anchor="center" color="#8D2323" />
          <schematicpath points={[{"x":-0.08,"y":0.14},{"x":-0.08,"y":-0.14}]} strokeColor="#8D2323" />
          <schematicrect schX={0} schY={0} width={0.08} height={0.28} strokeWidth={0.02} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
          <schematicpath points={[{"x":0.08,"y":0.14},{"x":0.08,"y":-0.14}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":-0.08,"y":0}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.08,"y":0},{"x":0.2,"y":0}]} strokeColor="#8D2323" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C32346"
  ]
}}
      manufacturerPartNumber="Q13FC13500004"
      footprint="smdpads2_p2.5001mm_pw1mm_ph1.8mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C32346.obj?uuid=fd4574cdfbe94d00a9458103bda2310c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C32346.step?uuid=fd4574cdfbe94d00a9458103bda2310c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.0001396999999911941, z: 0 },
      }}
      {...props}
    />
  )
}
