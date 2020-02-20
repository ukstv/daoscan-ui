import React, { useEffect, useState } from "react";
import { Participant } from "./queries";
import { Box, Flex, Styled, Image } from "theme-ui";
import styled from "@emotion/styled";
import { getProfile, Profile } from "3box/lib/api";
import { Jazzicon } from "../jazzicon/jazzicon.component";
import { TokenValue } from "./props";

interface Props {
  participants: Participant[];
}

const TdNumeric = styled(Styled.td)`
  text-align: right;
`;

function UnknownParticipantProfile(props: { address: string }) {
  return (
    <Flex>
      <Box variant={"participant.avatar"}>
        <ProfileAvatar address={props.address} />
      </Box>
      <Box>
        <Box variant={"participant.name"}>anonymous</Box>
        <Box variant={"participant.address"}>{props.address}</Box>
      </Box>
    </Flex>
  );
}

function ProfileAvatar(props: { address: string; profile?: Profile }) {
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

function KnownParticipantProfile(props: { profile: Profile; address: string }) {
  return (
    <Flex>
      <Box variant={"participant.avatar"}>
        <ProfileAvatar address={props.address} profile={props.profile} />
      </Box>
      <Box>
        <Box variant={"participant.name"}>
          {props.profile.name} {props.profile.emoji}
        </Box>
        <Box variant={"participant.address"}>{props.address}</Box>
      </Box>
    </Flex>
  );
}

function ParticipantProfile(props: { address: string }) {
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
    return <KnownParticipantProfile profile={profile} address={props.address} />;
  } else {
    return <UnknownParticipantProfile address={props.address} />;
  }
}

export function ParticipantsTable(props: Props) {
  const renderRow = (participant: Participant) => {
    return (
      <tr key={participant.address}>
        <Styled.td>
          <ParticipantProfile address={participant.address} />
        </Styled.td>
        <TdNumeric>{TokenValue.toNumber(participant.shares)}</TdNumeric>
      </tr>
    );
  };

  const renderBody = () => {
    return props.participants.map(participant => {
      return renderRow(participant);
    });
  };

  return (
    <Styled.table>
      <thead>
        <tr>
          <Styled.th>Participant</Styled.th>
          <Styled.th>Shares</Styled.th>
        </tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </Styled.table>
  );
}
