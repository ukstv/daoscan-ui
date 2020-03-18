import styled from "@emotion/styled";
import { css } from "theme-ui";
import { PulseAnimation } from "./pulse.animation";

export const PlaceholderRow = styled.div(
  css({
    backgroundColor: "placeholder",
    height: "1.5em",
    width: "8em",
    display: "inline-block",
    animation: PulseAnimation
  })
);
