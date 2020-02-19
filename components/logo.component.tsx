import React from "react";
import { Box } from "@theme-ui/components";
import Link from "next/link";
import styled from "@emotion/styled";

const Anchor = styled.a`
  border-bottom: none;
  cursor: pointer;
`;

export function Logo() {
  return (
    <Box>
      <Link href={"/"}>
        <Anchor>
          <span role={"img"}>🖇</span>️ daoscan
        </Anchor>
      </Link>
    </Box>
  );
}
