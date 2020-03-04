import { keyframes } from "@emotion/core";

const Keyframes = keyframes({
  "0%": {
    opacity: 0.6
  },
  "50%": {
    opacity: 1
  },
  "100%": {
    opacity: 0.6
  }
});

export const PulseAnimation = `${Keyframes.toString()} 1.5s infinite`;
