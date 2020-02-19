import React from "react";
import { OrganisationProps } from "./props";
import { OrganisationHeader } from "./header.component";
import { Layout } from "../layout.component";
import { Menu } from "./menu.component";

interface Props {
  organisation: OrganisationProps;
}

export function OrganisationLayout(props: React.PropsWithChildren<Props>) {
  return (
    <Layout>
      <OrganisationHeader organisation={props.organisation} />
      <Menu address={props.organisation.address} />
      {props.children}
    </Layout>
  );
}
