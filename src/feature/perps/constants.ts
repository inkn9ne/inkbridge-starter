import type { CollateralMint } from "./types";

export const USD_DECIMALS = 6;
export const SOL_MINT = "So11111111111111111111111111111111111111112";
export const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
export const USDT_MINT = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
export const ETH_MINT = "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs";
export const BTC_MINT = "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh";

export const MIN_LEVERAGE = 1.1;
export const MIN_ORDER_COLLATERAL_USD = 10;

export const TOKEN_METADATA: Record<CollateralMint, { label: string; symbol: string; decimals: number }> = {
  [SOL_MINT]: { label: "SOL", symbol: "SOL", decimals: 9 },
  [ETH_MINT]: { label: "ETH", symbol: "ETH", decimals: 8 },
  [BTC_MINT]: { label: "BTC", symbol: "BTC", decimals: 8 },
  [USDC_MINT]: { label: "USDC", symbol: "USDC", decimals: 6 },
  [USDT_MINT]: { label: "USDT", symbol: "USDT", decimals: 6 },
};
