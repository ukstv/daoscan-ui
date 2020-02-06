import React from "react";
import { Container, ThemeProvider } from "theme-ui";
import { THEME } from "../styling/theme";

export function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={THEME}>
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
}
