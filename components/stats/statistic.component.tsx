import React from "react";
import { StatNumber } from "./stat-number";
import { Box } from "@theme-ui/components";
import ReactPlaceholder from "react-placeholder";
import { PulseAnimation } from "../../styling/pulse.animation";

interface Props {
  name: string;
  value: number | string | undefined;
  icon: React.ReactNode;
}

const StatNumberPlaceholder = () => (
  <Box
    variant={"placeholder.row"}
    sx={{
      width: "5em",
      display: "inline-block",
      animation: PulseAnimation
    }}
  />
);

export function Statistic(props: Props) {
  const isReady = Boolean(props.value);
  return (
    <Box variant={"statistic.card"}>
      <Box variant={"statistic.title"}>{props.name}</Box>
      <Box variant={"statistic.icon"}>{props.icon}</Box>
      <ReactPlaceholder customPlaceholder={<StatNumberPlaceholder />} ready={isReady}>
        <StatNumber value={props.value!} />
      </ReactPlaceholder>
    </Box>
  );
}
