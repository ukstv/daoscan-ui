import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { ORGANISATION_PROPOSALS_QUERY, OrganisationProposalsQuery } from "../../../components/organisations/queries";
import { PageLayout } from "../../../components/organisations/page-layout";
import { withApollo } from "../../../lib/apollo";
import { ProposalsTableItem } from "../../../components/organisations/proposals-table-item";
import { BottomPager } from "../../../components/navigation/bottom-pager";

export const Proposals: NextPage<{ address: string }> = props => {
  const router = useRouter();
  const address = (router.query.address as string | undefined) || props.address;
  const { error, data, loading } = useQuery<OrganisationProposalsQuery>(ORGANISATION_PROPOSALS_QUERY, {
    variables: { address: address }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data && !loading) {
    const items = data.proposals.proposals.edges.map(edge => {
      return <ProposalsTableItem proposal={edge.node} key={`proposal-${edge.cursor}`} />;
    });
    return <PageLayout organisation={data.organisation}>
      {items}
      <BottomPager pageInfo={data.proposals.proposals.pageInfo} totalCount={data.proposals.proposals.totalCount} />
    </PageLayout>;
  } else {
    return <p>Loading...</p>;
  }
};

Proposals.getInitialProps = async context => {
  const address = (context.query.address as string).toLowerCase();
  return { address };
};

export default withApollo(Proposals);
