import React from "react";
import { Flex } from "@theme-ui/components";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";
import { ActiveLink } from "./active-link";
import { PALETTE } from "../../theme/palette";

interface LinkItem {
  href: string;
  as?: string;
  title: string;
}

interface Props {
  links: LinkItem[];
}

const Container = styled(Flex)(
  css({
    borderBottom: BORDERS.bevel
  })
);

const PageMenuLink = styled(ActiveLink)(
  css({
    padding: 2,
    fontWeight: "normal",
    borderRight: BORDERS.bevel,
    "&:hover": {
      color: "text",
      bg: PALETTE.yellow[6]
    },
    "&.active": {
      color: "white",
      bg: PALETTE.yellow[7]
    },
    "&:hover.active": {
      color: "white",
      bg: PALETTE.yellow[6]
    }
  })
);

export function PageMenu(props: Props) {
  const renderItems = () => {
    return props.links.map((item, i) => {
      return (
        <PageMenuLink key={`p-${i}`} href={item.href} as={item.as}>
          {item.title}
        </PageMenuLink>
      );
    });
  };

  return <Container as={"nav"}>{renderItems()}</Container>;
}
