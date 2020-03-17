import React from "react";
import { Jazzicon } from "../jazzicon/jazzicon.component";
import styled from "@emotion/styled";
import { Badge } from "@theme-ui/components";
import { PLATFORM } from "../../lib/platform";

const aragonImage = require("./aragon-platform.png");
const moloch1Image = require("./moloch-1-platform.png");

const PlatformBadge = styled(Badge)`
  display: block;
  width: 65%;
  height: 65%;
  background-color: transparent;
  padding: 0;
  border-radius: none;
  z-index: 100;
  margin-top: -70%;
  margin-left: -5%;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export function OrganisationAvatar(props: { address: string; platform: PLATFORM }) {
  const imageSource = () => {
    switch (props.platform) {
      case PLATFORM.ARAGON:
        return aragonImage;
      case PLATFORM.MOLOCH_1:
        return moloch1Image;
      default:
        console.error(`Unknown platform ${props.platform}`);
        return null;
    }
  };

  return (
    <>
      <Jazzicon address={props.address} />
      <PlatformBadge variant="circle">
        <img src={imageSource()} />
      </PlatformBadge>
    </>
  );
}
