import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://api.daoscan.net/graphql"
});

export function GraphqlProvider(props: React.PropsWithChildren<{}>) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
