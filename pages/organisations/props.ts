import { PLATFORM } from "../../lib/platform";

export interface TokenValue {
  amount: string;
  decimals: number;
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
