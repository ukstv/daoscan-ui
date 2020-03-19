import React from "react";
import { Box, Flex } from "@theme-ui/components";
import { OrganisationAvatar } from "../organisation-avatar/organisation-avatar.component";
import UserIcon from "../images/user.svg";
import ShareIcon from "../images/share.svg";
import BankIcon from "../images/bank.svg";
import styled from "@emotion/styled";
import { InlineStat } from "../stats/inline-stat.component";
import { BankItem, OrganisationProps, TokenValue } from "./props";
import { css } from "theme-ui";
import { BORDERS } from "../../theme/borders";

interface Props {
  organisation: OrganisationProps;
}

const Title = styled.h2(
  css({
    margin: 0
  })
);

const Address = styled.h3(
  css({
    margin: 0,
    fontWeight: "normal",
    fontSize: "0.8rem"
  })
);

const Stat = styled(InlineStat)(
  css({
    margin: 2
  })
);

const Container = styled(Flex)(
  css({
    borderBottom: BORDERS.bevel,
    padding: 2
  })
);

const AvatarContainer = styled.div(
  css({
    width: "4rem",
    height: "4rem",
    marginRight: 2
  })
);

function bankValue(bank: BankItem[]): number {
  const usdValues = bank.map(b => Number(b.value.amount) / 10 ** b.value.decimals);
  return usdValues.reduce((acc, v) => acc + v, 0);
}

export function PageHeader(props: Props) {
  return (
    <Container>
      <AvatarContainer>
        <OrganisationAvatar address={props.organisation.address} platform={props.organisation.platform} />
      </AvatarContainer>
      <div>
        <Title>{props.organisation.name}</Title>
        <Address>{props.organisation.address}</Address>
      </div>
      <Box>
        <Stat number={props.organisation.participants.totalCount} icon={<UserIcon />} title={"Participants"} />
        <Stat
          number={TokenValue.toNumber(props.organisation.totalSupply)}
          precision={0}
          icon={<ShareIcon />}
          title={"Shares"}
        />
        <Stat
          number={bankValue(props.organisation.bank)}
          numberPrefix={"$"}
          precision={0}
          icon={<BankIcon />}
          title={"Bank Value"}
        />
      </Box>
    </Container>
  );
}
