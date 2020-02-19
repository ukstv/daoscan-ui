import React from "react";
import { Layout } from "../../components/layout.component";
import { Box, Flex, Grid, NavLink } from "@theme-ui/components";
import { withApollo } from "../../lib/apollo";
import { NextPage } from "next";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { OrganisationProps } from "./props";
import { OrganisationHeader } from "./organisation-header";
import Link from "next/link";
import { useRouter } from "next/router";

interface OrganisationQuery {
  organisation: OrganisationProps;
}

const ORGANISATION_QUERY = gql`
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

export const OrganisationPage: NextPage<{ address: string }> = props => {
  const router = useRouter();
  const address = (router.query.address as string | undefined) || props.address;
  const { error, data } = useQuery<OrganisationQuery>(ORGANISATION_QUERY, {
    variables: { address: address }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data) {
    return (
      <Layout>
        <OrganisationHeader organisation={data.organisation} />
        <Grid>
          <Flex>
            <Box>
              <Link href={`${address}/votes`} passHref={true}>
                <NavLink>Votes</NavLink>
              </Link>
            </Box>
            <Box>Participants</Box>
          </Flex>
        </Grid>
        <Grid>
          <Box>Hello, {address}</Box>
        </Grid>
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

OrganisationPage.getInitialProps = async context => {
  const address = (context.query.address as string).toLowerCase();
  return { address };
};

export default withApollo(OrganisationPage);
