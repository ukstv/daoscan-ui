declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

declare module "graphiql" {
  import * as React from "react";
  export default class GraphiQL extends React.Component<{
    fetcher: (graphQLParams: any) => Promise<any>;
    defaultQuery: string;
  }> {}
}
