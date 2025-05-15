import { Trash } from "@phosphor-icons/react"
import { useAtom } from "jotai"
import { useKeyPress } from "react-haiku"
import { Panel } from "react-resizable-panels"
import { styled } from "restyle"
import { elementsAtom, selectedElementAtom } from "#/shared/atoms"
import * as rdxClrs from "#/styles/dark"

export default function ElementsPanel() {
  const [selectedElement, setSelectedElement] = useAtom(selectedElementAtom)
  const [elements, setElements] = useAtom(elementsAtom)

  function removeSelectedElement() {
    if (!selectedElement) return
    setElements(c => c.filter(e => e.id !== selectedElement))
  }

  useKeyPress(["delete"], removeSelectedElement)

  return (
    <Container minSize={20} defaultSize={30}>
      <Nav>
        <Title>Elements</Title>
        <IconBtn type="button" onClick={removeSelectedElement}>
          <Trash size={16} />
        </IconBtn>
      </Nav>

      <ElementsContainer>
        {elements.map(el => (
          <ElementItem
            type="button"
            onClick={() => setSelectedElement(selectedElement === el.id ? "" : el.id)}
            className={selectedElement === el.id ? "active" : undefined}
            key={el.id}
          >
            {el.name ? `${el.name} <${el.tag}#${el.id}>` : `${el.tag}#${el.id}`}
          </ElementItem>
        ))}
      </ElementsContainer>
    </Container>
  )
}

const Container = styled(Panel, {
  backgroundColor: rdxClrs.slate["02"],
  paddingTop: "2rem",
  paddingBottom: "2rem",
  borderRadius: "1rem",
  overflow: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  overflowY: "scroll",
  width: "50rem",
  maxHeight: "100dvh",
  height: "auto",
  minHeight: "50dvh",
})

const Nav = styled("div", {
  paddingRight: "2rem",
  paddingLeft: "2rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

const Title = styled("p", {
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
  fontWeight: "bold",
  marginInlineEnd: "auto",
})

const IconBtn = styled("button", {
  border: "none",
  color: rdxClrs.slate[11],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 200ms",
  backgroundColor: "transparent",
  padding: 0,
  width: "2.5rem",
  height: "2.5rem",

  "&:hover": {
    backgroundColor: rdxClrs.slate["03"],
    color: rdxClrs.slate[12],
  },
})

const ElementsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  flex: 1,
  minHeight: 0,
})

const ElementItem = styled("button", {
  border: "none",
  color: rdxClrs.slate[11],
  display: "flex",
  cursor: "pointer",
  gap: "0.5rem",
  alignItems: "center",
  fontSize: "1.2rem",
  padding: "0.3rem 2rem",
  transition: "all 200ms",
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: rdxClrs.slate["03"],
    color: rdxClrs.slate[12],
  },

  "&.active": {
    backgroundColor: rdxClrs.blue["09"],
    color: rdxClrs.slate[12],

    "&:hover": {
      backgroundColor: rdxClrs.blue["10"],
      color: rdxClrs.slate[12],
    },
  },

  span: {
    display: "inline-block",
    width: "100%",
  },
})
