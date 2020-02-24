import React from "react";
import { Box, Container, ThemeProvider } from "theme-ui";
import { THEME } from "../styling/theme";
import { TopBar } from "./top-bar.component";
import { Socials } from "./socials/socials.component";

export function Layout(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ThemeProvider theme={THEME}>
      <Box variant={"layout.wrapper"}>
        <Box variant={"layout.header"}>
          <TopBar />
        </Box>
        <Box variant={"layout.main"}>
          <Container variant={"main"} className={props.className}>
            {props.children}
          </Container>
        </Box>
        <Box variant={"layout.footer"}>
          <Container>
            <Socials />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
