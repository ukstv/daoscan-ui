import React from "react";
import { Layout } from "../../components/layout.component";
import { Box, Flex, Grid, NavLink, Link as TLink } from "@theme-ui/components";
import { Styled } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import { ORGANISATIONS_QUERY, OrganisationsQuery, PageInfo } from "../../components/organisation-page/queries";
import { withApollo } from "../../lib/apollo";
import { PureOrganisationProps } from "../../components/organisation-page/props";
import { IntraGrid } from "../../styling/intra-grid";
import { OrganisationAvatar } from "../../components/organisation-avatar/organisation-avatar.component";
import { DateTime } from "luxon";
import { NextPage } from "next";
import Link from "next/link";
import { PLATFORM } from "../../lib/platform";
import { UnreachableCaseError } from "../../lib/unreachable-case.error";
import _ from "lodash";

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
        return `https://mainnet.aragon.org/#/${props.organisation.name}`;
      default:
        throw new UnreachableCaseError(props.organisation.platform);
    }
  };

  return (
    <Flex variant={"organisations.item"}>
      <Box variant={"organisations.avatar"}>
        <OrganisationAvatar address={props.organisation.address} platform={props.organisation.platform} />
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>
        <Box variant={"participant.name"}>{props.organisation.name}</Box>
        <div>
          <Box variant={"organisations.address"}>{props.organisation.address}</Box>
          <Box variant={"organisations.inline"}>Members: {props.organisation.participants.totalCount}</Box>
          <Box variant={"organisations.inline"}>Created: {formatDate(props.organisation.createdAt)}</Box>
        </div>
      </Box>
      <Box variant={"organisations.openAction"}>
        <TLink href={organisationLink()} target={"_blank"}>
          <span className={"title"}>Manage</span>☜
        </TLink>
      </Box>
    </Flex>
  );
}

function BottomPager(props: { pageInfo: PageInfo; totalCount: number }) {
  const renderNextLink = () => {
    if (props.pageInfo.hasNextPage && props.pageInfo.endCursor) {
      return (
        <Link href={{ query: { after: props.pageInfo.endCursor } }} passHref={true}>
          <TLink variant={"pager.arrow"}>＞</TLink>
        </Link>
      );
    } else {
      return <TLink variant={"pager.arrow.disabled"}>＞</TLink>;
    }
  };

  const renderPreviousLink = () => {
    if (props.pageInfo.hasPreviousPage && props.pageInfo.startCursor) {
      return (
        <Link href={{ query: { before: props.pageInfo.startCursor } }} passHref={true}>
          <TLink variant={"pager.arrow"}>＜</TLink>
        </Link>
      );
    } else {
      return <TLink variant={"pager.arrow.disabled"}>＜</TLink>;
    }
  };

  return (
    <Flex variant={"pager.bottom"}>
      <Box>{renderPreviousLink()}</Box>
      <Box variant={"pager.pageNumber"}>
        {props.pageInfo.startIndex}&thinsp;&ndash;&thinsp;{props.pageInfo.endIndex} of {props.totalCount}
      </Box>
      <Box>{renderNextLink()}</Box>
    </Flex>
  );
}

interface Props {
  first: number | undefined;
  after: string | undefined;
  last: number | undefined;
  before: string | undefined;
}

const OrganisationIndexPage: NextPage<Props> = props => {
  const { error, data } = useQuery<OrganisationsQuery>(ORGANISATIONS_QUERY, {
    variables: {
      first: props.first,
      after: props.after,
      last: props.last,
      before: props.before
    }
  });

  const renderPlaceholderRows = () => {
    return _.times(25).map(i => {
      return <p key={`p-${i}`}>p {i}</p>;
    });
  };

  const renderContent = () => {
    if (data) {
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
      <Grid>
        <Box variant={"heading"}>
          <Styled.h1>
            <Link href={"/organisations"} passHref={true}>
              <TLink>Organisations</TLink>
            </Link>
          </Styled.h1>
        </Box>
      </Grid>
      <IntraGrid content={renderContent()} sidebar={<></>} />
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
