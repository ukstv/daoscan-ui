import React from "react";
import { StatNumber } from "./stat-number";
import { Box } from "@theme-ui/components";

interface Props {
  name: string;
  value: number | string;
  icon: React.ReactNode;
}

export function Statistic(props: Props) {
  return (
    <Box variant={"statistic.card"}>
      <Box variant={"statistic.title"}>{props.name}</Box>
      <Box variant={"statistic.icon"}>{props.icon}</Box>
      <StatNumber value={props.value} />
    </Box>
  );
}
