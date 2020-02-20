import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { ORGANISATION_QUERY, OrganisationQuery } from "../../../components/organisation-page/queries";
import { OrganisationLayout } from "../../../components/organisation-page/layout.component";
import { Box, Grid } from "@theme-ui/components";
import { withApollo } from "../../../lib/apollo";

export const Proposals: NextPage<{ address: string }> = props => {
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
          <Box>Proposals, {address}</Box>
        </Grid>
      </OrganisationLayout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

Proposals.getInitialProps = async context => {
  const address = (context.query.address as string).toLowerCase();
  return { address };
};

export default withApollo(Proposals);
