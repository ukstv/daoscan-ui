import React from "react";
import { Proposal } from "./queries";
import { PLATFORM } from "../../lib/platform";
import { MolochProposalTable } from "./moloch-proposal-table.component";

interface Props {
  proposals: Proposal[];
  platform: PLATFORM;
}

export function ProposalsTable(props: Props) {
  switch (props.platform) {
    case PLATFORM.ARAGON:
      return <>Not Implemented</>;
    case PLATFORM.MOLOCH_1:
      return <MolochProposalTable proposals={props.proposals} />;
    default:
      throw new Error(`Unknown platform ${props.platform}`);
  }
}
