import _ from "lodash";
import React from "react";

interface Props {
  value: number | string;
  groupSeparator?: string;
  precision?: number;
  decimalSeparator?: string;
  defaultValue: React.ReactNode;
}

export function FormattedNumber(props: Props) {
  const val = String(props.value);
  const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);

  const groupSeparator = props.groupSeparator || ",";
  const precision = props.precision;
  const decimalSeparator = props.decimalSeparator || ".";

  if (cells) {
    const negative = cells[1];
    let int = cells[2] || "0";
    let decimal = cells[4] || "";

    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);

    if (typeof precision === "number") {
      decimal = _.padEnd(decimal, precision, "0").slice(0, precision);
    }

    if (decimal) {
      decimal = `${decimalSeparator}${decimal}`;
    }

    let valueNode = [
      <span key="int">
        {negative}
        {int}
      </span>,
      decimal && <span key="decimal">{decimal}</span>
    ];

    return <>{valueNode}</>;
  } else {
    return <>{props.defaultValue}</>;
  }
}
