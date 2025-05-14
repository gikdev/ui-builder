import { styled } from "restyle"
import * as theme from "./dark"
import type { ElementData } from "./types"

function generateId(length = 4): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""

  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length))

  return result
}

interface ToolboxProps {
  onAdd: (el: ElementData) => void
}

export default function Toolbox({ onAdd }: ToolboxProps) {
  const availableElements = [
    { tag: "div", text: "A div" },
    { tag: "p", text: "A paragraph" },
    { tag: "button", text: "Click me" },
  ]

  return (
    <Container>
      <Title>Toolbox</Title>
      <Description>Select an element to add to canvas</Description>

      <ElementsContainer>
        {availableElements.map(el => (
          <ElementItem key={el.tag} onClick={() => onAdd({ ...el, id: generateId() })}>
            &lt;{el.tag}&gt;
          </ElementItem>
        ))}
      </ElementsContainer>
    </Container>
  )
}

const Container = styled("div", {
  backgroundColor: theme.slate["02"],
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

const Title = styled("h2", {
  fontSize: "2rem",
})

const Description = styled("p", {
  fontSize: "1.2rem",
})

const ElementsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

const ElementItem = styled("button", {
  padding: "0.5rem 0.8rem",
  background: theme.slate["03"],
  border: "none",
  color: theme.slate[11],
  "&:hover": {
    background: theme.slate["04"],
    color: theme.slate[12],
  },
  "&:active": {
    background: theme.slate["05"],
  },
})
