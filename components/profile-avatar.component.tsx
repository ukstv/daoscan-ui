import { Profile } from "3box/lib/api";
import { Image } from "theme-ui";
import { Jazzicon } from "./jazzicon/jazzicon.component";
import React from "react";

export function ProfileAvatar(props: { address: string; profile?: Profile }) {
  if (
    props.profile &&
    props.profile.image &&
    props.profile.image[0] &&
    props.profile.image[0]["@type"] == "ImageObject" &&
    props.profile.image[0].contentUrl &&
    props.profile.image[0].contentUrl["/"]
  ) {
    const src = `https://ipfs.infura.io/ipfs/${props.profile.image[0].contentUrl["/"]}`;
    return <Image src={src} variant={"avatar"} />;
  } else {
    return <Jazzicon address={props.address} />;
  }
}
