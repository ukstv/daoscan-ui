import { BankItem, OrganisationProps, PureOrganisationProps } from "./props";
import { gql } from "apollo-boost";
import { PLATFORM } from "../../lib/platform";

export interface OrganisationQuery {
  organisation: OrganisationProps;
}

export const ORGANISATION_FRAGMENT = gql`
  fragment OrganisationInfo on Organisation {
    address
    name
    platform
    createdAt
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
    participants(page: { first: 10000 }) {
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
  status: PROPOSAL_STATUS;
  createdAt: string;
}

export interface ProposalStats {
  yesShares: { amount: string; decimals: number };
  noShares: { amount: string; decimals: number };
  yesVotes: number;
  noVotes: number;
}

export interface ProposalWithStats extends Proposal {
  stats: ProposalStats;
}

interface OrganisationProposalConnectionEdge {
  node: ProposalWithStats;
  cursor: string;
}

export interface OrganisationProposalConnection {
  edges: OrganisationProposalConnectionEdge[];
  totalCount: number;
  pageInfo: PageInfo;
}

export interface OrganisationProposalsQuery {
  organisation: OrganisationProps;
  proposals: {
    proposals: OrganisationProposalConnection;
  };
}

export const ORGANISATION_PROPOSALS_QUERY = gql`
  query GetOrganisationProposals($address: String!, $pageQuery: PageQuery) {
    organisation(address: $address) {
      ...OrganisationInfo
    }
    proposals: organisation(address: $address) {
      proposals(page: $pageQuery) {
        edges {
          node {
            stats {
              yesShares {
                amount
                decimals
              }
              noShares {
                amount
                decimals
              }
              yesVotes
              noVotes
            }
            createdAt
            index
            payload
            proposer
            status
          }
          cursor
        }
        totalCount
        pageInfo {
          startCursor
          startIndex
          endCursor
          endIndex
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
  ${ORGANISATION_FRAGMENT}
`;

export interface OrganisationEdge {
  node: PureOrganisationProps;
  cursor: string;
}

export interface PageInfo {
  startIndex: number;
  endIndex: number;
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface OrganisationsQuery {
  organisations: {
    totalCount: number;
    edges: OrganisationEdge[];
    pageInfo: PageInfo;
  };
}

export const ORGANISATIONS_QUERY = gql`
  query GetOrganisations($first: Int, $after: String, $last: Int, $before: String) {
    organisations(page: { first: $first, after: $after, last: $last, before: $before }) {
      totalCount
      edges {
        node {
          ...OrganisationInfo
        }
        cursor
      }
      pageInfo {
        startIndex
        endIndex
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${ORGANISATION_FRAGMENT}
`;
