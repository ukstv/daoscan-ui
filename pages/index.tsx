import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/layout.component";
import { Header } from "../components/header.component";
import { Box, Grid } from "@theme-ui/components";
import styled from "@emotion/styled";
import { GraphqlEditor } from "../components/graphql-editor.component";
import { StatsRow } from "../components/stats/stats-row.component";
import { withApollo } from "../lib/apollo";

const Description = styled.div({
  borderLeft: ".2rem solid gray",
  padding: "0px .6rem",
  margin: "0 0 1rem 0",
  color: "gray"
});

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <Layout>
      <Header />
      <Grid>
        <Box>
          <Description>
            Daoscan indexes Ethereum blockchain and provides up to date information on DAO activity.
          </Description>
        </Box>
      </Grid>
      <StatsRow />
      <Grid>
        <GraphqlEditor />
      </Grid>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default withApollo(Home);
