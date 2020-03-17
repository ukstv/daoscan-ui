import React from "react";
import { Flex, Grid, NavLink } from "@theme-ui/components";
import { ActiveLink } from "../active-link.component";

interface Props {
  address: string;
}

export function Menu(props: Props) {
  return (
    <Grid>
      <Flex as={"nav"} sx={{ borderBottom: "bevel" }}>
        <ActiveLink href={`/organisations/[address]`} as={`/organisations/${props.address}`} passHref={true}>
          <NavLink variant={"pageNav"}>Overview</NavLink>
        </ActiveLink>
        <ActiveLink
          href={`/organisations/[address]/proposals`}
          as={`/organisations/${props.address}/proposals`}
          passHref={true}
        >
          <NavLink variant={"pageNav"}>Proposals</NavLink>
        </ActiveLink>
        <ActiveLink
          href={`/organisations/[address]/participants`}
          as={`/organisations/${props.address}/participants`}
          passHref={true}
        >
          <NavLink variant={"pageNav"}>Participants</NavLink>
        </ActiveLink>
      </Flex>
    </Grid>
  );
}
