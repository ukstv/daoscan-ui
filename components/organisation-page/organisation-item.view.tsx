import React from "react";
import { Box, Flex } from "@theme-ui/components";

interface Props {
  avatar: React.ReactNode;
  name: React.ReactNode;
  address: React.ReactNode;
  totalCount: React.ReactNode;
  createdAt: React.ReactNode;
  openAction: React.ReactNode;
}

export function OrganisationItemView(props: Props) {
  return (
    <Flex variant={"organisations.item"}>
      <Box variant={"organisations.avatar"}>{props.avatar}</Box>
      <Box sx={{ flex: "1 1 auto", overflow: 'scroll' }}>
        <Box variant={"participant.name"}>{props.name}</Box>
        <Box>
          <Box variant={"organisations.address"}>{props.address}</Box>
          <Box variant={"organisations.inline"}>{props.totalCount}</Box>
          <Box variant={"organisations.inline"}>{props.createdAt}</Box>
        </Box>
      </Box>
      <Box variant={"organisations.openAction"}>{props.openAction}</Box>
    </Flex>
  );
}
