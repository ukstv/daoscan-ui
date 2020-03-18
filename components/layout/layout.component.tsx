import React from "react";
import { css } from "theme-ui";
import styled from "@emotion/styled";
import { Header } from "./header.component";
import { FixedWidthComponent } from "./fixed-width.component";
import { BORDERS } from "../../theme/borders";
import { EDGE_QUERY } from "./edge-query";
import { Socials } from "../socials/socials.component";

const Column = styled.div(
  css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  })
);
const HeaderRow = styled.div(
  css({
    borderBottom: "bevel",
    height: 12,
    lineHeight: "3rem"
  })
);
const BodyRow = styled.div(
  css({
    width: "100%",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column"
  })
);
const FooterRow = styled.div(
  css({
    padding: 2,
    borderTop: "bevel"
  })
);
const BodyContainer = styled(FixedWidthComponent)(
  css({
    borderLeft: BORDERS.bevel,
    borderRight: BORDERS.bevel,
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    maxWidth: [960, 960, 960, 1140],
    // Hide border when width == viewport
    // breakpoints: ["640px", "768px", "1024px", "1280px"],
    [EDGE_QUERY]: {
      borderLeft: "none",
      borderRight: "none"
    }
  })
);

export function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <Column>
      <HeaderRow>
        <Header />
      </HeaderRow>
      <BodyRow>
        <BodyContainer>{props.children}</BodyContainer>
      </BodyRow>
      <FooterRow>
        <FixedWidthComponent>
          <Socials />
        </FixedWidthComponent>
      </FooterRow>
    </Column>
  );
}
