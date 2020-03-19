import React from "react";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

const Container = styled.div(
  css({
    borderBottom: BORDERS.bevel,
    paddingLeft: 2
  })
);

export function PageHeading(props: React.PropsWithChildren<{}>) {
  return <Container>{props.children}</Container>;
}
