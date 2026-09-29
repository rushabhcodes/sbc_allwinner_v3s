import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["TD_POS"],
  pin2: ["TD_NEG"],
  pin3: ["RD_POS"],
  pin4: ["CTT"],
  pin5: ["CTR"],
  pin6: ["RD_NEG"],
  pin7: ["NC"],
  pin8: ["CG"],
  pin9: ["LA"],
  pin10: ["LC"],
  pin11: ["RC"],
  pin12: ["RA"],
  pin13: ["S1"],
  pin14: ["S2"]
} as const

const pinAttributes = {
  pin7: {doNotConnect: true}
} as const

export const J0011D21BNL = (props: ChipProps<typeof pinLabels>) => {
  return (
    <connector
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      symbol={
        <symbol>
          <schematictext schX={-0.8} schY={1.5} text="{NAME}" fontSize={0.14} anchor="left" color="#8D2323" />
          <schematictext schX={-0.24} schY={-0.5} text="RJ45" fontSize={0.14} anchor="left" color="#8D2323" schRotation={0} />
          <port name="pin8" pinNumber={8} aliases={["CG"]} direction="left" schX={-1.4} schY={-1.4} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["NC"]} direction="left" schX={-1.4} schY={-1.2} schStemLength={0.4} />
          <port name="pin14" pinNumber={14} aliases={["S2"]} direction="right" schX={1.4} schY={-1.4} schStemLength={0.4} />
          <port name="pin13" pinNumber={13} aliases={["S1"]} direction="right" schX={1.4} schY={-1.2} schStemLength={0.4} />
          <port name="pin11" pinNumber={11} aliases={["RC"]} direction="right" schX={1.4} schY={0.6} schStemLength={0.4} />
          <port name="pin12" pinNumber={12} aliases={["RA"]} direction="right" schX={1.4} schY={0.8} schStemLength={0.4} />
          <port name="pin10" pinNumber={10} aliases={["LC"]} direction="right" schX={1.4} schY={1.2} schStemLength={0.4} />
          <port name="pin9" pinNumber={9} aliases={["LA"]} direction="right" schX={1.4} schY={1.4} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["CTT"]} direction="left" schX={-1.4} schY={1} schStemLength={0.4} />
          <port name="pin1" pinNumber={1} aliases={["TD_POS"]} direction="left" schX={-1.4} schY={1.4} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["TD_NEG"]} direction="left" schX={-1.4} schY={0.6} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["CTR"]} direction="left" schX={-1.4} schY={-0.4} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["RD_POS"]} direction="left" schX={-1.4} schY={0} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["RD_NEG"]} direction="left" schX={-1.4} schY={-0.8} schStemLength={0.4} />
          <schematicpath points={[{"x":0.24,"y":0.68},{"x":0.24,"y":0.72}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.24,"y":0.68},{"x":0.28,"y":0.68}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.28,"y":0.72},{"x":0.24,"y":0.68}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":0.68},{"x":0.2,"y":0.72}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":0.68},{"x":0.22,"y":0.68}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.24,"y":0.72},{"x":0.2,"y":0.68}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.24,"y":1.28},{"x":0.24,"y":1.32}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.24,"y":1.28},{"x":0.28,"y":1.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.28,"y":1.32},{"x":0.24,"y":1.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":1.28},{"x":0.2,"y":1.32}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":1.28},{"x":0.22,"y":1.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.24,"y":1.32},{"x":0.2,"y":1.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.3,"y":-0.24},{"x":-0.3,"y":0.1}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":-0.24},{"x":-0.3,"y":-0.24}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":0.1},{"x":0.3,"y":-0.24}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.14,"y":0.1},{"x":0.3,"y":0.1}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.14,"y":0.24},{"x":0.14,"y":0.1}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.14,"y":0.24},{"x":0.14,"y":0.24}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.14,"y":0.1},{"x":-0.14,"y":0.24}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.3,"y":0.1},{"x":-0.14,"y":0.1}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0,"y":0.6},{"x":0.5,"y":0.6}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0,"y":0.8},{"x":0,"y":0.6}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":0.8},{"x":0,"y":0.8}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":0.8},{"x":0.2,"y":0.74}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":0.84},{"x":0.2,"y":0.8}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":0.84},{"x":0.3,"y":0.8}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":0.8},{"x":0.3,"y":0.84}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":0.74},{"x":0.2,"y":0.8}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":0.8},{"x":0.3,"y":0.74}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.5,"y":0.8},{"x":0.3,"y":0.8}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0,"y":1.2},{"x":0.5,"y":1.2}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0,"y":1.4},{"x":0,"y":1.2}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":1.4},{"x":0,"y":1.4}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":1.4},{"x":0.2,"y":1.34}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":1.44},{"x":0.2,"y":1.4}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":1.44},{"x":0.3,"y":1.4}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.2,"y":1.4},{"x":0.3,"y":1.44}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":1.34},{"x":0.2,"y":1.4}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.3,"y":1.4},{"x":0.3,"y":1.34}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.5,"y":1.4},{"x":0.3,"y":1.4}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-1,"y":-1.6},{"x":-1,"y":1.6}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1,"y":-1.6},{"x":-1,"y":-1.6}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1,"y":1.6},{"x":1,"y":-1.6}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-1,"y":1.6},{"x":1,"y":1.6}]} strokeColor="#8D2323" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C455444"
  ]
}}
      manufacturerPartNumber="J0011D21BNL"
      footprint={<footprint>
        <hole pcbX="-5.715mm" pcbY="1.969643mm" diameter="3.3000188mm" />
<hole pcbX="5.715mm" pcbY="1.969643mm" diameter="3.3000188mm" />
{/* tsci import emitted pin 1 as a pill plated hole that became a null-net obstacle; use the same drill and pad diameter as a round plated hole. */}
<platedhole portHints={["pin1"]} pcbX="4.445762mm" pcbY="-4.381119mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="3.175mm" pcbY="-6.920357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.905mm" pcbY="-4.380357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="0.635mm" pcbY="-6.920357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-0.635mm" pcbY="-4.380357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-1.905mm" pcbY="-6.920357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-3.175mm" pcbY="-4.380357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-4.445mm" pcbY="-6.920357mm" outerDiameter="1.31318mm" holeDiameter="0.9144mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="-7.874mm" pcbY="-1.078357mm" outerDiameter="2.02438mm" holeDiameter="1.6256mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="7.874mm" pcbY="-1.078357mm" outerDiameter="2.02438mm" holeDiameter="1.6256mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="6.325108mm" pcbY="6.869557mm" outerDiameter="1.41478mm" holeDiameter="1.016mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="-3.785108mm" pcbY="6.869557mm" outerDiameter="1.41478mm" holeDiameter="1.016mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="3.7846mm" pcbY="5.349621mm" outerDiameter="1.41478mm" holeDiameter="1.016mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="-6.325108mm" pcbY="5.349621mm" outerDiameter="1.41478mm" holeDiameter="1.016mm" shape="circle" />
<silkscreenpath route={[{"x":-9.525000000000006,"y":12.764643000000007},{"x":9.524999999999991,"y":12.764643000000007}]} />
<silkscreenpath route={[{"x":9.524999999999991,"y":12.764643000000007},{"x":9.524999999999991,"y":-8.825356999999997}]} />
<silkscreenpath route={[{"x":9.524999999999991,"y":-8.825356999999997},{"x":-9.525000000000006,"y":-8.825356999999997}]} />
<silkscreenpath route={[{"x":-9.525000000000006,"y":-8.825356999999997},{"x":-9.525000000000006,"y":12.764643000000007}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="13.891643mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-9.902000000000001,"y":13.141643000000002},{"x":9.927400000000006,"y":13.141643000000002},{"x":9.927400000000006,"y":-9.227756999999997},{"x":-9.902000000000001,"y":-9.227756999999997},{"x":-9.902000000000001,"y":13.141643000000002}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C455444.obj?uuid=72e376fae6c34245bcc95eaca5189cf0",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C455444.step?uuid=72e376fae6c34245bcc95eaca5189cf0",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -1.7697676000000069, z: -0.05000699999999947 },
      }}
      {...props}
    />
  )
}
