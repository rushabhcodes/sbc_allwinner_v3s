import type { CrystalProps } from "@tscircuit/props"

type ImportedCrystalProps = Omit<CrystalProps, "frequency" | "pinVariant">

export const X322524MOB4SI = (props: ImportedCrystalProps) => {
  const { name = "X1", ...restProps } = props

  return (
    <crystal
      name={name}
      frequency="24MHz"
      pinVariant="four_pin"
      supplierPartNumbers={{
  "jlcpcb": [
    "C70590"
  ]
}}
      manufacturerPartNumber="X322524MOB4SI"
      footprint="crystal"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C70590.obj?uuid=02485e56ba8d4732a26526d2983fc729",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C70590.step?uuid=02485e56ba8d4732a26526d2983fc729",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: 0 },
      }}
      {...restProps}
    />
  )
}