import { OrganisationProps } from "./props";
import { gql } from "apollo-boost";

export interface OrganisationQuery {
  organisation: OrganisationProps;
}

export const ORGANISATION_FRAGMENT = gql`
  fragment OrganisationInfo on Organisation {
    address
    name
    platform
    participants {
      totalCount
    }
    totalSupply {
      amount
      decimals
    }
    bank {
      value(symbol: "USD") {
        amount
        decimals
      }
    }
  }
`;

export const ORGANISATION_QUERY = gql`
  query GetOrganisation($address: String!) {
    organisation(address: $address) {
      ...OrganisationInfo
    }
  }
  ${ORGANISATION_FRAGMENT}
`;

export const PARTICIPANTS_FRAGMENT = gql`
  fragment OrganisationParticipants on Organisation {
    participants(first: 1000) {
      edges {
        node {
          address
          shares {
            amount
            decimals
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const ORGANISATION_PROPOSALS_FRAGMENT = gql`
  fragment OrganisationProposals on Organisation {
    proposals {
      index
      payload
      proposer
      payload
      status
    }
  }
`;

export interface Participant {
  address: string;
  shares: {
    amount: string;
    decimals: number;
  };
}

export interface OrganisationParticipantEdge {
  node: Participant;
  cursor: string;
}

export interface OrganisationParticipantsQuery {
  organisation: OrganisationProps;
  participants: {
    participants: {
      edges: OrganisationParticipantEdge[];
      pageInfo: {
        endCursor: string | null;
        hasNextPage: boolean;
      };
    };
  };
}

export const ORGANISATION_PARTICIPANTS_QUERY = gql`
  query GetOrganisationParticipants($address: String!) {
    organisation(address: $address) {
      ...OrganisationInfo
    }
    participants: organisation(address: $address) {
      ...OrganisationParticipants
    }
  }
  ${ORGANISATION_FRAGMENT}
  ${PARTICIPANTS_FRAGMENT}
`;

export enum PROPOSAL_STATUS {
  ACTIVE = "ACTIVE",
  PASS = "PASS",
  REJECT = "REJECT",
  ABORT = "ABORT"
}

export interface Proposal {
  index: number;
  proposer: string;
  payload: any;
  status: PROPOSAL_STATUS
}

export interface OrganisationProposalsQuery {
  organisation: OrganisationProps;
  proposals: {
    proposals: Proposal[];
  };
}

export const ORGANISATION_PROPOSALS_QUERY = gql`
  query GetOrganisationProposals($address: String!) {
    organisation(address: $address) {
      ...OrganisationInfo
    }
    proposals: organisation(address: $address) {
      ...OrganisationProposals
    }
  }
  ${ORGANISATION_FRAGMENT}
  ${ORGANISATION_PROPOSALS_FRAGMENT}
`;
