import React from "react";
import { Flex } from "@theme-ui/components";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

interface Props {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

const Container = styled(Flex)(
  css({
    flex: "1 1 auto"
  })
);

const Content = styled.div(
  css({
    flex: [2]
  })
);

const Sidebar = styled.div(
  css({
    flex: [1],
    borderLeft: BORDERS.bevel
  })
);

export const SidebarGrid = (props: Props) => (
  // @ts-ignore
  <Container columns={[1, "2fr 1fr"]}>
    <Content>{props.content}</Content>
    {/*<Sidebar>{props.sidebar}SIDEBAR</Sidebar>*/}
  </Container>
);
