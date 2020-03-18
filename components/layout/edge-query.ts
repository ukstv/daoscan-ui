import { BREAKPOINTS, CONTAINER_BREAKPOINTS } from "../../theme/breakpoints";

export const EDGE_QUERY = `@media screen and (min-width: ${BREAKPOINTS[0]}) and (max-width: ${CONTAINER_BREAKPOINTS[2]}), (min-width: ${BREAKPOINTS[2]}) and (max-width: ${CONTAINER_BREAKPOINTS[3]}), (max-width: ${BREAKPOINTS[0]})`;
