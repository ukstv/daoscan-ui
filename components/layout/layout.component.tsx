import React from "react";
import { Box, Container, jsx, Styled, ThemeProvider } from "theme-ui";
import { THEME } from "../../theme/theme";

export function Layout(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        Foo
        <Box variant={"layout.header"}>Hello{/*<TopBar />*/}</Box>
        <Box variant={"layout.main"}>
          <Container variant={"main"} className={props.className}>
            {props.children}
          </Container>
        </Box>
        <Box variant={"layout.footer"}>
          <Container>{/*<Socials />*/}</Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
