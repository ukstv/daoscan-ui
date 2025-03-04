import React from "react";
import { PROPOSAL_STATUS, ProposalWithStats } from "./queries";
import styled from "@emotion/styled";
import { css, Grid, Styled } from "theme-ui";
import { BORDERS } from "../../theme/borders";
import BigNumber from "bignumber.js";
import UserIcon from "../images/user.svg";
import GrantIcon from "../images/grant.svg";
import { InlineProfile } from "../profiles/inline-profile";
import { TokenValue } from "../profiles/token-value";
import { DateSpan } from "./date-span";
import { DateTime } from "luxon";
import { ProposalCurrentState } from "./proposal-current-state";
import { UnreachableCaseError } from "../../lib/unreachable-case.error";
import Linkify from "react-linkify";

const ACTIONABLE_WIDTH = 6;

const Container = styled(Grid)(
  css({
    borderRadius: 0,
    boxShadow: "none",
    borderBottom: [BORDERS.bevelIntense, BORDERS.bevel],
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
    minWidth: `${ACTIONABLE_WIDTH / 2}rem`
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
    borderTop: ["none", BORDERS.bevel],
    gridTemplateColumns: ["50% 50%"],
    gap: 0,
    flex: "1 1 auto"
  })
);

const Votes = styled.div(
  css({
    borderLeft: BORDERS.bevel,
    display: ["flex", "flex"],
    textAlign: "center",
    flexDirection: ["row", "column"]
  })
);

const PositiveVote = styled.div(
  css({
    flex: "1 1 auto"
  })
);

const NegativeVote = styled.div(
  css({
    borderTop: ["none", BORDERS.bevel],
    flex: "1 1 auto"
  })
);

const Title = styled(Styled.h3)(
  css({
    margin: 0,
    marginTop: "0.2rem"
  })
);

const InfoRow = styled(Styled.p)(
  css({
    margin: "0.4rem 0"
  })
);

function parseDescription(d: any) {
  if (typeof d === "string") {
    return { title: d, description: null };
  } else {
    return { title: d.title, description: d.description };
  }
}

function VoteShares(props: { number: { decimals: number; amount: string } }) {
  const real = new BigNumber(props.number.amount).div(10 ** props.number.decimals).toFixed(0);
  return (
    <div>
      <small>{real}</small>
    </div>
  );
}

export function ProposalsTableItem(props: { proposal: ProposalWithStats }) {
  const p = props.proposal;
  const isGrantProposal =
    p.payload.tribute && p.payload.tribute.amount && new BigNumber(p.payload.tribute.amount).isZero();
  const Icon = isGrantProposal ? GrantIcon : UserIcon;
  const description = parseDescription(p.payload.description);

  const actionsStyle = () => {
    switch (props.proposal.status) {
      case PROPOSAL_STATUS.ABORT:
        return { color: "red.3" };
      case PROPOSAL_STATUS.ACTIVE:
        return { color: "orange.4" };
      case PROPOSAL_STATUS.PASS:
        return { color: "green.6" };
      case PROPOSAL_STATUS.REJECT:
        return { color: "red.5" };
      default:
        throw new UnreachableCaseError(props.proposal.status);
    }
  };

  const renderTribute = () => {
    if (isGrantProposal) {
      return <></>;
    } else {
      return (
        <>
          <strong>Tribute:</strong> <TokenValue token={p.payload.tribute} />
          <span> </span>
        </>
      );
    }
  };

  return (
    <Container>
      <Actionable>
        <Reference>
          <Index>#{props.proposal.index}</Index>
          <ReferenceIconContainer>
            <Icon />
          </ReferenceIconContainer>
        </Reference>
        <Actions sx={actionsStyle()}>
          <ProposalCurrentState proposal={props.proposal} />
          <Votes>
            <PositiveVote>
              Yes
              <VoteShares number={props.proposal.stats.yesShares} />
            </PositiveVote>
            <NegativeVote>
              No
              <VoteShares number={props.proposal.stats.noShares} />
            </NegativeVote>
          </Votes>
        </Actions>
      </Actionable>
      <div>
        <Title>{description?.title}</Title>
        <InfoRow>
          <Linkify>{description?.description}</Linkify>
        </InfoRow>
        <InfoRow>
          <strong>Applicant:</strong> <InlineProfile address={p.payload.applicant} />
        </InfoRow>
        <InfoRow>
          <strong>Proposer:</strong> <InlineProfile address={p.proposer} />
        </InfoRow>
        <InfoRow>
          <strong>Requested:</strong> <TokenValue token={p.payload.sharesRequested} />
          <span> </span>
          {renderTribute()}
          <strong>Submitted:</strong> <DateSpan date={DateTime.fromISO(p.createdAt)} />
        </InfoRow>
      </div>
    </Container>
  );
}
