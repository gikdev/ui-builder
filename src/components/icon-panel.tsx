import type { Panel } from "#/shared/atoms"
import * as rdxClrs from "#/styles/dark"
import type { Icon } from "@phosphor-icons/react"
import { styled } from "restyle"

export interface IconItem {
  id: Panel
  name: string
  Icon: Icon
}

interface IconPanelProps {
  items: IconItem[]
  onSelect: (itemId: IconItem["id"]) => void
  activePanelId?: IconItem["id"]
}

export default function IconPanel({ items, onSelect, activePanelId }: IconPanelProps) {
  return (
    <Container>
      {items.map(i => (
        <IconItem item={i} key={i.id} onSelect={onSelect} isActive={i.id === activePanelId} />
      ))}
    </Container>
  )
}

const Container = styled("div", {
  backgroundColor: rdxClrs.slate["02"],
  padding: "0.5rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
})

////////////////////////
////////////////////////
////////////////////////

interface IconItemProps {
  item: IconItem
  isActive: boolean
  onSelect: (itemId: IconItem["id"]) => void
}

function IconItem({ isActive, item, onSelect }: IconItemProps) {
  return (
    <abbr title={item.name}>
      <Btn
        className={isActive ? "active" : undefined}
        type="button"
        onClick={() => onSelect(isActive ? "" : item.id)}
      >
        <item.Icon size={24} />
      </Btn>
    </abbr>
  )
}

const Btn = styled("button", {
  backgroundColor: "transparent",
  color: rdxClrs.slate["11"],
  borderRadius: "0.5rem",
  transition: "all 200ms",
  border: "none",
  cursor: "pointer",
  width: "4rem",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    backgroundColor: rdxClrs.slate["03"],
    color: rdxClrs.slate["12"],
  },

  ":active": {
    transform: "scale(0.95)",
  },

  "&.active": {
    backgroundColor: rdxClrs.blue["09"],
    color: rdxClrs.slate["12"],

    ":hover": {
      backgroundColor: rdxClrs.blue["10"],
    },
  },
})
