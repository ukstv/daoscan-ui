import React from "react";
import { Flex, Grid, NavLink } from "@theme-ui/components";
import { ActiveLink } from "../navigation/active-link.component";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

interface Props {
  address: string;
}

const Container = styled(Flex)(
  css({
    borderBottom: BORDERS.bevel
  })
);

export function PageMenu(props: Props) {
  return (
    <Container as={"nav"}>
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
    </Container>
  );
}
