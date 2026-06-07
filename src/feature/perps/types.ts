// Minimal perps domain types ported from greenhouse-app. Stripped down to
// the subset needed by inkbridge-starter's perps components — the production
// types in greenhouse cover automation rules, top-trader snapshots, pool
// info, etc. that aren't needed for storybook rendering.

export type PerpMarketMint = string;
export type StableMint = string;
export type CollateralMint = PerpMarketMint | StableMint;
export type PerpsSide = "long" | "short";

export interface PerpsPosition {
  positionPubkey: string;
  marketMint: PerpMarketMint;
  collateralMint: CollateralMint;
  side: PerpsSide;
  createdTime?: string | number | null;
  size: string;
  sizeTokenAmount: string;
  sizeUsdDelta: string;
  collateral: string;
  collateralUsd: string;
  leverage: string;
  entryPrice: string;
  markPrice: string;
  liquidationPrice: string;
  pnlBeforeFeesUsd: string;
  pnlAfterFeesUsd: string;
  pnlChangePctBeforeFees: string;
  pnlChangePctAfterFees: string;
  updatedTime: string;
}

export type DecreaseFormState = {
  positionPubkey: string;
  sizeUsd: string;
  collateralUsd: string;
  desiredMint: CollateralMint;
  maxSlippagePercent: string;
  entirePosition: boolean;
};

export type IncreaseFormState = {
  side: PerpsSide;
  collateralAmount: string;
  sizeUsd: string;
  leverage: string;
  maxSlippagePercent: string;
  inputMint: CollateralMint;
};

export interface PositionImpactMetrics {
  tokenMeta: { symbol: string; decimals: number };
  sideLabel: string;
  accentClass: string;
  quoteSide: PerpsSide;
  deltaTokenDisplay: string;
  totalTokenDisplay: string;
  deltaUsdDisplay: string;
  totalUsdDisplay: string;
  entryBeforeDisplay: string | null;
  entryAfterDisplay: string | null;
  markPriceDisplay: string | null;
  liquidationBeforeDisplay: string | null;
  liquidationAfterDisplay: string | null;
  slippageActualDisplay: string | null;
  maxSlippageDisplay: string;
  openFeeUsdDisplay: string;
  openFeePercentDisplay: string | null;
  priceImpactUsdDisplay: string;
  priceImpactPercentDisplay: string | null;
  borrowFeesUsdDisplay: string;
  totalFeesUsdDisplay: string;
  txFeeDisplay: string | null;
  rentDisplay: string | null;
}
