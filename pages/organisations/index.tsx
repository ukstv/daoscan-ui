import React from "react";
import { Layout } from "../../components/layout/layout.component";
import { Box, Flex, Link as TLink } from "@theme-ui/components";
import { Styled } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import { ORGANISATIONS_QUERY, OrganisationsQuery, PageInfo } from "../../components/organisations/queries";
import { withApollo } from "../../lib/apollo";
import { PureOrganisationProps } from "../../components/organisations/props";
import { SidebarGrid } from "../../components/layout/sidebar-grid";
import { OrganisationAvatar } from "../../components/organisation-avatar/organisation-avatar.component";
import { DateTime } from "luxon";
import { NextPage } from "next";
import { PLATFORM } from "../../lib/platform";
import { UnreachableCaseError } from "../../lib/unreachable-case.error";
import _ from "lodash";
import { OrganisationItemView } from "../../components/organisations/organisation-item.view";
import { PulseAnimation } from "../../components/placeholders/pulse.animation";
import { PlaceholderRow } from "../../components/placeholders/placeholder-row";
import { PageHeading } from "../../components/layout/page-heading";
import { Link as BLink } from "../../components/navigation/link";
import { BottomPager } from "../../components/navigation/bottom-pager";

function formatDate(s: string) {
  const date = DateTime.fromISO(s);
  return <span title={date.toISO()}>{date.toISODate()}</span>;
}

function OrganisationItem(props: { organisation: PureOrganisationProps }) {
  const organisationLink = () => {
    switch (props.organisation.platform) {
      case PLATFORM.MOLOCH_1:
        return `//pokemol.com/dao/${props.organisation.address}`;
      case PLATFORM.ARAGON:
        return `//mainnet.aragon.org/#/${props.organisation.name}`;
      default:
        throw new UnreachableCaseError(props.organisation.platform);
    }
  };

  const viewProps = {
    avatar: <OrganisationAvatar address={props.organisation.address} platform={props.organisation.platform} />,
    name: props.organisation.name,
    address: props.organisation.address,
    totalCount: <>Members: {props.organisation.participants.totalCount}</>,
    createdAt: <>Created: {formatDate(props.organisation.createdAt)}</>,
    openAction: (
      <TLink href={organisationLink()} target={"_blank"}>
        <span className={"title"}>Manage</span>☜
      </TLink>
    )
  };
  return <OrganisationItemView {...viewProps} />;
}

interface Props {
  first: number | undefined;
  after: string | undefined;
  last: number | undefined;
  before: string | undefined;
}

const OrganisationIndexPage: NextPage<Props> = props => {
  const { loading, error, data } = useQuery<OrganisationsQuery>(ORGANISATIONS_QUERY, {
    variables: {
      first: props.first,
      after: props.after,
      last: props.last,
      before: props.before
    }
  });

  const renderPlaceholderRows = () => {
    const rows = _.times(25).map(i => {
      const props = {
        avatar: <Box variant={"round"} sx={{ animation: PulseAnimation }} />,
        name: <PlaceholderRow />,
        address: <PlaceholderRow />,
        totalCount: <PlaceholderRow />,
        createdAt: <PlaceholderRow />,
        openAction: <></>
      };
      return <OrganisationItemView {...props} key={`p-${i}`} />;
    });
    const pageInfo = {
      startIndex: 0,
      endIndex: 0,
      endCursor: "",
      startCursor: "",
      hasNextPage: false,
      hasPreviousPage: false
    };
    return (
      <>
        {rows}
        <BottomPager pageInfo={pageInfo} totalCount={0} />
      </>
    );
  };

  const renderContent = () => {
    if (data && !loading) {
      const organisationRows = data.organisations.edges.map((e, i) => {
        return <OrganisationItem organisation={e.node} key={`org-${e.node.address}-${i}`} />;
      });
      return (
        <>
          {organisationRows}
          <BottomPager pageInfo={data.organisations.pageInfo} totalCount={data.organisations.totalCount} />
        </>
      );
    } else {
      return renderPlaceholderRows();
    }
  };

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  return (
    <Layout>
      <PageHeading>
        <Styled.h1>
          <BLink href={"/organisations"}>Organisations</BLink>
        </Styled.h1>
      </PageHeading>
      <SidebarGrid content={renderContent()} sidebar={<></>} />
    </Layout>
  );
};

OrganisationIndexPage.getInitialProps = async context => {
  const first = context.query.first ? Number(context.query.first) : undefined;
  const after = context.query.after ? String(context.query.after) : undefined;
  const last = context.query.last ? Number(context.query.last) : undefined;
  const before = context.query.before ? String(context.query.before) : undefined;
  return { first, after, last, before };
};

export default withApollo(OrganisationIndexPage);
