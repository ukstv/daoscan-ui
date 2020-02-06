import React from "react";
import HomeIcon from "./home.icon.svg";
import { StatNumber } from "./stat-number";
import { Box, Card } from "@theme-ui/components";
import styled from "@emotion/styled";

interface Props {
  name: string;
  value: number | string;
  icon: React.ReactNode;
}

const Title = styled(Box)`
  color: grey;
  margin-bottom: 0.5rem;
`;

const IconImage = styled.span`
  & svg {
    width: 36px;
    height: 36px;
    vertical-align: text-bottom;
  }
`;

export function Statistic(props: Props) {
  return (
    <Card variant={"statistic"}>
      <Title>{props.name}</Title>
      <IconImage>{props.icon}</IconImage> <StatNumber value={props.value} />
    </Card>
  );
}
