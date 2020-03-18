import React from "react";
import styled from "@emotion/styled";
import { Link } from "../navigation/link";
import { css } from "theme-ui";
import { FONT_WEIGHT } from "../../theme/font-weight";
import { EdgedFixedWidthComponent } from "./edged-fixed-width.component";

const LogoLink = styled(Link)(
  css({
    height: "3rem",
    display: "inline",
    fontFamily: "logo",
    textTransform: "uppercase",
    "& svg": {
      width: "3rem",
      height: "3rem",
      verticalAlign: "bottom"
    }
  })
);
const Menu = styled.div(
  css({
    flex: "1 1 auto",
    textAlign: "right"
  })
);
const MenuLink = styled(Link)(
  css({
    fontFamily: "body",
    fontWeight: FONT_WEIGHT.thin,
    color: "gray.7",
    textDecoration: "none"
  })
);
const Container = styled(EdgedFixedWidthComponent)({
  display: "flex"
});

export function Header() {
  return (
    <Container>
      <LogoLink href={"/"}>Daoscan</LogoLink>
      <Menu>
        <MenuLink href={"/organisations"}>Organisations</MenuLink>
      </Menu>
    </Container>
  );
}
