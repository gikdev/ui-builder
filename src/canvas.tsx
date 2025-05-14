import { useEffect, useRef } from "react"
import type { ElementData } from "./types"

interface CanvasProps {
  elements: ElementData[]
}

export default function Canvas({ elements }: CanvasProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const doc = iframe.contentDocument
    if (!doc) return

    doc.open()
    doc.writeln(
      "<!DOCTYPE html><html><head><style>body { margin: 0; font-family: sans-serif; }</style></head><body></body></html>",
    )
    doc.close()

    const body = doc.body
    body.innerHTML = ""

    for (const el of elements) {
      const domEl = doc.createElement(el.tag)
      domEl.textContent = el.text
      domEl.setAttribute("data-id", el.id)
      body.appendChild(domEl)
    }
  }, [elements])

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: "100%",
        height: "400px",
        border: "1px solid #ccc",
        background: "white",
      }}
    />
  )
}
