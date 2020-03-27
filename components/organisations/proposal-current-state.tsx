import React from "react";
import { Proposal, PROPOSAL_STATUS } from "./queries";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { UnreachableCaseError } from "../../lib/unreachable-case.error";

const Container = styled.div(
  css({
    transform: "rotate(-90deg)",
    alignItems: "center",
    justifyContent: "center",
    display: ["none", "flex"]
  })
);

export function ProposalCurrentState(props: { proposal: Proposal; className?: string }) {
  const renderLabel = () => {
    switch (props.proposal.status) {
      case PROPOSAL_STATUS.REJECT:
        return "Rejected";
      case PROPOSAL_STATUS.PASS:
        return "Passed";
      case PROPOSAL_STATUS.ACTIVE:
        return "Voting";
      case PROPOSAL_STATUS.ABORT:
        return "Aborted";
      default:
        throw new UnreachableCaseError(props.proposal.status);
    }
  };

  return <Container className={props.className}>{renderLabel()}</Container>;
}
