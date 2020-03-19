import React from "react";
import { Proposal } from "./queries";
import styled from "@emotion/styled";
import { Box, css, Flex, Grid } from "theme-ui";
import { BORDERS } from "../../theme/borders";

const ACTIONABLE_WIDTH = 4;

const Container = styled(Grid)(
  css({
    borderRadius: 0,
    boxShadow: "none",
    borderBottom: BORDERS.bevel,
    gridTemplateColumns: [
      "auto",
      `${ACTIONABLE_WIDTH}rem auto`,
      `${ACTIONABLE_WIDTH}rem auto`,
      `${ACTIONABLE_WIDTH}rem auto`
    ],
    gridGap: 2
  })
);

const Actionable = styled.div(
  css({
    borderRight: ["none", BORDERS.bevel],
    borderBottom: [BORDERS.bevel, "none"]
  })
);

const Reference = styled(Flex)(css({}));

const Index = styled.div(
  css({
    flex: "1 1 auto",
    textAlign: "center"
  })
);

const ReferenceIconContainer = styled.div(
  css({
    flex: "1 1 auto",
    display: ["none", "block"],
    borderLeft: BORDERS.bevel,
    textAlign: "center"
  })
);

export function ProposalsTableItem(props: { proposal: Proposal }) {
  return (
    <Container>
      <Actionable>
        <Reference>
          <Index>#{props.proposal.index}</Index>
          <ReferenceIconContainer>Ic</ReferenceIconContainer>
        </Reference>
      </Actionable>
      <div>Proposal #{props.proposal.index}</div>
    </Container>
  );
}
