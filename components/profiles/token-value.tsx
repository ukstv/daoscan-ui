import BigNumber from "bignumber.js";
import { FormattedNumber } from "../stats/formatted-number";
import React from "react";

export function TokenValue(props: { token: { amount: string; decimals: number; name: string; symbol: string } }) {
  const value = new BigNumber(props.token.amount).div(10 ** props.token.decimals).toNumber();
  return (
    <>
      <FormattedNumber value={value} defaultValue={0} /> {props.token.symbol}
    </>
  );
}
