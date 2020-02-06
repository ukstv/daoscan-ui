import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Box, Grid } from "@theme-ui/components";
import { Statistic } from "./statistic.component";
import HomeIcon from "./home.icon.svg";
import DeploymentIcon from "./deployment.icon.svg";
import UserIcon from "./user.icon.svg";
import BlockIcon from './vertical-align-top.icon.svg'

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

  let stats = {
    organisationsCount: "~",
    participantsCount: "~",
    membershipsCount: "~",
    lastBlock: "~"
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
    <Grid columns={[1, 2, 4]}>
      <Box>
        <Statistic name={"Organisations"} value={stats.organisationsCount} icon={<HomeIcon />} />
      </Box>
      <Box>
        <Statistic name={"Memberships"} value={stats.membershipsCount} icon={<DeploymentIcon />} />
      </Box>
      <Box>
        <Statistic name={"Participants"} value={stats.participantsCount} icon={<UserIcon />} />
      </Box>
      <Box>
        <Statistic name={"Last Block Known"} value={stats.lastBlock} icon={<BlockIcon />} />
      </Box>
    </Grid>
  );
}
