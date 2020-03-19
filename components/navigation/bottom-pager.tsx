import { PageInfo } from "../organisations/queries";
import Link from "next/link";
import { Box, Flex, Link as TLink } from "@theme-ui/components";
import React from "react";

export function BottomPager(props: { pageInfo: PageInfo; totalCount: number | undefined }) {
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

  const renderPageNumber = () => {
    if (props.totalCount) {
      return (
        <>
          {props.pageInfo.startIndex}&thinsp;&ndash;&thinsp;{props.pageInfo.endIndex} of {props.totalCount}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Flex variant={"pager.bottom"}>
      <Box>{renderPreviousLink()}</Box>
      <Box variant={"pager.pageNumber"}>{renderPageNumber()}</Box>
      <Box>{renderNextLink()}</Box>
    </Flex>
  );
}
