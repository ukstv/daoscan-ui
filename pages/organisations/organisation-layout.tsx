import React from "react";
import { OrganisationProps } from "./props";
import { OrganisationHeader } from "./organisation-header";
import { Box, Flex, Grid, NavLink } from "@theme-ui/components";
import Link from "next/link";
import { Layout } from "../../components/layout.component";
import { ActiveLink } from "../../components/active-link.component";
import styled from "@emotion/styled";

interface Props {
  organisation: OrganisationProps;
}

export function OrganisationLayout(props: React.PropsWithChildren<Props>) {
  return (
    <Layout>
      <OrganisationHeader organisation={props.organisation} />
      <Grid>
        <Flex>
          <Box>
            <ActiveLink
              href={`/organisations/[address]/proposals`}
              as={`/organisations/${props.organisation.address}/proposals`}
              passHref={true}
            >
              <NavLink variant={'pageNav'}>Proposals</NavLink>
            </ActiveLink>
          </Box>
          <Box>Participants</Box>
        </Flex>
      </Grid>
      {props.children}
    </Layout>
  );
}
