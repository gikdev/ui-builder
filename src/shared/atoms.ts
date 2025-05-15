import { atomWithStorage } from "jotai/utils"
import type { UIElement } from "#/types"

///// Panels

export const Panels = {
  Toolbox: "toolbox",
  Elements: "elements",
  Properties: "properties",
  None: "",
} as const

export type Panel = (typeof Panels)[keyof typeof Panels]

export const activePanelAtom = atomWithStorage<Panel>("activePanel", "")

///// Elements

export const elementsAtom = atomWithStorage<UIElement[]>("elements", [])
export const selectedElementAtom = atomWithStorage<UIElement["id"]>("selectedElement", "")
