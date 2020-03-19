import React from "react";
import GraphiQL from "graphiql";
import styled from "@emotion/styled";

const EditorContainer = styled.div`
  min-height: 30rem;
  min-width: 100%;
  flex: 1 1 auto;
`;

const URL = "https://api.daoscan.net/graphql";

const defaultQuery = `{
  # Get all organisation by participant account, could be ens address
  account(address: "0x70564145fa8e8a15348ef0190e6b7c07a2120462") {
    address # account address
    organisations {
      address
      platform
      name
      # Supply of shares
      totalSupply {
        ...TokenFragment
      }
      # Managed assets
      bank {
        ...TokenFragment
      }
      # All the participants, might take long
      # participants(page: {first: 100}) {
      #   edges {
      #     node {
      #       address
      #       # And how much of the shares they own
      #       shares {
      #         ...TokenFragment
      #       }
      #     }
      #   }
      # }
      # Or just query for the single participant
      participant(address: "0x70564145fa8e8a15348ef0190e6b7c07a2120462") {
        address
        shares {
          ...TokenFragment
        }
      }
    }
  }
}

fragment TokenFragment on Token {
  name
  symbol
  amount
  decimals
}`;

function graphQLFetcher(graphQLParams: any) {
  return fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

export function GraphqlEditor() {
  return (
    <EditorContainer>
      <GraphiQL fetcher={graphQLFetcher} defaultQuery={defaultQuery} />
    </EditorContainer>
  );
}
