// run the file, like this:
// bun ./converter.ts >> vars.css
import * as colors from "./dark"

type ColorShades = Record<string, string>
type ColorPalette = Record<string, ColorShades>

function generateCSSVariables(colors: ColorPalette): string {
  const lines: string[] = [":root {"]

  for (const [palette, shades] of Object.entries(colors))
    for (const [shade, hex] of Object.entries(shades))
      lines.push(`  --rdx-clr-${palette}-${shade}: ${hex};`)

  lines.push("}")
  return lines.join("\n")
}

console.log(generateCSSVariables(colors))
