import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import { ORGANISATION_PROPOSALS_QUERY, OrganisationProposalsQuery } from "../../../components/organisations/queries";
import { PageLayout } from "../../../components/organisations/page-layout";
import { withApollo } from "../../../lib/apollo";
import { ProposalsTableItem } from "../../../components/organisations/proposals-table-item";
import { BottomPager } from "../../../components/navigation/bottom-pager";
import { PageQuery } from "../../../lib/page-query";

interface Props {
  address: string;
  pagination: PageQuery;
}

export const OrganisationProposalIndex: NextPage<Props> = props => {
  const { error, data, loading } = useQuery<OrganisationProposalsQuery>(ORGANISATION_PROPOSALS_QUERY, {
    variables: { address: props.address, pageQuery: props.pagination }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data && !loading) {
    const items = data.proposals.proposals.edges.map(edge => {
      return <ProposalsTableItem proposal={edge.node} key={`proposal-${edge.cursor}`} />;
    });
    return (
      <PageLayout organisation={data.organisation}>
        {items}
        <BottomPager pageInfo={data.proposals.proposals.pageInfo} totalCount={data.proposals.proposals.totalCount} />
      </PageLayout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

OrganisationProposalIndex.getInitialProps = async context => {
  const address = (context.query.address as string).toLowerCase();
  const pagination = PageQuery.fromContext(context);
  return { address, pagination };
};

export default withApollo(OrganisationProposalIndex);
