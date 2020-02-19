import React from "react";
import { Box, Flex, Grid, NavLink } from "@theme-ui/components";
import { ActiveLink } from "../active-link.component";
import styled from "@emotion/styled";

interface Props {
  address: string;
}

const MenuRow = styled(Flex)`
  margin-top: 1rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

export function Menu(props: Props) {
  return (
    <Grid>
      <MenuRow as={"nav"}>
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
      </MenuRow>
    </Grid>
  );
}
