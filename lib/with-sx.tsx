import React, { Component, ComponentType } from "react";
import { SxStyleProp } from "theme-ui";

function getDisplayName(WrappedComponent: ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export function withSx<P extends { sx?: SxStyleProp }>(Component: ComponentType<P>, sx: SxStyleProp) {
  const Wrapped: React.FunctionComponent<P> = (props: P) => <Component {...props} sx={sx} />;
  Wrapped.displayName = `withSx(${getDisplayName(Component)})`;
  return Wrapped;
  // return (props: P) => <Component {...props} sx={sx} />;
}
