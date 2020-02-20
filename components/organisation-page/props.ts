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

export interface OrganisationProps {
  address: string;
  platform: PLATFORM;
  name: string;
  participants: {
    totalCount: number;
  };
  totalSupply: TokenValue;
  bank: BankItem[];
}
