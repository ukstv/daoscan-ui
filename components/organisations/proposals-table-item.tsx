import React from "react";
import { Proposal } from "./queries";
import styled from "@emotion/styled";
import { Box, css, Flex, Grid, Styled } from "theme-ui";
import { BORDERS } from "../../theme/borders";
import BigNumber from "bignumber.js";
import UserIcon from "../images/user.svg";
import GrantIcon from "../images/grant.svg";
import { InlineProfile } from "../profiles/inline-profile";
import { TokenValue } from "../profiles/token-value";

const ACTIONABLE_WIDTH = 6;

const Container = styled(Grid)(
  css({
    borderRadius: 0,
    boxShadow: "none",
    borderBottom: BORDERS.bevel,
    gridTemplateColumns: ["auto", `${ACTIONABLE_WIDTH}rem auto`],
    gridGap: 2
  })
);

const Actionable = styled.div(
  css({
    borderRight: ["none", BORDERS.bevel],
    borderBottom: [BORDERS.bevel, "none"],
    display: "flex",
    flexDirection: ["row", "column"]
  })
);

const Reference = styled(Grid)(
  css({
    gridTemplateColumns: ["50% 50%"],
    gap: 0
  })
);

const Index = styled.div(
  css({
    flex: "1 1 auto",
    textAlign: "center",
    minWidth: `${ACTIONABLE_WIDTH/2}rem`
  })
);

const ReferenceIconContainer = styled.div(
  css({
    flex: "1 1 auto",
    display: ["none", "block"],
    borderLeft: BORDERS.bevel,
    textAlign: "center",
    "& svg": {
      width: "1.2rem",
      height: "1.2rem",
      verticalAlign: "text-bottom",
      opacity: 0.6
    }
  })
);

const Actions = styled(Grid)(
  css({
    borderTop: ['none', BORDERS.bevel],
    gridTemplateColumns: ["50% 50%"],
    gap: 0,
    flex: '1 1 auto'
  })
);

const CurrentState = styled.div(
  css({
    transform: "rotate(-90deg)",
    alignItems: "center",
    justifyContent: "center",
    display: ['none', 'flex']
  })
);

const Votes = styled.div(
  css({
    borderLeft: BORDERS.bevel,
    display: ['flex', 'flex'],
    textAlign: "center",
    flexDirection: ['row', 'column']
  })
);

const PositiveVote = styled.div(css({
  flex: '1 1 auto'
}));

const NegativeVote = styled.div(css({
  borderTop: ['none', BORDERS.bevel],
  flex: '1 1 auto'
}));

const Title = styled(Styled.h3)(css({
  margin: 0
}))

const InfoRow = styled(Styled.p)(css({
  margin: 0
}))

function parseDescription(d: any) {
  if (typeof d === "string") {
    return { title: d, description: null };
  } else {
    return { title: d.title, description: d.description };
  }
}

export function ProposalsTableItem(props: { proposal: Proposal }) {
  const p = props.proposal;
  const isGrantProposal =
    p.payload.tribute && p.payload.tribute.amount && new BigNumber(p.payload.tribute.amount).isZero();
  const Icon = isGrantProposal ? GrantIcon : UserIcon;
  const description = parseDescription(p.payload.description)

  return (
    <Container>
      <Actionable>
        <Reference>
          <Index>#{props.proposal.index}</Index>
          <ReferenceIconContainer>
            <Icon />
          </ReferenceIconContainer>
        </Reference>
        <Actions>
          <CurrentState>Voting</CurrentState>
          <Votes>
            <PositiveVote>Yes</PositiveVote>
            <NegativeVote>No</NegativeVote>
          </Votes>
        </Actions>
      </Actionable>
      <div>
        <Title>{description?.title}</Title>
        <InfoRow>{description?.description}</InfoRow>
        <InfoRow><strong>Applicant:</strong> <InlineProfile address={p.payload.applicant} /></InfoRow>
        <InfoRow><strong>Proposer:</strong> <InlineProfile address={p.proposer} /></InfoRow>
        <InfoRow>
          <strong>Requested:</strong> <TokenValue token={p.payload.sharesRequested} />
          <span> </span><strong>Tribute:</strong> <TokenValue token={p.payload.tribute} />
        </InfoRow>
      </div>
    </Container>
  );
}
