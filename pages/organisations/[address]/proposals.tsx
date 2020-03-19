import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import {
  ORGANISATION_PROPOSALS_QUERY,
  OrganisationProposalsQuery
} from "../../../components/organisations/queries";
import { PageLayout } from "../../../components/organisations/page-layout";
import { withApollo } from "../../../lib/apollo";
import { ProposalsTable } from "../../../components/organisations/proposals-table";
import { PageHeading } from "../../../components/layout/page-heading";
import { Styled } from "theme-ui";

export const Proposals: NextPage<{ address: string }> = props => {
  const router = useRouter();
  const address = (router.query.address as string | undefined) || props.address;
  const { error, data } = useQuery<OrganisationProposalsQuery>(ORGANISATION_PROPOSALS_QUERY, {
    variables: { address: address }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data) {
    const proposals = data.proposals.proposals;
    const platform = data.organisation.platform;
    return (
      <PageLayout organisation={data.organisation}>
        <PageHeading>
          <Styled.h2>Proposals</Styled.h2>
        </PageHeading>
        <ProposalsTable proposals={proposals} platform={platform} />
      </PageLayout>
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
