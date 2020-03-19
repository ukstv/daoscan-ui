import React from "react";
import { Box, Flex } from "@theme-ui/components";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

interface Props {
  avatar: React.ReactNode;
  name: React.ReactNode;
  address: React.ReactNode;
  totalCount: React.ReactNode;
  createdAt: React.ReactNode;
  openAction: React.ReactNode;
}

const Container = styled(Flex)(
  css({
    borderBottom: BORDERS.bevel,
    padding: 2
  })
);

export function OrganisationItemView(props: Props) {
  return (
    <Container>
      <Box variant={"organisations.avatar"}>{props.avatar}</Box>
      <Box sx={{ flex: "1 1 auto", overflow: "scroll" }}>
        <Box variant={"participant.name"}>{props.name}</Box>
        <Box>
          <Box variant={"organisations.address"}>{props.address}</Box>
          <Box variant={"organisations.inline"}>{props.totalCount}</Box>
          <Box variant={"organisations.inline"}>{props.createdAt}</Box>
        </Box>
      </Box>
      <Box variant={"organisations.openAction"}>{props.openAction}</Box>
    </Container>
  );
}
