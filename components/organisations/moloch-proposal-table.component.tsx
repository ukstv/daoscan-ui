import React, { useEffect, useState } from "react";
import { Proposal, PROPOSAL_STATUS } from "./queries";
import { Box, Card, Flex } from "@theme-ui/components";
import BigNumber from "bignumber.js";
import UserIcon from "../images/user.svg";
import GrantIcon from "../images/grant.svg";
import styled from "@emotion/styled";
import { getProfile, Profile } from "3box/lib/api";
import { ProfileAvatar } from "../profile-avatar.component";
import { FormattedNumber } from "../stats/formatted-number";

interface Props {
  proposals: Proposal[];
}

function parseDescription(d: any) {
  if (typeof d === "string") {
    return { title: d, description: null };
  } else {
    return { title: d.title, description: d.description };
  }
}

const Icon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  margin-right: 1rem;
  & svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const Title = styled.span`
  font-size: x-large;
`;

const InlineAvatar = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: bottom;
`;

function InlineProfile(props: { address: string }) {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);

  useEffect(() => {
    getProfile(props.address)
      .then(profile => {
        if (profile.hasOwnProperty("name") && profile.hasOwnProperty("emoji")) {
          setProfile(profile as Profile);
        }
      })
      .catch(() => {
        // Do Nothing
      });
  }, [props.address]);

  if (profile) {
    return (
      <>
        <InlineAvatar>
          <ProfileAvatar address={props.address} profile={profile} />
        </InlineAvatar>
        {profile.name} {profile.emoji} <small>{props.address}</small>
      </>
    );
  } else {
    return <>{props.address}</>;
  }
}

function TokenValue(props: { token: { amount: string; decimals: number; name: string; symbol: string } }) {
  const value = new BigNumber(props.token.amount).div(10 ** props.token.decimals).toNumber();
  return (
    <>
      <FormattedNumber value={value} defaultValue={0} /> {props.token.symbol}
    </>
  );
}

const renderDescriptionBox = (description: any) => {
  if (description.description) {
    return (
      <Box>
        <p>{description.description}</p>
      </Box>
    );
  } else {
    return <></>;
  }
};

function ProposalStatus(props: { proposal: Proposal }) {
  switch (props.proposal.status) {
    case PROPOSAL_STATUS.ABORT:
      return <>❌</>;
    case PROPOSAL_STATUS.ACTIVE:
      return <>⏱️</>;
    case PROPOSAL_STATUS.PASS:
      return <>👌</>;
    case PROPOSAL_STATUS.REJECT:
      return <>🥟</>;
    default:
      return <>{props.proposal.status}</>;
  }
}

function MembershipProposalCard(props: { proposal: Proposal }) {
  const p = props.proposal;
  const description = parseDescription(p.payload.description);

  return (
    <Card variant={"proposal"}>
      <Flex>
        <Box sx={{ flex: "1 1 auto" }}>
          <Icon>
            <UserIcon />
          </Icon>
          <Title>{description.title}</Title>
        </Box>
        <Box>
          <ProposalStatus proposal={p} /> #{p.index}
        </Box>
      </Flex>
      <Flex>
        <Box>
          {renderDescriptionBox(description)}
          <Box>
            <strong>Applicant</strong> <InlineProfile address={p.payload.applicant} />
          </Box>
          <Box>
            <strong>Proposer</strong> <InlineProfile address={p.proposer} />
          </Box>
          <Box>
            Requested: <TokenValue token={p.payload.sharesRequested} />
          </Box>
          <Box>
            Tribute: <TokenValue token={p.payload.tribute} />
          </Box>
        </Box>
        <Box>
          <Box>Yes: 3</Box>
          <Box>No: 4</Box>
        </Box>
      </Flex>
    </Card>
  );
}

function GrantProposalCard(props: { proposal: Proposal }) {
  const p = props.proposal;
  const description = parseDescription(p.payload.description);

  return (
    <Card variant={"proposal"}>
      <Flex>
        <Box sx={{ flex: "1 1 auto" }}>
          <Icon>
            <GrantIcon />
          </Icon>
          <Title>{description.title}</Title>
        </Box>
        <Box>
          <ProposalStatus proposal={p} /> #{p.index}
        </Box>
      </Flex>
      {renderDescriptionBox(description)}
      <Box>
        <strong>Applicant</strong> <InlineProfile address={p.payload.applicant} />
      </Box>
      <Box>
        <strong>Proposer</strong> <InlineProfile address={p.proposer} />
      </Box>
      <p>
        Requested: <TokenValue token={p.payload.sharesRequested} />
      </p>
    </Card>
  );
}

// function ProposalCard(props: { proposal: Proposal }) {
//   const p = props.proposal;
//   if (p.payload.tribute && p.payload.tribute.amount && new BigNumber(p.payload.tribute.amount).isZero()) {
//     return <GrantProposalCard proposal={props.proposal} />;
//   } else {
//     return <MembershipProposalCard proposal={props.proposal} />;
//   }
// }

function ProposalCard(props: { proposal: Proposal }) {
  return <p>Proposal #{props.proposal.index}</p>;
}

export function MolochProposalTable(props: Props) {
  const proposalCards = props.proposals.map(p => {
    return <ProposalCard proposal={p} key={`proposal-${p.index}`} />;
  });
  return <>{proposalCards}</>;
}
