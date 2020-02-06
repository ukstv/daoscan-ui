import React from "react";
import { Grid } from "@theme-ui/components";
import styled from "@emotion/styled";
import { Logo } from "./logo.component";
import { Socials } from "./socials/socials.component";

const HeaderE = styled(Grid)`
  margin-top: 1rem;
  line-height: 24px;
  font-size: 24px;
`;

export function Header() {
  return (
    <HeaderE columns={[2]}>
      <Logo />
      <Socials />
    </HeaderE>
  );
}
