import React from "react";
import { Box, Flex, Grid } from "@theme-ui/components";
import { OrganisationAvatar } from "../organisation-avatar/organisation-avatar.component";
import UserIcon from "../images/user.svg";
import ShareIcon from "../images/share.svg";
import BankIcon from "../images/bank.svg";
import styled from "@emotion/styled";
import { InlineStat } from "../inline-stat.component";
import { BankItem, OrganisationProps, TokenValue } from "./props";

interface Props {
  organisation: OrganisationProps;
}

const OrganisationTitle = styled.h2`
  margin: 0;
`;

const OrganisationAddress = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 0.8rem;
`;

const Stat = styled(InlineStat)`
  margin: 10px;
`;

function bankValue(bank: BankItem[]): number {
  const usdValues = bank.map(b => Number(b.value.amount) / 10 ** b.value.decimals);
  return usdValues.reduce((acc, v) => acc + v, 0);
}

export function OrganisationHeader(props: Props) {
  return (
    <Grid>
      <Flex>
        <Box>
          <OrganisationAvatar address={props.organisation.address} platform={props.organisation.platform} />
        </Box>
        <Box>
          <OrganisationTitle>{props.organisation.name}</OrganisationTitle>
          <OrganisationAddress>{props.organisation.address}</OrganisationAddress>
        </Box>
        <Box>
          <Stat number={props.organisation.participants.totalCount} icon={<UserIcon />} title={"Participants"} />
          <Stat number={TokenValue.toNumber(props.organisation.totalSupply)} precision={0} icon={<ShareIcon />} title={"Shares"} />
          <Stat
            number={bankValue(props.organisation.bank)}
            numberPrefix={"$"}
            precision={0}
            icon={<BankIcon />}
            title={"Bank Value"}
          />
        </Box>
      </Flex>
    </Grid>
  );
}
