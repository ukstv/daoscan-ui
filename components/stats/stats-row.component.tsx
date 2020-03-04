import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "@theme-ui/components";
import { Statistic } from "./statistic.component";
import HomeIcon from "../images/home.icon.svg";
import DeploymentIcon from "../images/deployment.icon.svg";
import UserIcon from "../jazzicon/user.icon.svg";
import BlockIcon from "../jazzicon/vertical-align-top.icon.svg";

const ORGANISATIONS_COUNT = gql`
  query {
    stats {
      organisationsCount
      participantsCount
      membershipsCount
      lastBlock
    }
  }
`;

export function StatsRow() {
  const { error, data } = useQuery(ORGANISATIONS_COUNT, { pollInterval: 10000 });

  let stats: { [k: string]: string | number | undefined } = {
    organisationsCount: undefined,
    participantsCount: undefined,
    membershipsCount: undefined,
    lastBlock: undefined
  };

  if (error) {
    stats.organisationsCount = "N/A";
    stats.participantsCount = "N/A";
    stats.membershipsCount = "N/A";
    stats.lastBlock = "N/A";
  }

  if (data) {
    stats = data.stats;
  }

  return (
    <Grid variant={"condensed"} columns={[2, 2, 4]}>
      <Statistic name={"Organisations"} value={stats.organisationsCount} icon={<HomeIcon />} />
      <Statistic name={"Memberships"} value={stats.membershipsCount} icon={<DeploymentIcon />} />
      <Statistic name={"Participants"} value={stats.participantsCount} icon={<UserIcon />} />
      <Statistic name={"Last Block Known"} value={stats.lastBlock} icon={<BlockIcon />} />
    </Grid>
  );
}
