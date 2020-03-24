import React, { useCallback, useState } from "react";
import { DateTime } from "luxon";
import { UnreachableCaseError } from "../../lib/unreachable-case.error";

enum FORMAT {
  DATE,
  FULL
}

export function DateSpan(props: { date: DateTime }) {
  const [format, setFormat] = useState(FORMAT.DATE);

  const renderDate = () => {
    switch (format) {
      case FORMAT.DATE:
        return props.date.toUTC().toLocaleString(DateTime.DATE_SHORT);
      case FORMAT.FULL:
        return `${props.date.toUTC().toLocaleString(DateTime.DATETIME_SHORT)} UTC`;
      default:
        throw new UnreachableCaseError(format);
    }
  };

  const toggleFormat = useCallback(() => {
    switch (format) {
      case FORMAT.DATE:
        setFormat(FORMAT.FULL);
        break;
      case FORMAT.FULL:
        setFormat(FORMAT.DATE);
        break;
      default:
        setFormat(FORMAT.DATE);
    }
  }, [format]);

  return (
    <span title={props.date.toISO()} onClick={toggleFormat}>
      {renderDate()}
    </span>
  );
}
