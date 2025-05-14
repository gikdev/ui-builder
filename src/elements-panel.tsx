import * as theme from "./assets/dark"
import type { ElementData } from "./types"

interface ElementsPanelProps {
  elements: ElementData[]
  onUpdate: (id: string, newData: Partial<ElementData>) => void
}

export default function ElementsPanel({ elements, onUpdate }: ElementsPanelProps) {
  return (
    <div style={{ width: "250px", borderRight: "1px solid #ccc", padding: "1rem" }}>
      <h3>Elements</h3>

      {elements.map(el => (
        <details key={el.id} style={{ marginBottom: "1rem" }}>
          <summary>
            {el.tag}
            <span style={{ color: theme.slate["10"] }}>#</span>
            {el.id}
          </summary>

          <div style={{ marginTop: "0.5rem" }}>
            <label>
              Text:
              <input
                value={el.text}
                onChange={e => onUpdate(el.id, { text: e.target.value })}
                style={{ display: "block", width: "100%" }}
              />
            </label>
          </div>
        </details>
      ))}
    </div>
  )
}
