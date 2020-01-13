import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Card, Icon, Statistic } from "antd";

export function StatsRow() {
  return (
    <Row>
      <Col md={3}>
        <Card size={"small"}>
          <Statistic title={"Organisations"} value={911} prefix={<Icon type={"home"} />} />
        </Card>
      </Col>
      <Col md={3}>
        <Card size={"small"}>
          <Statistic title={"Memberships"} value={911} prefix={<Icon type={"deployment-unit"} />} />
        </Card>
      </Col>
      <Col md={3}>
        <Card size={"small"}><Statistic title={"Participants"} value={911} prefix={<Icon type={"user"} />} /></Card>
      </Col>
      <Col md={3}>
        <Card size={"small"}>
          <Statistic title={"Assets Under Management"} value={911} suffix={'$'} prefix={<Icon type={"bank"} />} />
          </Card>
      </Col>
    </Row>
  );
}
