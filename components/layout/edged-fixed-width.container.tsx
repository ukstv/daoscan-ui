import styled from "@emotion/styled";
import { FixedWidthContainer } from "./fixed-width.container";
import { css } from "theme-ui";
import { EDGE_QUERY } from "./edge-query";

export const EdgedFixedWidthContainer = styled(FixedWidthContainer)(
  css({
    [EDGE_QUERY]: {
      paddingLeft: 2,
      paddingRight: 2
    }
  })
);
