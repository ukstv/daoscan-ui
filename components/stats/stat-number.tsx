import React from "react";
import styled from "@emotion/styled";
import { FormattedNumber } from "./formatted-number";

interface Props {
  value: number | string;
  groupSeparator?: string;
  precision?: number;
  decimalSeparator?: string;
}

const StatNumberE = styled.span`
  font-size: 24px;
  vertical-align: top;
`;

export function StatNumber(props: Props) {
  return (
    <StatNumberE>
      <FormattedNumber
        value={props.value}
        precision={props.precision}
        groupSeparator={props.groupSeparator}
        decimalSeparator={props.decimalSeparator}
      />
    </StatNumberE>
  );
}
