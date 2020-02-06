import React from "react";
import { Layout } from "antd";
import styled from "@emotion/styled";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Description } from "../components/description";
import { StatsRow } from "../components/stats-row";
import { GraphqlEditor } from "../components/graphql-editor";
import { Socials } from "./socials";

const Header = styled(Layout.Header)({
  background: "white"
});
const Content = styled(Layout.Content)({
  background: "white"
});
const Logo = styled.h1();

export function Welcome() {
  return (
    <Layout>
      <Header>
        <Grid>
          <Row>
            <Col sm={2}>
              <Logo>
                <span role={"img"}>🖇</span>️ daoscan
              </Logo>
            </Col>
            <Col sm={2} smOffset={8}>
              <Socials />
            </Col>
          </Row>
        </Grid>
      </Header>
      <Content>
        <Grid>
          <Row>
            <Col md={12}>
              <Description />
            </Col>
          </Row>
          <StatsRow />
          <Row>
            <Col xs={12}>
              <GraphqlEditor />
            </Col>
          </Row>
        </Grid>
      </Content>
    </Layout>
  );
}
