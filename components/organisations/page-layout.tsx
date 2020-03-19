import React from "react";
import { OrganisationProps } from "./props";
import { PageHeader } from "./page-header";
import { Layout } from "../layout/layout.component";
import { PageMenu } from "../navigation/page-menu";

interface Props {
  organisation: OrganisationProps;
}

export function PageLayout(props: React.PropsWithChildren<Props>) {
  const links = [
    {
      href: `/organisations/[address]`,
      as: `/organisations/${props.organisation.address}`,
      title: "Overview"
    },
    {
      href: `/organisations/[address]/proposals`,
      as: `/organisations/${props.organisation.address}/proposals`,
      title: "Proposals"
    },
    {
      href: `/organisations/[address]/participants`,
      as: `/organisations/${props.organisation.address}/participants`,
      title: "Participants"
    }
  ];

  return (
    <Layout>
      <PageHeader organisation={props.organisation} />
      <PageMenu links={links} />
      {props.children}
    </Layout>
  );
}
