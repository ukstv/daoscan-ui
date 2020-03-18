import React from "react";
import { Box } from "@theme-ui/components";

export function FixedWidthContainer(props: React.PropsWithChildren<{}>) {
  return <Box>{props.children}</Box>;
}
