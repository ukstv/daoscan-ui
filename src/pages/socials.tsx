import React from "react";
import styled from "@emotion/styled";
import { Icon } from "antd";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1624285_lyacg5u52zi.js"
});

const Container = styled.div`
  text-align: right;
`;

const SocialIcon = styled(IconFont)`
  font-size: 24px;
  line-height: 74.5px;
  margin-left: 1rem;
`;

export function Socials() {
  return (
    <Container>
      <a href={"//t.me/mydaodashboard"} target={"_blank"}><SocialIcon type="icon-telegram" /></a>
      <a href={"//twitter.com/mydaodashboard"}><SocialIcon type="icon-twitter" /></a>
    </Container>
  );
}
