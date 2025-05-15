import { useEffect, useRef } from "react"
import { styled } from "restyle"
import * as rdxClrs from "#/styles/dark"

interface StringFieldProps {
  label: string
  value: string
  onChange?: (v: string) => void
  readOnly?: boolean
  multiline?: boolean
}

export default function StringField({
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
  padding: "0.5rem 2rem",
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
