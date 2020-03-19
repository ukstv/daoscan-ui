import React from "react";
import styled from "@emotion/styled";
import { FormattedNumber } from "./formatted-number";

export const IconImageSmall = styled.span`
  margin: 0 0.2rem 0 0;
  & svg {
    width: 1rem;
    height: 1rem;
    vertical-align: text-bottom;
  }
`;

interface Props {
  number: number | undefined;
  icon: React.ReactNode;
  title: string;
  numberPrefix?: string;
  precision?: number;
  className?: string;
}

export function InlineStat(props: Props) {
  if (props.number !== undefined) {
    return (
      <span title={props.title} className={props.className}>
        <IconImageSmall>{props.icon}</IconImageSmall>
        {props.numberPrefix}
        <FormattedNumber value={props.number} precision={props.precision} defaultValue={"-"} />
      </span>
    );
  } else {
    return <></>;
  }
}
