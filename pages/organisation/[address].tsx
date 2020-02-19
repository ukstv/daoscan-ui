import React from "react";
import { Box, Grid } from "@theme-ui/components";
import { withApollo } from "../../lib/apollo";
import { NextPage } from "next";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { OrganisationProps } from "./props";
import { useRouter } from "next/router";
import { OrganisationLayout } from "./organisation-layout";

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
      <OrganisationLayout organisation={data.organisation}>
        <Grid>
          <Box>Hello, {address}</Box>
        </Grid>
      </OrganisationLayout>
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
