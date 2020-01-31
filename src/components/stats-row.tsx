import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Card, Icon, Statistic } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "@emotion/styled";

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

const RowContainer = styled(Row)`
  margin-bottom: 1rem;
`;

export function StatsRow() {
  const { error, data } = useQuery(ORGANISATIONS_COUNT);

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
    <RowContainer>
      <Col md={3}>
        <Card size={"small"}>
          <Statistic title={"Organisations"} value={stats.organisationsCount} prefix={<Icon type={"home"} />} />
        </Card>
      </Col>
      <Col md={3}>
        <Card size={"small"}>
          <Statistic title={"Memberships"} value={stats.membershipsCount} prefix={<Icon type={"deployment-unit"} />} />
        </Card>
      </Col>
      <Col md={3}>
        <Card size={"small"}>
          <Statistic title={"Participants"} value={stats.participantsCount} prefix={<Icon type={"user"} />} />
        </Card>
      </Col>
      <Col md={3}>
        <Card size={"small"}>
          {/*<Statistic title={"Assets Under Management"} value={911} suffix={"$"} prefix={<Icon type={"bank"} />} />*/}
          <Statistic title={"Last Block Known"} value={stats.lastBlock} prefix={<Icon type={"vertical-align-top"} />} />
        </Card>
      </Col>
    </RowContainer>
  );
}
