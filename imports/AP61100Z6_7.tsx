import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["FB"],
  pin2: ["GND"],
  pin3: ["VIN"],
  pin4: ["SW"],
  pin5: ["EN"],
  pin6: ["OUT"]
} as const

const pinAttributes = {
  pin2: {requiresGround: true},
  pin3: {requiresPower: true}
} as const

export const AP61100Z6_7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1858397"
  ]
}}
      manufacturerPartNumber="AP61100Z6-7"
      footprint="dfn6_p0.5mm_w2.0999mm_pw0.3mm_pl0.5mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1858397.obj?uuid=ec2270bac0544bf5afe06b24e8356512",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1858397.step?uuid=ec2270bac0544bf5afe06b24e8356512",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00005079999999679785, y: 0.02905759999998736, z: 0 },
      }}
      {...props}
    />
  )
}