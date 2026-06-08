"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { DecreasePositionModal } from "@/feature/perps/components/DecreasePositionModal";
import { IncreasePositionModal } from "@/feature/perps/components/IncreasePositionModal";
import type {
  DecreaseFormState,
  IncreaseFormState,
  PerpsPosition,
  PositionImpactMetrics,
} from "@/feature/perps/types";

// Sample data for the docs preview only. It mirrors the Storybook fixtures but
// is kept separate on purpose: the docs must not couple to the scanner's story
// args (the modals are fully controlled, so a live preview needs real state).

const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const USDT_MINT = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";

const SAMPLE_POSITION: PerpsPosition = {
  positionPubkey: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef",
  marketMint: "So11111111111111111111111111111111111111112",
  collateralMint: USDC_MINT,
  side: "long",
  createdTime: "2026-05-17T15:42:18Z",
  size: "2500000000",
  sizeTokenAmount: "12500000000",
  sizeUsdDelta: "0",
  collateral: "500000000",
  collateralUsd: "500000000",
  leverage: "5",
  entryPrice: "172800000000",
  markPrice: "175200000000",
  liquidationPrice: "138240000000",
  pnlBeforeFeesUsd: "120000000",
  pnlAfterFeesUsd: "118500000",
  pnlChangePctBeforeFees: "4.8",
  pnlChangePctAfterFees: "4.74",
  updatedTime: "2026-05-21T18:42:00Z",
};

const PREVIEW_METRICS: PositionImpactMetrics = {
  tokenMeta: { symbol: "SOL", decimals: 9 },
  sideLabel: "Long",
  accentClass: "text-emerald-600",
  quoteSide: "long",
  deltaTokenDisplay: "1.4500",
  totalTokenDisplay: "1.4500",
  deltaUsdDisplay: "$250.00",
  totalUsdDisplay: "$250.00",
  entryBeforeDisplay: null,
  entryAfterDisplay: "$172.41",
  markPriceDisplay: "$172.41",
  liquidationBeforeDisplay: null,
  liquidationAfterDisplay: "$138.92",
  slippageActualDisplay: "0.12 %",
  maxSlippageDisplay: "1 %",
  openFeeUsdDisplay: "$0.25",
  openFeePercentDisplay: "0.10 %",
  priceImpactUsdDisplay: "$0.05",
  priceImpactPercentDisplay: "0.02 %",
  borrowFeesUsdDisplay: "$0.00",
  totalFeesUsdDisplay: "$0.30",
  txFeeDisplay: "$0.0001",
  rentDisplay: null,
};

export function DecreaseModalDemo() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState<DecreaseFormState>({
    positionPubkey: SAMPLE_POSITION.positionPubkey,
    sizeUsd: "",
    collateralUsd: "",
    desiredMint: USDC_MINT,
    maxSlippagePercent: "1",
    entirePosition: false,
  });

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open decrease modal
      </Button>
      <DecreasePositionModal
        open={open}
        selectedPosition={SAMPLE_POSITION}
        form={form}
        onFormChange={setForm}
        positionOptions={[
          { label: "LONG SOL · 5x · 2,500 USDC", value: SAMPLE_POSITION.positionPubkey },
        ]}
        onSelectPosition={() => undefined}
        status={null}
        loading={false}
        onSubmit={(e) => e.preventDefault()}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export function IncreaseModalDemo() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState<IncreaseFormState>({
    side: "long",
    collateralAmount: "100",
    sizeUsd: "",
    leverage: "5",
    maxSlippagePercent: "1",
    inputMint: USDC_MINT,
  });

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open increase modal
      </Button>
      <IncreasePositionModal
        open={open}
        mode="open"
        marketSymbol="SOL"
        hasLongPosition={false}
        hasShortPosition={false}
        form={form}
        onFormChange={setForm}
        allowedInputMints={[USDC_MINT, USDT_MINT]}
        collateralGuidance={null}
        balancesLoading={false}
        inputWalletBalance={1250.5}
        isLongSide
        defaultLeverage={5}
        leverageMarks={["1x", "5x", "10x", "25x", "50x"]}
        maxLeverage={50}
        sizeUsdPreview={500}
        collateralLimitsError={null}
        status={null}
        loading={false}
        previewLoading={false}
        previewMetrics={PREVIEW_METRICS}
        previewError={null}
        connected
        onSubmit={(e) => e.preventDefault()}
        onClose={() => setOpen(false)}
        onOpenChange={setOpen}
      />
    </>
  );
}
