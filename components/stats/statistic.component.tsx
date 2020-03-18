import React from "react";
import { StatNumber } from "./stat-number";
import ReactPlaceholder from "react-placeholder";
import styled from "@emotion/styled";
import { PlaceholderRow } from "../placeholders/placeholder-row";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

interface Props {
  name: string;
  value: number | string | undefined;
  icon: React.ReactNode;
}

const StatNumberPlaceholder = styled(PlaceholderRow)(
  css({
    width: "5em"
  })
);

const Card = styled.div(
  css({
    padding: 3,
    textAlign: "center",
    borderLeft: BORDERS.bevel,
    borderBottom: BORDERS.bevel,
    boxShadow: "none",
    "&:first-of-type": {
      borderLeft: "none"
    }
  })
);

const Title = styled.div(
  css({
    marginBottom: 2
  })
);

const Icon = styled.div(
  css({
    display: "inline",
    "& svg": {
      width: 9,
      height: 9,
      verticalAlign: "text-bottom",
      marginRight: 1
    }
  })
);

export function Statistic(props: Props) {
  const isReady = Boolean(props.value);
  return (
    <Card>
      <Title>{props.name}</Title>
      <Icon>{props.icon}</Icon>
      <ReactPlaceholder customPlaceholder={<StatNumberPlaceholder />} ready={isReady}>
        <StatNumber value={props.value!} />
      </ReactPlaceholder>
    </Card>
  );
}
