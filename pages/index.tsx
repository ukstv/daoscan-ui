import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/layout/layout.component";
import { Box, Grid } from "@theme-ui/components";
import { GraphqlEditor } from "../components/graphql-editor.component";
import { StatsRow } from "../components/stats/stats-row.component";
import { withApollo } from "../lib/apollo";
import styled from "@emotion/styled";

const GraphiQLRow = styled(Grid)`
  display: flex;
  flex: 1 1 auto;
`;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <Layout>
      <Grid>
        <Box variant={"description"}>
          Daoscan indexes Ethereum blockchain and provides up to date information on DAO activity.
        </Box>
      </Grid>
      <StatsRow />
      <GraphiQLRow>
        <GraphqlEditor />
      </GraphiQLRow>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default withApollo(Home);
