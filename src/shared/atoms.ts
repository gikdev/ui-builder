import { atomWithStorage } from "jotai/utils"

///// Panels

export const Panels = {
  Toolbox: "toolbox",
  Elements: "elements",
  Properties: "properties",
  None: "",
} as const

export type Panel = (typeof Panels)[keyof typeof Panels]

export const activePanelAtom = atomWithStorage<Panel>("darkMode", "")

///// ...
