import { OrganisationProps } from "./props";
import { gql } from "apollo-boost";

export interface Queries {
  organisation: OrganisationProps;
}

export const ORGANISATION_QUERY = gql`
  query GetOrganisation($address: String!) {
    organisation(address: $address) {
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
  }
`;
