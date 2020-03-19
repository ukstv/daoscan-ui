import React, { useEffect, useState } from "react";
import { getProfile, Profile } from "3box/lib/api";
import { ProfileAvatar } from "../profile-avatar.component";
import styled from "@emotion/styled";

const InlineAvatar = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: bottom;
`;

export function InlineProfile(props: { address: string }) {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);

  useEffect(() => {
    getProfile(props.address)
      .then(profile => {
        if (profile.hasOwnProperty("name") && profile.hasOwnProperty("emoji")) {
          setProfile(profile as Profile);
        }
      })
      .catch(() => {
        // Do Nothing
      });
  }, [props.address]);

  if (profile) {
    return (
      <>
        <InlineAvatar>
          <ProfileAvatar address={props.address} profile={profile} />
        </InlineAvatar>
        {profile.name} {profile.emoji} <small>{props.address}</small>
      </>
    );
  } else {
    return <>{props.address}</>;
  }
}
