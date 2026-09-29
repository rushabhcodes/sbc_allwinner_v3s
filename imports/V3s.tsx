import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["VCC_PE0"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["VDD_SYS3"],
  pin20: ["VDD_CPU3"],
  pin21: ["VDD_CPU2"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["VDD_CPU1"],
  pin26: ["VDD_CPU0"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["VCC_PE1"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["VDD_CPU4"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["VDD_CPU5"],
  pin48: ["pin48"],
  pin49: ["pin49"],
  pin50: ["VCC_IO3"],
  pin51: ["VDD_CPU6"],
  pin52: ["pin52"],
  pin53: ["pin53"],
  pin54: ["pin54"],
  pin55: ["pin55"],
  pin56: ["VDD_CPU7"],
  pin57: ["VCC_IO2"],
  pin58: ["VDD_SYS4"],
  pin59: ["VCC_DRAM8"],
  pin60: ["VCC_DRAM9"],
  pin61: ["VCC_DRAM10"],
  pin62: ["VCC_DARM11"],
  pin63: ["SVREF1"],
  pin64: ["VDD_SYS5"],
  pin65: ["VCC_DRAM0"],
  pin66: ["VCC_DRAM1"],
  pin67: ["VCC_DRAM2"],
  pin68: ["VCC_DRAM3"],
  pin69: ["VCC_DRAM4"],
  pin70: ["VCC_DRAM5"],
  pin71: ["SVREF0"],
  pin72: ["VCC_DRAM6"],
  pin73: ["SZQ"],
  pin74: ["X24MOUT"],
  pin75: ["X24MIN"],
  pin76: ["VCC_PLL"],
  pin77: ["EPHY_LINK_LED"],
  pin78: ["EPHY_SPD_LED"],
  pin79: ["VCC_DRAM7"],
  pin80: ["VDD_SYS0"],
  pin81: ["MCSI_D0P"],
  pin82: ["MCSI_D0N"],
  pin83: ["MCSI_D1P"],
  pin84: ["MCSI_D1N"],
  pin85: ["VCC_MCSI"],
  pin86: ["MCSI_CKP"],
  pin87: ["MCSI_CKN"],
  pin88: ["EPHY_VDD"],
  pin89: ["EPHY_RXN"],
  pin90: ["EPHY_RXP"],
  pin91: ["EPHY_TXN"],
  pin92: ["EPHY_TXP"],
  pin93: ["EPHY_VCC"],
  pin94: ["EPHY_RTX"],
  pin95: ["X32KOUT"],
  pin96: ["X32KIN"],
  pin97: ["RTC_VIO"],
  pin98: ["VCC_RTC"],
  pin99: ["RESET"],
  pin100: ["PF6"],
  pin101: ["pin101"],
  pin102: ["pin102"],
  pin103: ["pin103"],
  pin104: ["VCC_IO0"],
  pin105: ["pin105"],
  pin106: ["pin106"],
  pin107: ["pin107"],
  pin108: ["VDD_SYS1"],
  pin109: ["VCC_USB"],
  pin110: ["USB_DM"],
  pin111: ["USB_DP"],
  pin112: ["LRADC0"],
  pin113: ["MICIN1P"],
  pin114: ["MICIN1N"],
  pin115: ["AVCC"],
  pin116: ["AGND"],
  pin117: ["VRA1"],
  pin118: ["VRA2"],
  pin119: ["HBIAS"],
  pin120: ["HPOUTR"],
  pin121: ["HPOUTL"],
  pin122: ["HPVCCIN"],
  pin123: ["HPVCCBP"],
  pin124: ["HPCOMFB"],
  pin125: ["HPCOM"],
  pin126: ["VDD_SYS2"],
  pin127: ["VCC_IO1"],
  pin128: ["pin128"],
  pin129: ["EGND"]
} as const

const pinAttributes = {
  pin20: {requiresPower: true},
  pin59: {requiresPower: true},
  pin93: {requiresPower: true},
  pin98: {requiresPower: true},
  pin115: {requiresPower: true},
  pin116: {requiresGround: true},
  pin129: {requiresGround: true},
} as const

export const V3s = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      symbol={
        <symbol>
          <schematictext schX={-2.0292} schY={-1.508} text="LCD/CSI" fontSize={0.18} anchor="left" color="#0000FF" schRotation={-270} />
          <schematictext schX={-5} schY={4.2} text="PG/SDC1" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={-1.60002} schY={-1.79998} text="UART/PWM/TWI" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={1.39998} schY={-1.79998} text="SPI" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={2.99998} schY={-1.79998} text="DRAM" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={3.99968} schY={-1.2} text="SYS" fontSize={0.18} anchor="left" color="#0000FF" schRotation={-270} />
          <schematictext schX={3.99968} schY={0.6} text="MIPI" fontSize={0.18} anchor="left" color="#0000FF" schRotation={-270} />
          <schematictext schX={3.99968} schY={2.4} text="EPHY" fontSize={0.18} anchor="left" color="#0000FF" schRotation={-270} />
          <schematictext schX={4.4} schY={4.4} text="RTC" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={1.6} schY={2} text="SDC0/UART0" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={0.8} schY={2} text="USB" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={-2} schY={2} text="CODEC" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematictext schX={-0.9} schY={0.5} text="V3S-eLQFP128" fontSize={0.18} anchor="left" color="#0000FF" schRotation={0} />
          <schematicpath points={[{"x":1.6,"y":1.6},{"x":3.6,"y":1.6}]} strokeColor="#000000" />
          <schematicpath points={[{"x":-1.6,"y":1.6},{"x":0.8,"y":1.6},{"x":0.8,"y":4.8},{"x":1.6,"y":4.8},{"x":1.6,"y":1.6},{"x":0.8,"y":1.6}]} strokeColor="#000000" />
          <schematicpath points={[{"x":-2.2,"y":4.8},{"x":-2.2,"y":1.6},{"x":-2,"y":1.6}]} strokeColor="#000000" />
          <schematicpath points={[{"x":-1.6,"y":-1.4},{"x":-1.6,"y":1.6},{"x":-5.4,"y":1.6}]} strokeColor="#000000" />
          <schematicpath points={[{"x":1.2,"y":-1.4},{"x":-1.6,"y":-1.4},{"x":-1.6,"y":-4.8}]} strokeColor="#000000" />
          <schematicpath points={[{"x":3,"y":-1.4},{"x":1.2,"y":-1.4},{"x":1.2,"y":-4.8}]} strokeColor="#000000" />
          <schematicpath points={[{"x":3.6,"y":-1.4},{"x":3,"y":-1.4},{"x":3,"y":-4.8}]} strokeColor="#000000" />
          <schematicpath points={[{"x":3.6,"y":0.4},{"x":3.6,"y":-1.4},{"x":5.2,"y":-1.4}]} strokeColor="#000000" />
          <schematicpath points={[{"x":3.6,"y":2.2},{"x":3.6,"y":0.4},{"x":5.2,"y":0.4}]} strokeColor="#000000" />
          <schematicpath points={[{"x":3.6,"y":3.8},{"x":3.6,"y":2.2},{"x":5.2,"y":2.2}]} strokeColor="#000000" />
          <schematicpath points={[{"x":3.6,"y":4.8},{"x":3.6,"y":3.8},{"x":5.2,"y":3.8}]} strokeColor="#000000" />
          <port name="pin129" pinNumber={129} aliases={["EGND"]} direction="left" schX={-5.8} schY={-4.2} schStemLength={0.4} />
          <port name="pin128" pinNumber={128} aliases={["128"]} direction="up" schX={-2.8} schY={5.2} schStemLength={0.4} />
          <port name="pin127" pinNumber={127} aliases={["VCC_IO1"]} direction="up" schX={-2.6} schY={5.2} schStemLength={0.4} />
          <port name="pin126" pinNumber={126} aliases={["VDD_SYS2"]} direction="up" schX={-2.4} schY={5.2} schStemLength={0.4} />
          <port name="pin125" pinNumber={125} aliases={["HPCOM"]} direction="up" schX={-2} schY={5.2} schStemLength={0.4} />
          <port name="pin124" pinNumber={124} aliases={["HPCOMFB"]} direction="up" schX={-1.8} schY={5.2} schStemLength={0.4} />
          <port name="pin123" pinNumber={123} aliases={["HPVCCBP"]} direction="up" schX={-1.6} schY={5.2} schStemLength={0.4} />
          <port name="pin122" pinNumber={122} aliases={["HPVCCIN"]} direction="up" schX={-1.4} schY={5.2} schStemLength={0.4} />
          <port name="pin121" pinNumber={121} aliases={["HPOUTL"]} direction="up" schX={-1.2} schY={5.2} schStemLength={0.4} />
          <port name="pin120" pinNumber={120} aliases={["HPOUTR"]} direction="up" schX={-1} schY={5.2} schStemLength={0.4} />
          <port name="pin119" pinNumber={119} aliases={["HBIAS"]} direction="up" schX={-0.8} schY={5.2} schStemLength={0.4} />
          <port name="pin118" pinNumber={118} aliases={["VRA2"]} direction="up" schX={-0.6} schY={5.2} schStemLength={0.4} />
          <port name="pin117" pinNumber={117} aliases={["VRA1"]} direction="up" schX={-0.4} schY={5.2} schStemLength={0.4} />
          <port name="pin116" pinNumber={116} aliases={["AGND"]} direction="up" schX={-0.2} schY={5.2} schStemLength={0.4} />
          <port name="pin115" pinNumber={115} aliases={["AVCC"]} direction="up" schX={0} schY={5.2} schStemLength={0.4} />
          <port name="pin114" pinNumber={114} aliases={["MICIN1N"]} direction="up" schX={0.2} schY={5.2} schStemLength={0.4} />
          <port name="pin113" pinNumber={113} aliases={["MICIN1P"]} direction="up" schX={0.4} schY={5.2} schStemLength={0.4} />
          <port name="pin112" pinNumber={112} aliases={["LRADC0"]} direction="up" schX={0.6} schY={5.2} schStemLength={0.4} />
          <port name="pin111" pinNumber={111} aliases={["USB_DP"]} direction="up" schX={1} schY={5.2} schStemLength={0.4} />
          <port name="pin110" pinNumber={110} aliases={["USB_DM"]} direction="up" schX={1.2} schY={5.2} schStemLength={0.4} />
          <port name="pin109" pinNumber={109} aliases={["VCC_USB"]} direction="up" schX={1.4} schY={5.2} schStemLength={0.4} />
          <port name="pin108" pinNumber={108} aliases={["VDD_SYS1"]} direction="up" schX={1.8} schY={5.2} schStemLength={0.4} />
          <port name="pin107" pinNumber={107} aliases={["107"]} direction="up" schX={2} schY={5.2} schStemLength={0.4} />
          <port name="pin106" pinNumber={106} aliases={["106"]} direction="up" schX={2.2} schY={5.2} schStemLength={0.4} />
          <port name="pin105" pinNumber={105} aliases={["105"]} direction="up" schX={2.4} schY={5.2} schStemLength={0.4} />
          <port name="pin104" pinNumber={104} aliases={["VCC_IO0"]} direction="up" schX={2.6} schY={5.2} schStemLength={0.4} />
          <port name="pin103" pinNumber={103} aliases={["103"]} direction="up" schX={2.8} schY={5.2} schStemLength={0.4} />
          <port name="pin102" pinNumber={102} aliases={["102"]} direction="up" schX={3} schY={5.2} schStemLength={0.4} />
          <port name="pin101" pinNumber={101} aliases={["101"]} direction="up" schX={3.2} schY={5.2} schStemLength={0.4} />
          <port name="pin100" pinNumber={100} aliases={["PF6"]} direction="up" schX={3.4} schY={5.2} schStemLength={0.4} />
          <port name="pin99" pinNumber={99} aliases={["RESET"]} direction="up" schX={3.8} schY={5.2} schStemLength={0.4} />
          <port name="pin98" pinNumber={98} aliases={["VCC_RTC"]} direction="up" schX={4} schY={5.2} schStemLength={0.4} />
          <port name="pin97" pinNumber={97} aliases={["RTC_VIO"]} direction="up" schX={4.2} schY={5.2} schStemLength={0.4} />
          <port name="pin96" pinNumber={96} aliases={["X32KIN"]} direction="right" schX={5.6} schY={4.2} schStemLength={0.4} />
          <port name="pin95" pinNumber={95} aliases={["X32KOUT"]} direction="right" schX={5.6} schY={4} schStemLength={0.4} />
          <port name="pin94" pinNumber={94} aliases={["EPHY_RTX"]} direction="right" schX={5.6} schY={3.6} schStemLength={0.4} />
          <port name="pin93" pinNumber={93} aliases={["EPHY_VCC"]} direction="right" schX={5.6} schY={3.4} schStemLength={0.4} />
          <port name="pin92" pinNumber={92} aliases={["EPHY_TXP"]} direction="right" schX={5.6} schY={3.2} schStemLength={0.4} />
          <port name="pin91" pinNumber={91} aliases={["EPHY_TXN"]} direction="right" schX={5.6} schY={3} schStemLength={0.4} />
          <port name="pin90" pinNumber={90} aliases={["EPHY_RXP"]} direction="right" schX={5.6} schY={2.8} schStemLength={0.4} />
          <port name="pin89" pinNumber={89} aliases={["EPHY_RXN"]} direction="right" schX={5.6} schY={2.6} schStemLength={0.4} />
          <port name="pin88" pinNumber={88} aliases={["EPHY_VDD"]} direction="right" schX={5.6} schY={2.4} schStemLength={0.4} />
          <port name="pin87" pinNumber={87} aliases={["MCSI_CKN"]} direction="right" schX={5.6} schY={2} schStemLength={0.4} />
          <port name="pin86" pinNumber={86} aliases={["MCSI_CKP"]} direction="right" schX={5.6} schY={1.8} schStemLength={0.4} />
          <port name="pin85" pinNumber={85} aliases={["VCC_MCSI"]} direction="right" schX={5.6} schY={1.6} schStemLength={0.4} />
          <port name="pin84" pinNumber={84} aliases={["MCSI_D1N"]} direction="right" schX={5.6} schY={1.4} schStemLength={0.4} />
          <port name="pin83" pinNumber={83} aliases={["MCSI_D1P"]} direction="right" schX={5.6} schY={1.2} schStemLength={0.4} />
          <port name="pin82" pinNumber={82} aliases={["MCSI_D0N"]} direction="right" schX={5.6} schY={1} schStemLength={0.4} />
          <port name="pin81" pinNumber={81} aliases={["MCSI_D0P"]} direction="right" schX={5.6} schY={0.8} schStemLength={0.4} />
          <port name="pin80" pinNumber={80} aliases={["VDD_SYS0"]} direction="right" schX={5.6} schY={0.6} schStemLength={0.4} />
          <port name="pin79" pinNumber={79} aliases={["VCC_DRAM7"]} direction="right" schX={5.6} schY={0} schStemLength={0.4} />
          <port name="pin78" pinNumber={78} aliases={["EPHY_SPD_LED"]} direction="right" schX={5.6} schY={-0.2} schStemLength={0.4} />
          <port name="pin77" pinNumber={77} aliases={["EPHY_LINK_LED"]} direction="right" schX={5.6} schY={-0.4} schStemLength={0.4} />
          <port name="pin76" pinNumber={76} aliases={["VCC_PLL"]} direction="right" schX={5.6} schY={-0.6} schStemLength={0.4} />
          <port name="pin75" pinNumber={75} aliases={["X24MIN"]} direction="right" schX={5.6} schY={-0.8} schStemLength={0.4} />
          <port name="pin74" pinNumber={74} aliases={["X24MOUT"]} direction="right" schX={5.6} schY={-1} schStemLength={0.4} />
          <port name="pin73" pinNumber={73} aliases={["SZQ"]} direction="right" schX={5.6} schY={-1.8} schStemLength={0.4} />
          <port name="pin72" pinNumber={72} aliases={["VCC_DRAM6"]} direction="right" schX={5.6} schY={-2} schStemLength={0.4} />
          <port name="pin71" pinNumber={71} aliases={["SVREF0"]} direction="right" schX={5.6} schY={-2.2} schStemLength={0.4} />
          <port name="pin70" pinNumber={70} aliases={["VCC_DRAM5"]} direction="right" schX={5.6} schY={-2.4} schStemLength={0.4} />
          <port name="pin69" pinNumber={69} aliases={["VCC_DRAM4"]} direction="right" schX={5.6} schY={-2.6} schStemLength={0.4} />
          <port name="pin68" pinNumber={68} aliases={["VCC_DRAM3"]} direction="right" schX={5.6} schY={-2.8} schStemLength={0.4} />
          <port name="pin67" pinNumber={67} aliases={["VCC_DRAM2"]} direction="right" schX={5.6} schY={-3} schStemLength={0.4} />
          <port name="pin66" pinNumber={66} aliases={["VCC_DRAM1"]} direction="right" schX={5.6} schY={-3.2} schStemLength={0.4} />
          <port name="pin65" pinNumber={65} aliases={["VCC_DRAM0"]} direction="right" schX={5.6} schY={-3.4} schStemLength={0.4} />
          <port name="pin64" pinNumber={64} aliases={["VDD_SYS5"]} direction="down" schX={4.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin63" pinNumber={63} aliases={["SVREF1"]} direction="down" schX={4.4} schY={-5.2} schStemLength={0.4} />
          <port name="pin62" pinNumber={62} aliases={["VCC_DARM11"]} direction="down" schX={4.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin61" pinNumber={61} aliases={["VCC_DRAM10"]} direction="down" schX={4} schY={-5.2} schStemLength={0.4} />
          <port name="pin60" pinNumber={60} aliases={["VCC_DRAM9"]} direction="down" schX={3.8} schY={-5.2} schStemLength={0.4} />
          <port name="pin59" pinNumber={59} aliases={["VCC_DRAM8"]} direction="down" schX={3.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin58" pinNumber={58} aliases={["VDD_SYS4"]} direction="down" schX={3.4} schY={-5.2} schStemLength={0.4} />
          <port name="pin57" pinNumber={57} aliases={["VCC_IO2"]} direction="down" schX={2.8} schY={-5.2} schStemLength={0.4} />
          <port name="pin56" pinNumber={56} aliases={["VDD_CPU7"]} direction="down" schX={2.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin55" pinNumber={55} aliases={["55"]} direction="down" schX={2.4} schY={-5.2} schStemLength={0.4} />
          <port name="pin54" pinNumber={54} aliases={["54"]} direction="down" schX={2.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin53" pinNumber={53} aliases={["53"]} direction="down" schX={2} schY={-5.2} schStemLength={0.4} />
          <port name="pin52" pinNumber={52} aliases={["52"]} direction="down" schX={1.8} schY={-5.2} schStemLength={0.4} />
          <port name="pin51" pinNumber={51} aliases={["VDD_CPU6"]} direction="down" schX={1.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin50" pinNumber={50} aliases={["VCC_IO3"]} direction="down" schX={1} schY={-5.2} schStemLength={0.4} />
          <port name="pin49" pinNumber={49} aliases={["49"]} direction="down" schX={0.8} schY={-5.2} schStemLength={0.4} />
          <port name="pin48" pinNumber={48} aliases={["48"]} direction="down" schX={0.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin47" pinNumber={47} aliases={["VDD_CPU5"]} direction="down" schX={0.4} schY={-5.2} schStemLength={0.4} />
          <port name="pin46" pinNumber={46} aliases={["46"]} direction="down" schX={0.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin45" pinNumber={45} aliases={["45"]} direction="down" schX={0} schY={-5.2} schStemLength={0.4} />
          <port name="pin44" pinNumber={44} aliases={["44"]} direction="down" schX={-0.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin43" pinNumber={43} aliases={["43"]} direction="down" schX={-0.4} schY={-5.2} schStemLength={0.4} />
          <port name="pin42" pinNumber={42} aliases={["42"]} direction="down" schX={-0.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin41" pinNumber={41} aliases={["41"]} direction="down" schX={-0.8} schY={-5.2} schStemLength={0.4} />
          <port name="pin40" pinNumber={40} aliases={["40"]} direction="down" schX={-1} schY={-5.2} schStemLength={0.4} />
          <port name="pin39" pinNumber={39} aliases={["39"]} direction="down" schX={-1.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin38" pinNumber={38} aliases={["VDD_CPU4"]} direction="down" schX={-2.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin37" pinNumber={37} aliases={["37"]} direction="down" schX={-2.4} schY={-5.2} schStemLength={0.4} />
          <port name="pin36" pinNumber={36} aliases={["36"]} direction="down" schX={-2.6} schY={-5.2} schStemLength={0.4} />
          <port name="pin35" pinNumber={35} aliases={["35"]} direction="down" schX={-2.8} schY={-5.2} schStemLength={0.4} />
          <port name="pin34" pinNumber={34} aliases={["34"]} direction="down" schX={-3} schY={-5.2} schStemLength={0.4} />
          <port name="pin33" pinNumber={33} aliases={["33"]} direction="down" schX={-3.2} schY={-5.2} schStemLength={0.4} />
          <port name="pin32" pinNumber={32} aliases={["32"]} direction="left" schX={-5.8} schY={-3.8} schStemLength={0.4} />
          <port name="pin31" pinNumber={31} aliases={["31"]} direction="left" schX={-5.8} schY={-3.6} schStemLength={0.4} />
          <port name="pin30" pinNumber={30} aliases={["30"]} direction="left" schX={-5.8} schY={-3.4} schStemLength={0.4} />
          <port name="pin29" pinNumber={29} aliases={["VCC_PE1"]} direction="left" schX={-5.8} schY={-3.2} schStemLength={0.4} />
          <port name="pin28" pinNumber={28} aliases={["28"]} direction="left" schX={-5.8} schY={-3} schStemLength={0.4} />
          <port name="pin27" pinNumber={27} aliases={["27"]} direction="left" schX={-5.8} schY={-2.8} schStemLength={0.4} />
          <port name="pin26" pinNumber={26} aliases={["VDD_CPU0"]} direction="left" schX={-5.8} schY={-2.6} schStemLength={0.4} />
          <port name="pin25" pinNumber={25} aliases={["VDD_CPU1"]} direction="left" schX={-5.8} schY={-2.4} schStemLength={0.4} />
          <port name="pin24" pinNumber={24} aliases={["24"]} direction="left" schX={-5.8} schY={-2.2} schStemLength={0.4} />
          <port name="pin23" pinNumber={23} aliases={["23"]} direction="left" schX={-5.8} schY={-2} schStemLength={0.4} />
          <port name="pin22" pinNumber={22} aliases={["22"]} direction="left" schX={-5.8} schY={-1.8} schStemLength={0.4} />
          <port name="pin21" pinNumber={21} aliases={["VDD_CPU2"]} direction="left" schX={-5.8} schY={-1.6} schStemLength={0.4} />
          <port name="pin20" pinNumber={20} aliases={["VDD_CPU3"]} direction="left" schX={-5.8} schY={-1.4} schStemLength={0.4} />
          <port name="pin19" pinNumber={19} aliases={["VDD_SYS3"]} direction="left" schX={-5.8} schY={-1.2} schStemLength={0.4} />
          <port name="pin18" pinNumber={18} aliases={["18"]} direction="left" schX={-5.8} schY={-1} schStemLength={0.4} />
          <port name="pin17" pinNumber={17} aliases={["17"]} direction="left" schX={-5.8} schY={-0.8} schStemLength={0.4} />
          <port name="pin16" pinNumber={16} aliases={["16"]} direction="left" schX={-5.8} schY={-0.6} schStemLength={0.4} />
          <port name="pin15" pinNumber={15} aliases={["15"]} direction="left" schX={-5.8} schY={-0.4} schStemLength={0.4} />
          <port name="pin14" pinNumber={14} aliases={["14"]} direction="left" schX={-5.8} schY={-0.2} schStemLength={0.4} />
          <port name="pin13" pinNumber={13} aliases={["13"]} direction="left" schX={-5.8} schY={0} schStemLength={0.4} />
          <port name="pin12" pinNumber={12} aliases={["VCC_PE0"]} direction="left" schX={-5.8} schY={0.2} schStemLength={0.4} />
          <port name="pin11" pinNumber={11} aliases={["11"]} direction="left" schX={-5.8} schY={0.4} schStemLength={0.4} />
          <port name="pin10" pinNumber={10} aliases={["10"]} direction="left" schX={-5.8} schY={0.6} schStemLength={0.4} />
          <port name="pin9" pinNumber={9} aliases={["9"]} direction="left" schX={-5.8} schY={0.8} schStemLength={0.4} />
          <port name="pin8" pinNumber={8} aliases={["8"]} direction="left" schX={-5.8} schY={1} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["7"]} direction="left" schX={-5.8} schY={1.2} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["6"]} direction="left" schX={-5.8} schY={1.4} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="left" schX={-5.8} schY={2} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="left" schX={-5.8} schY={2.2} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="left" schX={-5.8} schY={2.4} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="left" schX={-5.8} schY={2.6} schStemLength={0.4} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-5.8} schY={2.8} schStemLength={0.4} />
          <schematicrect schX={-0.1} schY={0} width={10.6} height={9.6} strokeWidth={0.02} color="#000000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C2687449"
  ]
}}
      manufacturerPartNumber="V3s"
      footprint={<footprint>
        <smtpad portHints={["pin128"]} pcbX="-7.59968mm" pcbY="-6.20014mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin127"]} pcbX="-7.59968mm" pcbY="-5.80009mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin126"]} pcbX="-7.59968mm" pcbY="-5.40004mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin125"]} pcbX="-7.59968mm" pcbY="-4.99999mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin124"]} pcbX="-7.59968mm" pcbY="-4.59994mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin123"]} pcbX="-7.59968mm" pcbY="-4.19989mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin122"]} pcbX="-7.59968mm" pcbY="-3.79984mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin121"]} pcbX="-7.59968mm" pcbY="-3.400044mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin120"]} pcbX="-7.59968mm" pcbY="-2.99974mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin119"]} pcbX="-7.59968mm" pcbY="-2.599944mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin118"]} pcbX="-7.59968mm" pcbY="-2.19964mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin117"]} pcbX="-7.59968mm" pcbY="-1.800098mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin116"]} pcbX="-7.59968mm" pcbY="-1.39954mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin115"]} pcbX="-7.59968mm" pcbY="-0.999998mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin114"]} pcbX="-7.59968mm" pcbY="-0.599948mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin113"]} pcbX="-7.59968mm" pcbY="-0.199898mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin112"]} pcbX="-7.59968mm" pcbY="0.199898mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin111"]} pcbX="-7.59968mm" pcbY="0.599948mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin110"]} pcbX="-7.59968mm" pcbY="0.999998mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin109"]} pcbX="-7.59968mm" pcbY="1.39954mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin108"]} pcbX="-7.59968mm" pcbY="1.800098mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin107"]} pcbX="-7.59968mm" pcbY="2.19964mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin106"]} pcbX="-7.59968mm" pcbY="2.599944mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin105"]} pcbX="-7.59968mm" pcbY="2.99974mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin104"]} pcbX="-7.59968mm" pcbY="3.400044mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin103"]} pcbX="-7.59968mm" pcbY="3.79984mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin102"]} pcbX="-7.59968mm" pcbY="4.19989mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin101"]} pcbX="-7.59968mm" pcbY="4.59994mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin100"]} pcbX="-7.59968mm" pcbY="4.99999mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin99"]} pcbX="-7.59968mm" pcbY="5.40004mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin98"]} pcbX="-7.59968mm" pcbY="5.80009mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin97"]} pcbX="-7.59968mm" pcbY="6.20014mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin96"]} pcbX="-6.20014mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin95"]} pcbX="-5.80009mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin94"]} pcbX="-5.40004mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin93"]} pcbX="-4.99999mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin92"]} pcbX="-4.59994mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin91"]} pcbX="-4.19989mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin90"]} pcbX="-3.79984mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin89"]} pcbX="-3.400044mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin88"]} pcbX="-2.99974mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin87"]} pcbX="-2.599944mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin86"]} pcbX="-2.19964mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin85"]} pcbX="-1.800098mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin84"]} pcbX="-1.39954mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin83"]} pcbX="-0.999998mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin82"]} pcbX="-0.599948mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin81"]} pcbX="-0.199898mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin80"]} pcbX="0.199898mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin79"]} pcbX="0.599948mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin78"]} pcbX="0.999998mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin77"]} pcbX="1.39954mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin76"]} pcbX="1.800098mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin75"]} pcbX="2.19964mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin74"]} pcbX="2.599944mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin73"]} pcbX="2.99974mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin72"]} pcbX="3.400044mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin71"]} pcbX="3.79984mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin70"]} pcbX="4.19989mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin69"]} pcbX="4.59994mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin68"]} pcbX="4.99999mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin67"]} pcbX="5.40004mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin66"]} pcbX="5.80009mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin65"]} pcbX="6.20014mm" pcbY="7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin64"]} pcbX="7.59968mm" pcbY="6.20014mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin63"]} pcbX="7.59968mm" pcbY="5.80009mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin62"]} pcbX="7.59968mm" pcbY="5.40004mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin61"]} pcbX="7.59968mm" pcbY="4.99999mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin60"]} pcbX="7.59968mm" pcbY="4.59994mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin59"]} pcbX="7.59968mm" pcbY="4.19989mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin58"]} pcbX="7.59968mm" pcbY="3.79984mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin57"]} pcbX="7.59968mm" pcbY="3.400044mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin56"]} pcbX="7.59968mm" pcbY="2.99974mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin55"]} pcbX="7.59968mm" pcbY="2.599944mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin54"]} pcbX="7.59968mm" pcbY="2.19964mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin53"]} pcbX="7.59968mm" pcbY="1.800098mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin52"]} pcbX="7.59968mm" pcbY="1.39954mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin51"]} pcbX="7.59968mm" pcbY="0.999998mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin50"]} pcbX="7.59968mm" pcbY="0.599948mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin49"]} pcbX="7.59968mm" pcbY="0.199898mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin48"]} pcbX="7.59968mm" pcbY="-0.199898mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin47"]} pcbX="7.59968mm" pcbY="-0.599948mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin46"]} pcbX="7.59968mm" pcbY="-0.999998mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin45"]} pcbX="7.59968mm" pcbY="-1.39954mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin44"]} pcbX="7.59968mm" pcbY="-1.800098mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin43"]} pcbX="7.59968mm" pcbY="-2.19964mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin42"]} pcbX="7.59968mm" pcbY="-2.599944mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin41"]} pcbX="7.59968mm" pcbY="-2.99974mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin40"]} pcbX="7.59968mm" pcbY="-3.400044mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin39"]} pcbX="7.59968mm" pcbY="-3.79984mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin38"]} pcbX="7.59968mm" pcbY="-4.19989mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin37"]} pcbX="7.59968mm" pcbY="-4.59994mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin36"]} pcbX="7.59968mm" pcbY="-4.99999mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin35"]} pcbX="7.59968mm" pcbY="-5.40004mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin34"]} pcbX="7.59968mm" pcbY="-5.80009mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin33"]} pcbX="7.59968mm" pcbY="-6.20014mm" width="1.499997mm" height="0.1999996mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="6.20014mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="5.80009mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="5.40004mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="4.99999mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="4.59994mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="4.19989mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="3.79984mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="3.400044mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="2.99974mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="2.599944mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="2.19964mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="1.800098mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="1.39954mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="0.999998mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="0.599948mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="0.199898mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="-0.199898mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="-0.599948mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="-0.999998mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="-1.39954mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="-1.800098mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="-2.19964mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="-2.599944mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="-2.99974mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-3.400044mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-3.79984mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-4.19989mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-4.59994mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-4.99999mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-5.40004mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-5.80009mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-6.20014mm" pcbY="-7.59968mm" width="0.1999996mm" height="1.499997mm" radius="0.0999998mm" shape="pill" />
<smtpad portHints={["pin129"]} pcbX="0mm" pcbY="-0mm" width="4.99999mm" height="4.99999mm" shape="rect" />
<silkscreenpath route={[{"x":-6.249924000000078,"y":6.2499239999999645},{"x":6.2499239999999645,"y":6.2499239999999645},{"x":6.2499239999999645,"y":-6.249924000000192},{"x":-6.249924000000078,"y":-6.249924000000192},{"x":-6.249924000000078,"y":6.2499239999999645}]} />
<silkscreenpath route={[{"x":-6.850379999999859,"y":-7.774940000000015},{"x":-6.999121055997648,"y":-7.925582029703946},{"x":-6.84911000000011,"y":-8.074959424014764},{"x":-6.699098944002458,"y":-7.925582029703946},{"x":-6.847840000000133,"y":-7.774940000000015}]} />
<silkscreenpath route={[{"x":-5.25018,"y":-4.950460000000021},{"x":-5.461114378608045,"y":-5.039668359429925},{"x":-5.547636711767723,"y":-5.251718658499385},{"x":-5.459322117038937,"y":-5.463028799829203},{"x":-5.247640000000047,"y":-5.550448047119062},{"x":-5.035957882960929,"y":-5.46302879982909},{"x":-4.947643288232371,"y":-5.251718658499271},{"x":-5.034165621392049,"y":-5.039668359429925},{"x":-5.245100000000093,"y":-4.950460000000021}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="9.255mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.50500000000011,"y":8.504999999999882},{"x":8.504999999999882,"y":8.504999999999882},{"x":8.504999999999882,"y":-8.962200000000166},{"x":-8.50500000000011,"y":-8.962200000000166},{"x":-8.50500000000011,"y":8.504999999999882}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2687449.obj?uuid=a37d28e38fe149de84cdd024ce396aec",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2687449.step?uuid=a37d28e38fe149de84cdd024ce396aec",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
