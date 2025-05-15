import { SlidersHorizontal, Toolbox as ToolboxIcon } from "@phosphor-icons/react"
import { useAtom } from "jotai"
import { PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { styled } from "restyle"
import IconPanel, { type IconItem } from "#/components/icon-panel"
import { type Panel, activePanelAtom, elementsAtom } from "#/shared/atoms"
import Canvas from "./canvas"
import ElementsPanel from "./elements-panel"
import Properties from "./properties"
import Toolbox from "./toolbox"

const panels: IconItem[] = [
  {
    id: "toolbox",
    name: "Toolbox",
    Icon: ToolboxIcon,
  },
  {
    id: "properties",
    name: "Properties",
    Icon: SlidersHorizontal,
  },
]

export default function App() {
  const [elements] = useAtom(elementsAtom)
  const [activePanel, setActivePanel] = useAtom(activePanelAtom)

  return (
    <Container direction="horizontal">
      <ElementsPanel />
      <PanelResizeHandle />
      <Canvas elements={elements} />
      <PanelResizeHandle />
      {activePanel === "toolbox" && <Toolbox />}
      {activePanel === "properties" && <Properties />}
      <IconPanel
        onSelect={id => setActivePanel(id as Panel)}
        activePanelId={activePanel}
        items={panels}
      />
    </Container>
  )
}

const Container = styled(PanelGroup, {
  display: "flex",
  minHeight: "100dvh",
  gap: "1rem",
  padding: "1rem",
})
