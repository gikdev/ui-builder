import { CaretDown, CaretRight } from "@phosphor-icons/react"
import { type ReactNode, useState } from "react"
import { styled } from "restyle"
import * as rdxClrs from "#/styles/dark"

interface AccordionProps {
  summary: string
  children: ReactNode
}

export default function Accordion({ children, summary }: AccordionProps) {
  const [isOpen, setOpen] = useState(false)
  const IconToRender = isOpen ? CaretDown : CaretRight

  return (
    <AccContainer>
      <AccBtn css={isOpen ? openStyles : undefined} type="button" onClick={() => setOpen(p => !p)}>
        <IconToRender size={16} weight="bold" style={{ minWidth: "max-content" }} />
        <AccTitle>{summary}</AccTitle>
      </AccBtn>

      {isOpen && <AccContent>{children}</AccContent>}
    </AccContainer>
  )
}

const openStyles = {
  backgroundColor: rdxClrs.blue["09"],
  color: rdxClrs.slate["12"],

  ":hover": {
    backgroundColor: rdxClrs.blue["10"],
  },
}

const AccContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

const AccBtn = styled("button", {
  padding: "0.3rem 2rem",
  backgroundColor: "transparent",
  display: "flex",
  fontWeight: "bold",
  fontSize: "1.2rem",
  alignItems: "center",
  gap: "0.5rem",
  border: "none",
  color: rdxClrs.slate["11"],
  cursor: "pointer",

  ":hover": {
    color: rdxClrs.slate["12"],
    backgroundColor: rdxClrs.slate["03"],
  },

  ":active": {
    backgroundColor: rdxClrs.slate["04"],
  },
})

const AccTitle = styled("span", {
  textAlign: "start",
})

const AccContent = styled("div", {})
