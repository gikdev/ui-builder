import { useAtom, useAtomValue } from "jotai"
import { Panel } from "react-resizable-panels"
import { styled } from "restyle"
import StringField from "#/components/string-field"
import htmlData from "#/lib/html-data/data"
import type { HtmlAttribute } from "#/lib/html-data/types"
import { elementsAtom, selectedElementAtom } from "#/shared/atoms"
import * as rdxClrs from "#/styles/dark"
import { UIElement } from "#/types"

export default function Properties() {
  const [elements, setElements] = useAtom(elementsAtom)
  const selectedElementId = useAtomValue(selectedElementAtom)

  const selectedElement = elements.find(e => e.id === selectedElementId)

  if (!selectedElement) return

  const fullSelectedElement = htmlData.tags.find(t => t.name === selectedElement?.tag)

  if (!fullSelectedElement) return

  const attrs: string[] = (
    [...htmlData.globalAttributes, ...fullSelectedElement.attributes] satisfies HtmlAttribute[]
  )
    .map(a => a.name)
    .filter(n => !n.startsWith("on"))
    .filter(n => !n.startsWith("aria"))

  if (!fullSelectedElement?.void) {
    attrs.push("content")
    attrs.sort()
  }

  const handleChange = (key: string, value: string) => {
    if (key === "content") {
      selectedElement.children = [value]
    } else {
      selectedElement.attrs = {
        ...selectedElement.attrs,
        [key]: value,
      }
    }

    setElements(p => [
      ...p.filter(e => e.id !== selectedElementId),
      UIElement.clone(selectedElement),
    ])
  }

  return (
    <Container minSize={20} defaultSize={30}>
      <Title>Properties</Title>

      <ScrollArea>
        {selectedElement ? (
          attrs.map(a => (
            <StringField label={a} value="" key={a} onChange={v => handleChange(a, v)} />
          ))
        ) : (
          <p>Select an element to continue...</p>
        )}
      </ScrollArea>
    </Container>
  )
}

const Container = styled(Panel, {
  backgroundColor: rdxClrs.slate["02"],
  paddingTop: "2rem",
  paddingBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  borderRadius: "1rem",
  overflowY: "scroll",
  width: "50rem",
  maxHeight: "100dvh",
  height: "auto",
  minHeight: "50dvh",
})

const Title = styled("h2", {
  paddingRight: "2rem",
  paddingLeft: "2rem",
  fontSize: "2rem",
  marginBottom: "0.5rem",
})

const ScrollArea = styled("div", {
  overflowY: "auto",
  flex: 1,
  minHeight: 0,
})
