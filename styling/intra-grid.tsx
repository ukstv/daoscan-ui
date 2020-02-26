import React from "react";
import { Box, Flex, Grid } from "@theme-ui/components";

interface Props {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

export const IntraGrid = (props: Props) => (
  // @ts-ignore
  <Flex columns={[1, "2fr 1fr"]} variant={'intraGrid'}>
    <Box variant={'intraGrid.content'}>{props.content}</Box>
    <Box variant={"intraGrid.sidebar"}>{props.sidebar}SIDEBAR</Box>
  </Flex>
);
