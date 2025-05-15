import { DiamondsFour } from "@phosphor-icons/react"
import { Panel } from "react-resizable-panels"
import { styled } from "restyle"
import Accordion from "#/components/accordion"
import htmlData from "#/lib/html-data/data"
import htmlTagsCategorized from "#/lib/html-tags-categorized"
import * as rdxClrs from "#/styles/dark"
import { UIElement } from "#/types"

const getHtmlTagData = (tag: string) => htmlData.tags.find(t => t.name === tag)

interface ToolboxProps {
  onAdd: (el: UIElement) => void
}

export default function Toolbox({ onAdd }: ToolboxProps) {
  return (
    <Container minSize={20} defaultSize={30}>
      <Title>Toolbox</Title>
      <Description>Select an element to add to canvas:</Description>

      <ScrollArea>
        {Object.keys(htmlTagsCategorized).map(categ => (
          <Accordion summary={categ} key={categ}>
            <ElementsContainer>
              {htmlTagsCategorized[categ].map(t => renderTag(t, onAdd))}
            </ElementsContainer>
          </Accordion>
        ))}
      </ScrollArea>
    </Container>
  )
}

function renderTag(tag: string, onAdd: (newEl: UIElement) => void) {
  const tagInfo = getHtmlTagData(tag)

  if (!tagInfo) return null

  return (
    <ElementItem key={tag} onClick={() => onAdd(new UIElement({ tag, children: null }))}>
      <DiamondsFour size={12} weight="fill" />{" "}
      <span>
        &lt;{tag}
        {tagInfo?.void ? " /" : ""}&gt;
      </span>
    </ElementItem>
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

const Description = styled("p", {
  paddingRight: "2rem",
  paddingLeft: "2rem",
  fontSize: "1.2rem",
  marginBottom: "2rem",
})

const ScrollArea = styled("div", {
  overflowY: "auto",
  flex: 1,
  minHeight: 0,
})

const ElementsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

const ElementItem = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.3rem 4rem",
  cursor: "pointer",
  fontSize: "1.2rem",
  textAlign: "start",
  border: "none",
  backgroundColor: "transparent",
  color: rdxClrs.slate[11],
  borderRadius: "0.2rem",

  "&:hover": {
    background: rdxClrs.slate["03"],
    color: rdxClrs.slate[12],
  },

  "&:active": {
    background: rdxClrs.slate["04"],
  },
})
