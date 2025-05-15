import { HandWaving } from "@phosphor-icons/react"
import { Link } from "react-router"
import { styled } from "restyle"
import * as rdxClrs from "#/styles/dark"

export default function Welcome() {
  return (
    <Container>
      <Card>
        <HandWaving size={128} weight="thin" color={rdxClrs.slate[11]} />
        <Heading>Welcome!</Heading>
        <p>Use UI Builder to make development faster!</p>
        <StyledLinkBtn to="./app">Let the journey begin!</StyledLinkBtn>
      </Card>
    </Container>
  )
}

const Container = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100dvh",
})

const Card = styled("div", {
  alignItems: "center",
  backgroundColor: rdxClrs.slate["03"],
  border: `1px solid ${rdxClrs.slate["06"]}`,
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "2rem",
})

const Heading = styled("h1", {
  color: rdxClrs.slate[12],
  fontSize: "4rem",
  fontWeight: 900,
})

const StyledLinkBtn = styled(Link, {
  textDecoration: "none",
  backgroundColor: rdxClrs.blue["09"],
  border: "none",
  borderRadius: "0.5rem",
  color: rdxClrs.slate[12],
  cursor: "pointer",
  fontWeight: 600,
  marginTop: "2rem",
  minHeight: "4rem",
  paddingBlock: "1rem",
  paddingInline: "2rem",
  textTransform: "uppercase",
  transition: "all 200ms",

  ":hover": {
    backgroundColor: rdxClrs.blue["10"],
  },

  ":active": {
    transform: "scale(0.95)",
  },
})
