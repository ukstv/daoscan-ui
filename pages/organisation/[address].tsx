import React from "react";
import { Layout } from "../../components/layout.component";
import { Box, Flex, Grid } from "@theme-ui/components";
import styled from "@emotion/styled";
import { withApollo } from "../../lib/apollo";
import { NextPage } from "next";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { OrganisationAvatar } from "../../components/organisation-avatar/organisation-avatar.component";
import { PLATFORM } from "../../lib/platform";
import { InlineStat } from "../../components/inline-stat.component";

import UserIcon from "./user.svg";
import ShareIcon from "./share.svg";
import BankIcon from "./bank.svg";
import BigNumber from "bignumber.js";

const OrganisationTitle = styled.h2`
  margin: 0;
`;

const OrganisationAddress = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 0.8rem;
`;

interface Value {
  amount: string;
  decimals: number;
}

interface BankItem {
  value: Value;
}

interface OrganisationQuery {
  organisation: {
    name: string;
    platform: PLATFORM;
    participants: {
      totalCount: number;
    };
    totalSupply: Value;
    bank: BankItem[];
  };
}

const ORGANISATION_QUERY = gql`
  query GetOrganisation($address: String!) {
    organisation(address: $address) {
      name
      platform
      participants {
        totalCount
      }
      totalSupply {
        amount
        decimals
      }
      bank {
        value(symbol: "USD") {
          amount
          decimals
        }
      }
    }
  }
`;

function bankValue(bank: BankItem[]): number {
  const usdValues = bank.map(b => Number(b.value.amount) / 10 ** b.value.decimals);
  return usdValues.reduce((acc, v) => acc + v, 0);
}

function asNumber(value: Value) {
  return new BigNumber(value.amount).div(10 ** value.decimals).toNumber();
}

const Stat = styled(InlineStat)`
  margin: 10px;
`;

export const OrganisationPage: NextPage<{ address: string }> = props => {
  const { error, data } = useQuery<OrganisationQuery>(ORGANISATION_QUERY, {
    variables: { address: props.address }
  });

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  if (data) {
    return (
      <Layout>
        <Grid>
          <Flex>
            <Box>
              <OrganisationAvatar address={props.address} platform={data.organisation.platform} />
            </Box>
            <Box>
              <OrganisationTitle>{data.organisation.name}</OrganisationTitle>
              <OrganisationAddress>{props.address}</OrganisationAddress>
            </Box>
            <Box>
              <Stat number={data.organisation.participants.totalCount} icon={<UserIcon />} title={"Participants"} />
              <Stat number={asNumber(data.organisation.totalSupply)} precision={0} icon={<ShareIcon />} title={"Shares"} />
              <Stat
                number={bankValue(data.organisation.bank)}
                numberPrefix={"$"}
                precision={0}
                icon={<BankIcon />}
                title={"Bank Value"}
              />
            </Box>
          </Flex>
        </Grid>
        <p>Organisation {props.address}</p>
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

OrganisationPage.getInitialProps = async context => {
  const address = (context.query.address as string).toLowerCase();
  return { address };
};

export default withApollo(OrganisationPage);
