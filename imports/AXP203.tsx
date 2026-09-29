import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SDA"],
  pin2: ["SCK"],
  pin3: ["GPIO3"],
  pin4: ["N_OE"],
  pin5: ["GPIO2"],
  pin6: ["N_VBUSEN"],
  pin7: ["VIN2"],
  pin8: ["LX2"],
  pin9: ["PGND2"],
  pin10: ["DCDC2"],
  pin11: ["LDO4"],
  pin12: ["LDO2"],
  pin13: ["LDOO24IN"],
  pin14: ["VIN3"],
  pin15: ["LX3"],
  pin16: ["PGND3"],
  pin17: ["DCDC3"],
  pin18: ["GPIO1"],
  pin19: ["GPIO0"],
  pin20: ["EXTEN"],
  pin21: ["APS"],
  pin22: ["AGND"],
  pin23: ["BIAS"],
  pin24: ["VREF"],
  pin25: ["PWROK"],
  pin26: ["VINT"],
  pin27: ["LDO1SET"],
  pin28: ["LDO1"],
  pin29: ["DC3SET"],
  pin30: ["BACKUP"],
  pin31: ["VBUS"],
  pin32: ["ACIN2"],
  pin33: ["ACIN1"],
  pin34: ["IPSOUT2"],
  pin35: ["IPSOUT1"],
  pin36: ["CHGLED"],
  pin37: ["TS"],
  pin38: ["BAT2"],
  pin39: ["BAT1"],
  pin40: ["LDO3IN"],
  pin41: ["LDO3"],
  pin42: ["BATSENSE"],
  pin43: ["CHAENEN"],
  pin44: ["VIN1"],
  pin45: ["LX1"],
  pin46: ["PGND1"],
  pin47: ["PWRON"],
  pin48: ["IRQ"],
  pin49: ["EP"]
} as const

const pinAttributes = {
  pin7: {requiresPower: true},
  pin9: {requiresGround: true},
  pin14: {requiresPower: true},
  pin16: {requiresGround: true},
  pin22: {requiresGround: true},
  pin44: {requiresPower: true},
  pin46: {requiresGround: true}
} as const

export const AXP203 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3036457"
  ]
}}
      manufacturerPartNumber="AXP203"
      footprint={<footprint>
        <smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" width="4.1999916mm" height="4.1999916mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-0.199898mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="0.199898mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="0.599948mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="0.999998mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="1.400048mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="1.800098mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="2.199894mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-0.599948mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-0.999998mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-1.400048mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-1.800098mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-2.199894mm" pcbY="2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.199894mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.800098mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.400048mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.999998mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.599948mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.199894mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="1.800098mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.400048mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.999998mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.599948mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.199898mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-0.199898mm" pcbY="-2.949956mm" width="0.1999996mm" height="0.850011mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-2.949956mm" pcbY="-2.199894mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.949956mm" pcbY="-1.800098mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-2.949956mm" pcbY="-1.400048mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-2.949956mm" pcbY="-0.999998mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.949956mm" pcbY="-0.599948mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.949956mm" pcbY="2.199894mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.949956mm" pcbY="1.800098mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.949956mm" pcbY="1.400048mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.949956mm" pcbY="0.999998mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.949956mm" pcbY="0.599948mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.949956mm" pcbY="0.199898mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.949956mm" pcbY="-0.199898mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="2.949956mm" pcbY="2.199894mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="2.949956mm" pcbY="1.800098mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="2.949956mm" pcbY="1.400048mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="2.949956mm" pcbY="0.999998mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="2.949956mm" pcbY="0.599948mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.949956mm" pcbY="-2.199894mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="2.949956mm" pcbY="-1.800098mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="2.949956mm" pcbY="-1.400048mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="2.949956mm" pcbY="-0.999998mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="2.949956mm" pcbY="-0.599948mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="2.949956mm" pcbY="-0.199898mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="2.949956mm" pcbY="0.199898mm" width="0.850011mm" height="0.1999996mm" shape="rect" />
<via pcbX="1.500124mm" pcbY="1.49987mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-1.49987mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-1.49987mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-1.49987mm" pcbY="-1.500124mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="-1.500124mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-1.49987mm" pcbY="1.49987mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="-1.500124mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="1.49987mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="1.500124mm" pcbY="-1.500124mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="1.500124mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="1.500124mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="1.49987mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3000248mm" layers={["top","bottom"]} />
<silkscreenpath route={[{"x":-2.999994000000129,"y":-2.4999950000000126},{"x":-2.999994000000129,"y":-2.999994000000015}]} />
<silkscreenpath route={[{"x":-2.999994000000129,"y":-2.999994000000015},{"x":-2.4999950000001263,"y":-2.999994000000015}]} />
<silkscreenpath route={[{"x":2.499994999999899,"y":-2.999994000000015},{"x":2.999994000000015,"y":-2.999994000000015}]} />
<silkscreenpath route={[{"x":2.999994000000015,"y":-2.999994000000015},{"x":2.999994000000015,"y":-2.4999950000000126}]} />
<silkscreenpath route={[{"x":2.999994000000015,"y":2.4999950000001263},{"x":2.999994000000015,"y":2.999994000000015}]} />
<silkscreenpath route={[{"x":2.999994000000015,"y":2.999994000000015},{"x":2.499994999999899,"y":2.999994000000015}]} />
<silkscreenpath route={[{"x":-2.999994000000129,"y":2.999994000000015},{"x":-2.999994000000129,"y":2.4999950000001263}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":2.999994000000015},{"x":-2.999994000000129,"y":2.999994000000015}]} />
<silkscreencircle pcbX="-3.700018mm" pcbY="2.249932mm" radius="0.100076mm" />
<silkscreentext text="{NAME}" pcbX="-0.2286mm" pcbY="4.3782mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.060000000000059,"y":3.6282000000001062},{"x":3.6027999999998883,"y":3.6282000000001062},{"x":3.6027999999998883,"y":-3.6281999999999925},{"x":-4.060000000000059,"y":-3.6281999999999925},{"x":-4.060000000000059,"y":3.6282000000001062}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3036457.obj?uuid=6fb86005e4ec4d598a2ab66efa0e3df1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3036457.step?uuid=6fb86005e4ec4d598a2ab66efa0e3df1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.02 },
      }}
      {...props}
    />
  )
}