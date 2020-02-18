import React from "react";
import { Container, ThemeProvider } from "theme-ui";
import { THEME } from "../styling/theme";
import { Header } from "./header.component";

export function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={THEME}>
      <Container>
        <Header />
        {props.children}
      </Container>
    </ThemeProvider>
  );
}
