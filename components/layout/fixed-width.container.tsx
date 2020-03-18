import React from "react";
import { css } from "theme-ui";
import { CONTAINER_BREAKPOINTS } from "../../theme/breakpoints";
import styled from "@emotion/styled";

const style = css({
  width: "100%",
  paddingRight: 0,
  paddingLeft: 0,
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: CONTAINER_BREAKPOINTS,
});

export const FixedWidthContainer = styled.div(style);
