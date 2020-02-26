import { PLATFORM } from "../../lib/platform";
import BigNumber from "bignumber.js";

export interface TokenValue {
  amount: string;
  decimals: number;
}

export namespace TokenValue {
  export function toNumber(value: TokenValue) {
    return new BigNumber(value.amount).div(10 ** value.decimals).toNumber();
  }
}

export interface BankItem {
  value: TokenValue;
}

export interface OrganisationWithBank {
  bank: BankItem[];
}

export interface OrganisationWithTotalSupply {
  totalSupply: TokenValue;
}

export interface OrganisationProps extends PureOrganisationProps, OrganisationWithBank, OrganisationWithTotalSupply {}

export interface PureOrganisationProps {
  address: string;
  platform: PLATFORM;
  name: string;
  participants: {
    totalCount: number;
  };
}
