import React from "react";
import { Box, Container, Grid, NavLink } from "@theme-ui/components";
import Link from "next/link";

export function TopBar() {
  return (
    <Container>
      <Grid columns={[2]}>
        <Box>
          <Link href={"/"} passHref={true}>
            <NavLink variant={"logo"}>daoscan</NavLink>
          </Link>
        </Box>
      </Grid>
    </Container>
  );
}
