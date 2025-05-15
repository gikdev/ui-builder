import { useState } from "react"
import { PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { styled } from "restyle"
import type { UIElement } from "#/types"
import Canvas from "./canvas"
import ElementsPanel from "./elements-panel"
import Toolbox from "./toolbox"

export default function App() {
  const [elements, setElements] = useState<UIElement[]>([])

  const handleAddElement = (element: UIElement) => {
    setElements(prev => [...prev, element])
  }

  const updateElement = (id: string, changes: Partial<UIElement>) => {
    setElements(prev => {
      return prev.map(el => {
        const isTheSameElement = el.id === id
        if (!isTheSameElement) return el
        return { ...el, id, ...changes } as UIElement
      })
    })
  }

  return (
    <Container direction="horizontal">
      <ElementsPanel elements={elements} onUpdate={updateElement} />
      <PanelResizeHandle />
      <Canvas elements={elements} />
      <PanelResizeHandle />
      <Toolbox onAdd={handleAddElement} />
    </Container>
  )
}

const Container = styled(PanelGroup, {
  display: "flex",
  minHeight: "100dvh",
  gap: "1rem",
  padding: "1rem",
})
