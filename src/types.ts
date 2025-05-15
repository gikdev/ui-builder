function generateId(length = 4): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""

  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length))

  return result
}

export interface ElementData {
  id: string
  tag: string
  children: Array<string | ElementData>
  name: string
  // className?: string
}

export interface UIElementRaw {
  tag: string
  children: Array<string | ElementData> | null
}

export class UIElement {
  public readonly id: string
  public tag: string
  public name = ""
  public children: Array<string | ElementData> | null
  public attrs: Record<string, string> = {}

  constructor({ children = null, tag }: UIElementRaw) {
    this.id = generateId()
    this.tag = tag
    this.children = children
  }

  static clone(el: UIElement) {
    const newEl: UIElement = structuredClone(el)

    return newEl
  }
}
