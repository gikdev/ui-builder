import { useEffect, useRef } from "react"
import { Panel } from "react-resizable-panels"
import { styled } from "restyle"
import type { UIElement } from "#/types"

interface CanvasProps {
  elements: UIElement[]
}

export default function Canvas({ elements }: CanvasProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const doc = iframe.contentDocument
    if (!doc) return

    doc.open()
    doc.writeln(`
      <!DOCTYPE html>
      <html>
        <head></head>
        <body></body>
      </html>
    `)
    doc.close()

    const body = doc.body
    body.innerHTML = ""

    for (const el of elements) {
      const domEl = doc.createElement(el.tag)
      domEl.textContent = el.children?.join(" ") || ""
      domEl.setAttribute("data-id", el.id)
      body.appendChild(domEl)
    }
  }, [elements])

  return (
    <Panel defaultSize={60} minSize={40} maxSize={80}>
      <IFrame ref={iframeRef} />
    </Panel>
  )
}

const IFrame = styled("iframe", {
  width: "100%",
  height: "40rem",
  resize: "vertical",
  border: "none",
  background: "white",
  borderRadius: "1rem",
})
