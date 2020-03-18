import React from "react";
import { Box, Container, Flex, Styled, jsx } from "theme-ui";
import Link from "next/link";
import { NavLink } from "@theme-ui/components";
import { withSx } from "../../lib/with-sx";

const Column = withSx(Box, { display: "flex", flexDirection: "column", minHeight: "100vh" });
const HeaderRow = withSx(Box, { borderBottom: "bevel", height: 12, lineHeight: "3rem" });

export function Layout(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Column>
      <HeaderRow>
        <Container>
          <Flex>
            <Box>
              <Link href={"/"} passHref={true}>
                <NavLink variant={"topBar.logo"}>
                  {/*<LogoIcon />*/}
                  Daoscan
                </NavLink>
              </Link>
            </Box>
            <Box variant={"topBar.menu"}>
              <Link href={"/organisations"} passHref={true}>
                <NavLink variant={"topBar.menu"}>Organisations</NavLink>
              </Link>
            </Box>
          </Flex>
        </Container>
      </HeaderRow>
      <Box variant={"layout.main"}>
        <Container variant={"main"} className={props.className}>
          {props.children}
        </Container>
      </Box>
      <Box variant={"layout.footer"}>
        <Container>{/*<Socials />*/}</Container>
      </Box>
    </Column>
  );
}
