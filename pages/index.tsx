import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/layout.component";
import { Header } from "../components/header.component";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
