import React from "react";
import { Layout } from "../../components/layout.component";
import { Badge, Box, Flex, Grid } from "@theme-ui/components";
import { Jazzicon } from "../../components/jazzicon/jazzicon.component";
import styled from "@emotion/styled";
import { withApollo } from "../../lib/apollo";
import { NextPage } from "next";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { OrganisationAvatar } from "../../components/organisation-avatar/organisation-avatar.component";
import { PLATFORM } from "../../lib/platform";

const OrganisationTitle = styled.h2`
  margin: 0;
`;

const OrganisationAddress = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 0.8rem;
`;

const ORGANISATION_QUERY = gql`
  query GetOrganisation($address: String!) {
    organisation(address: $address) {
      name
      platform
    }
  }
`;

export const OrganisationPage: NextPage<{ address: string }> = props => {
  const { error, data } = useQuery<{ organisation: { name: string; platform: PLATFORM } }>(ORGANISATION_QUERY, {
    variables: { address: props.address }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data) {
    return (
      <Layout>
        <Grid>
          <Flex>
            <Box>
              <OrganisationAvatar address={props.address} platform={data.organisation.platform} />
            </Box>
            <Box>
              <OrganisationTitle>{data.organisation.name}</OrganisationTitle>
              <OrganisationAddress>{props.address}</OrganisationAddress>
            </Box>
          </Flex>
        </Grid>
        <p>Organisation {props.address}</p>
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
