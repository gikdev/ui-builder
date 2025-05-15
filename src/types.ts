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
  private _id: string
  public tag: string
  public name = ""
  public children: Array<string | ElementData> | null

  constructor({ children = null, tag }: UIElementRaw) {
    this._id = generateId()
    this.tag = tag
    this.children = children
  }

  get id() {
    return this._id
  }
}
