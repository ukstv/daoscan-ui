import { Box, Link } from "@theme-ui/components";
import React from "react";
import styled from "@emotion/styled";
import TelegramIcon from "./telegram.svg";
import TwitterIcon from "./twitter.svg";

const SocialsE = styled(Box)`
  text-align: right;
`;

const LinkE = styled(Link)`
  margin-left: 1rem;
`;

const SocialImage = styled.span`
  & svg {
    width: 32px;
    height: 32px;
    opacity: 0.4;
  }
  &:hover svg {
    opacity: 1;
  }
`;

const TelegramImage = styled(SocialImage)`
  &:hover svg {
    fill: #0088cc;
  }
`;

const TwitterImage = styled(SocialImage)`
  &:hover svg {
    fill: #1da1f3;
  }
`;

export function Socials() {
  return (
    <SocialsE>
      <LinkE href={"//t.me/mydaodashboard"} target={"_blank"}>
        <TelegramImage>
          <TelegramIcon />
        </TelegramImage>
      </LinkE>
      <LinkE href={"//twitter.com/mydaodashboard"} target={"_blank"}>
        <TwitterImage>
          <TwitterIcon />
        </TwitterImage>
      </LinkE>
    </SocialsE>
  );
}
