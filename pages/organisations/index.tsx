import React from "react";
import { Layout } from "../../components/layout.component";
import { Box, Flex, Grid } from "@theme-ui/components";
import { Styled } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import { ORGANISATIONS_QUERY, OrganisationsQuery } from "../../components/organisation-page/queries";
import { withApollo } from "../../lib/apollo";
import { PureOrganisationProps } from "../../components/organisation-page/props";
import { IntraGrid } from "../../styling/intra-grid";
import { OrganisationAvatar } from "../../components/organisation-avatar/organisation-avatar.component";

function OrganisationItem(props: { organisation: PureOrganisationProps }) {
  return (
    <Flex variant={"organisations.item"}>
      <Box variant={'organisations.avatar'}>
        <OrganisationAvatar address={props.organisation.address} platform={props.organisation.platform} />
      </Box>
      <Box>
        <Box variant={"participant.name"}>
          {props.organisation.name}
        </Box>
        <Box variant={"participant.address"}>
          {props.organisation.address}
          Members: {props.organisation.participants.totalCount}
        </Box>
      </Box>
    </Flex>
  );
}

function OrganisationIndexPage() {
  const { error, data } = useQuery<OrganisationsQuery>(ORGANISATIONS_QUERY, {
    variables: {}
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data) {
    const organisationRows = data.organisations.edges.map((e, i) => {
      return <OrganisationItem organisation={e.node} key={`org-${e.node.address}-${i}`} />;
    });

    return (
      <Layout>
        <Grid>
          <Box variant={"heading"}>
            <Styled.h1>Organisations</Styled.h1>
          </Box>
        </Grid>
        <IntraGrid content={organisationRows} sidebar={<></>} />
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default withApollo(OrganisationIndexPage);
