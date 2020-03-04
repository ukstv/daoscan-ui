import React from "react";
import { StatNumber } from "./stat-number";
import { Box } from "@theme-ui/components";
import ReactPlaceholder from "react-placeholder";
import { PulseKeyframes } from "../../styling/pulse.keyframes";

interface Props {
  name: string;
  value: number | string | undefined;
  icon: React.ReactNode;
}

const StatNumberPlaceholder = () => (
  <Box
    sx={{
      backgroundColor: "gray.3",
      height: "1.5em",
      width: "5em",
      display: "inline-block",
      animation: `${PulseKeyframes.toString()} 1.5s infinite`
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
