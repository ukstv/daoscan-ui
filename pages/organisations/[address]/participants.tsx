import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import {
  ORGANISATION_PARTICIPANTS_QUERY,
  OrganisationParticipantsQuery, Participant
} from "../../../components/organisations/queries";
import { OrganisationLayout } from "../../../components/organisations/organisation-layout";
import { Box, Grid } from "@theme-ui/components";
import { withApollo } from "../../../lib/apollo";
import { ParticipantsTable } from "../../../components/organisations/participants-table.component";

export const Participants: NextPage<{ address: string }> = props => {
  const router = useRouter();
  const address = (router.query.address as string | undefined) || props.address;
  const { error, data } = useQuery<OrganisationParticipantsQuery>(ORGANISATION_PARTICIPANTS_QUERY, {
    variables: { address: address }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data) {
    const participants = data.participants.participants.edges.map(edge => edge.node);
    return (
      <OrganisationLayout organisation={data.organisation}>
        <Grid>
          <Box>
            <ParticipantsTable participants={participants} />
          </Box>
        </Grid>
      </OrganisationLayout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

Participants.getInitialProps = async context => {
  const address = (context.query.address as string).toLowerCase();
  return { address };
};

export default withApollo(Participants);
