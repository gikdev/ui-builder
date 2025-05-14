import { useState } from "react"
import Canvas from "./canvas"
import ElementsPanel from "./elements-panel"
import Toolbox from "./toolbox"
import type { ElementData } from "./types"

export default function App() {
  const [elements, setElements] = useState<ElementData[]>([])

  const handleAddElement = (element: ElementData) => {
    setElements(prev => [...prev, element])
  }

  const updateElement = (id: string, changes: Partial<ElementData>) => {
    setElements(prev => prev.map(el => (el.id === id ? { ...el, ...changes } : el)))
  }

  return (
    <div className="container-main">
      <ElementsPanel elements={elements} onUpdate={updateElement} />
      <Toolbox onAdd={handleAddElement} />
      <Canvas elements={elements} />
    </div>
  )
}
