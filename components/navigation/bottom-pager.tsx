import { PageInfo } from "../organisations/queries";
import { Link as TLink } from "@theme-ui/components";
import React from "react";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";
import { Link } from "./link";
import { useRouter } from "next/router";

const Element = styled.div(
  css({
    display: "flex",
    borderBottom: BORDERS.bevel,
    marginBottom: "-1px"
  })
);

const PageNumberContainer = styled.div(
  css({
    flex: "1 1 auto",
    padding: 2,
    textAlign: "center",
    borderLeft: BORDERS.bevel,
    borderRight: BORDERS.bevel
  })
);

const DisabledLink = styled(TLink)(
  css({
    padding: 2,
    minWidth: "4rem",
    textAlign: "center",
    color: "white",
    backgroundColor: "muted",
    display: "block",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      backgroundColor: "muted"
    }
  })
);

const ArrowLink = styled(Link)(
  css({
    display: "block",
    textDecoration: "none",
    padding: 2,
    minWidth: "4rem",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "green.7",
    color: "white",
    "&:hover": {
      backgroundColor: "green.6",
      color: "white"
    },
    "&:focus": {
      backgroundColor: "green.7",
      color: "white"
    }
  })
);

function justPath(asPath: string) {
  return decodeURIComponent(asPath).replace(/\?[\w\=]+/g, "");
}

export function BottomPager(props: { pageInfo: PageInfo; totalCount: number | undefined }) {
  const router = useRouter();

  const renderNextLink = () => {
    if (props.pageInfo.hasNextPage && props.pageInfo.endCursor) {
      const query = { after: props.pageInfo.endCursor };
      const href = { pathname: router.pathname, query };
      const as = { pathname: justPath(router.asPath), query };
      return (
        <ArrowLink href={href} as={as}>
          ＞
        </ArrowLink>
      );
    } else {
      return <DisabledLink>＞</DisabledLink>;
    }
  };

  const renderPreviousLink = () => {
    if (props.pageInfo.hasPreviousPage && props.pageInfo.startCursor) {
      const query = { before: props.pageInfo.startCursor };
      const href = { pathname: router.pathname, query };
      const as = { pathname: justPath(router.asPath), query };
      return (
        <ArrowLink href={href} as={as}>
          ＜
        </ArrowLink>
      );
    } else {
      return <DisabledLink>＜</DisabledLink>;
    }
  };

  const renderPageNumber = () => {
    if (props.totalCount) {
      return (
        <PageNumberContainer>
          {props.pageInfo.startIndex}&thinsp;&ndash;&thinsp;{props.pageInfo.endIndex} of {props.totalCount}
        </PageNumberContainer>
      );
    } else {
      return <PageNumberContainer />;
    }
  };

  return (
    <Element>
      {renderPreviousLink()}
      {renderPageNumber()}
      {renderNextLink()}
    </Element>
  );
}
