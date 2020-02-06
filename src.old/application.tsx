import React from "react";
import "antd/dist/antd.css";
import { Welcome } from "./pages/welcome";
import { GraphqlProvider } from "./components/graphql-provideer";

export function Application() {
  return (
    <GraphqlProvider>
      <Welcome />
    </GraphqlProvider>
  );
}
