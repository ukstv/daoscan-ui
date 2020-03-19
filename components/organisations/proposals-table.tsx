import React from "react";
import { Proposal } from "./queries";
import { PLATFORM } from "../../lib/platform";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { ProposalsTableItem } from "./proposals-table-item";

interface Props {
  proposals: Proposal[];
  platform: PLATFORM;
}

const Container = styled.div(
  css({
    marginBottom: -1
  })
);

export function ProposalsTable(props: Props) {
  const proposalCards = props.proposals.map(p => {
    return <ProposalsTableItem proposal={p} key={`proposal-${p.index}`} />;
  });
  return <Container>{proposalCards}</Container>;
}
