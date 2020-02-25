import React from "react";
import { Box, Container, Flex, Grid, NavLink } from "@theme-ui/components";
import Link from "next/link";
import LogoIcon from './images/logo.svg'

export function TopBar() {
  return (
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
  );
}
