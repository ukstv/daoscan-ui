import React from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import styled from "@emotion/styled";

const EditorContainer = styled.div`
  height: 30rem;
  min-width: 100%;
`;

const URL = "https://api.daoscan.net/graphql";

const defaultQuery = `
{
  # Get all organisation by participant account, could be ens
  account(address: "0x70564145fa8e8a15348ef0190e6b7c07a2120462") {
    address # account address
    organisations {
      address
      platform
      name
      txid
      timestamp
      # Supply of shares
      totalSupply {
        name
        symbol
        amount
        decimals
      }
      # Managed assets
      bank {
        amount
        name
        symbol
        decimals
      }
      # All the participants
      participants {
        address
        # And how much of the shares they own
        shares {
          name
          symbol
          decimals
          amount
        }
      }
      # Or just query for the single participant
      participant(address: "0x70564145fa8e8a15348ef0190e6b7c07a2120462") {
        address
        shares {
          name
          symbol
          amount
          decimals
        }
      }
    }
  }
}
`;

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
