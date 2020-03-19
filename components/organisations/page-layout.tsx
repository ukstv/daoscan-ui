import React from "react";
import { OrganisationProps } from "./props";
import { PageHeader } from "./page-header";
import { Layout } from "../layout/layout.component";
import { PageMenu } from "./page-menu";

interface Props {
  organisation: OrganisationProps;
}

export function PageLayout(props: React.PropsWithChildren<Props>) {
  return (
    <Layout>
      <PageHeader organisation={props.organisation} />
      <PageMenu address={props.organisation.address} />
      {props.children}
    </Layout>
  );
}
