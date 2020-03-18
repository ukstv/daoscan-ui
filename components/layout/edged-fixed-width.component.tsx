import styled from "@emotion/styled";
import { FixedWidthComponent } from "./fixed-width.component";
import { css } from "theme-ui";
import { EDGE_QUERY } from "./edge-query";

export const EdgedFixedWidthComponent = styled(FixedWidthComponent)(
  css({
    [EDGE_QUERY]: {
      paddingLeft: 2,
      paddingRight: 2
    }
  })
);
