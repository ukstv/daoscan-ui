import React from "react";
import styled from "@emotion/styled";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

interface Props {
  avatar: React.ReactNode;
  name: React.ReactNode;
  address: React.ReactNode;
  totalCount: React.ReactNode;
  createdAt: React.ReactNode;
  openAction: React.ReactNode;
}

const Element = styled.div(
  css({
    display: "flex",
    borderBottom: BORDERS.bevel,
    padding: 2
  })
);

const AvatarContainer = styled.div(
  css({
    width: "3rem",
    height: "3rem",
    minWidth: "3rem",
    marginRight: 2
  })
);

const Body = styled.div(
  css({
    flex: "1 1 auto",
    overflow: "scroll"
  })
);

const Name = styled.div(
  css({
    fontSize: "larger",
    fontWeight: "bolder"
  })
);

const Address = styled.div(
  css({
    fontFamily: "mono",
    wordWrap: "unset",
    fontSize: "smaller",
    paddingRight: 2,
    display: "inline-block"
  })
);

const Inline = styled.div(
  css({
    whiteSpace: "nowrap",
    fontSize: "smaller",
    paddingRight: 2,
    display: "inline-block"
  })
);

const OpenAction = styled.div(
  css({
    minWidth: "4rem",
    marginTop: -2,
    marginRight: -2,
    marginBottom: -2,
    borderLeft: "bevel",
    "&>a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "4rem",
      fontSize: "x-large",
      textAlign: "center",
      textDecoration: "none",
      height: "100%",
      padding: 2
    },
    "&>a>span": {
      display: "none"
    },
    "&:hover>a": {
      backgroundColor: "primaryHover",
      color: "white"
    },
    "&:hover>a>span": {
      display: ["none", "block"],
      fontSize: 1,
      marginRight: 1
    }
  })
);

export function OrganisationItemView(props: Props) {
  return (
    <Element>
      <AvatarContainer>{props.avatar}</AvatarContainer>
      <Body>
        <Name>{props.name}</Name>
        <div>
          <Address>{props.address}</Address>
          <Inline>{props.totalCount}</Inline>
          <Inline>{props.createdAt}</Inline>
        </div>
      </Body>
      <OpenAction>{props.openAction}</OpenAction>
    </Element>
  );
}
