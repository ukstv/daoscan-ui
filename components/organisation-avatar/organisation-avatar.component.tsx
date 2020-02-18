import React from "react";
import { Jazzicon } from "../jazzicon/jazzicon.component";
import styled from "@emotion/styled";
import { Badge } from "@theme-ui/components";
import { PLATFORM } from "../../lib/platform";

const aragonImage = require("./aragon-platform.png");
const moloch1Image = require("./moloch-1-platform.png");

const OrganisationAvatarE = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const PlatformBadge = styled(Badge)`
  position: absolute;
  display: block;
  width: 2rem;
  height: 2rem;
  z-index: 100;
  margin-top: 2.2rem;
  margin-left: -0.2rem;
  background-color: transparent;
  & img {
    width: 2rem;
    height: 2rem;
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
    <OrganisationAvatarE>
      <PlatformBadge variant="circle">
        <img src={imageSource()} />
      </PlatformBadge>
      <Jazzicon address={props.address} />
    </OrganisationAvatarE>
  );
}
