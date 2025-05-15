import { useEffect, useRef } from "react"
import { Panel } from "react-resizable-panels"
import { styled } from "restyle"
import Accordion from "#/components/accordion"
import * as rdxClrs from "#/styles/dark"
import type { UIElement } from "#/types"

interface ElementsPanelProps {
  elements: UIElement[]
  onUpdate: (id: string, newData: Partial<UIElement>) => void
}

export default function ElementsPanel({ elements, onUpdate }: ElementsPanelProps) {
  return (
    <Container minSize={20} defaultSize={30}>
      <Title>Elements</Title>
      <Description>Select an element to edit properties or sort it:</Description>

      <ElementsContainer>
        {elements.map(el => (
          <Accordion
            summary={el.name ? `${el.name} <${el.tag}#${el.id}>` : `${el.tag}#${el.id}`}
            key={el.id}
          >
            <StringField label="ID" value={el.id} onChange={v => onUpdate(el.id, { id: v })} />
            <StringField
              label="Name"
              value={el.name || ""}
              onChange={v => onUpdate(el.id, { name: v })}
            />
            <StringField label="Tag" value={el.tag} readOnly />
            <StringField
              label="Text"
              value={el.children?.[0]?.toString() || ""}
              onChange={v => onUpdate(el.id, { children: [v] })}
              multiline
            />
          </Accordion>
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
  width: "50rem",
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

const ElementsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

//////////////////////////////////////

interface StringFieldProps {
  label: string
  value: string
  onChange?: (v: string) => void
  readOnly?: boolean
  multiline?: boolean
}

function StringField({
  label,
  value,
  onChange,
  multiline = false,
  readOnly = false,
}: StringFieldProps) {
  const inputRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null)
  const TagToRenderForInput = multiline ? FieldTextArea : FieldInput

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.value = value
  }, [value])

  return (
    <Field>
      <FieldLabel>{label}:</FieldLabel>
      <TagToRenderForInput
        ref={inputRef}
        readOnly={readOnly}
        onFocus={e => {
          if (!readOnly) return
          e.target.blur()
        }}
        onBlur={() => onChange?.(inputRef.current?.value || "")}
        css={{
          cursor: readOnly ? "not-allowed" : "text",
        }}
      />
    </Field>
  )
}

const Field = styled("label", {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  fontSize: "1.2rem",
  padding: "0.5rem 1rem 0.5rem 4rem",
})

const FieldLabel = styled("span", {
  fontSize: "1.0rem",
})

const FieldInput = styled("input", {
  backgroundColor: rdxClrs.slate["03"],
  color: rdxClrs.slate["11"],
  borderWidth: 0,
  borderBottomWidth: "1px",
  borderRadius: "0.2rem",
  borderStyle: "solid",
  borderColor: rdxClrs.slate["07"],
  transition: "all 200ms",
  flexGrow: 1,
  flexShrink: 1,
  width: "100%",

  ":hover": {
    backgroundColor: rdxClrs.slate["04"],
    color: rdxClrs.slate["12"],
  },

  ":focus": {
    borderColor: rdxClrs.blue["08"],
    outline: "none",
  },
})

const FieldTextArea = styled("textarea", {
  backgroundColor: rdxClrs.slate["03"],
  color: rdxClrs.slate["11"],
  borderWidth: 0,
  borderBottomWidth: "1px",
  borderRadius: "0.2rem",
  borderStyle: "solid",
  borderColor: rdxClrs.slate["07"],
  transition: "all 200ms",
  flexGrow: 1,
  flexShrink: 1,
  width: "100%",
  resize: "vertical",

  ":hover": {
    backgroundColor: rdxClrs.slate["04"],
    color: rdxClrs.slate["12"],
  },

  ":focus": {
    borderColor: rdxClrs.blue["08"],
    outline: "none",
  },
})
