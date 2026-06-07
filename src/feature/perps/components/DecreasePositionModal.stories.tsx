import type { Meta, StoryObj } from "@storybook/react";
import { DecreasePositionModal } from "./DecreasePositionModal";

const meta = {
  title: "Feature/Perps/DecreasePositionModal",
  component: DecreasePositionModal,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DecreasePositionModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// DecreasePositionModal is a presentational component — the form state and
// selectedPosition come from a state container at runtime. Stories pass
// everything inline so the Inkbridge plugin scanner reads literal values
// without modelling React state.

export const Default: Story = {
  args: {
    open: true,
    selectedPosition: {
      positionPubkey: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef",
      marketMint: "So11111111111111111111111111111111111111112",
      collateralMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
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
    },
    form: {
      positionPubkey: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef",
      sizeUsd: "",
      collateralUsd: "",
      desiredMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      maxSlippagePercent: "1",
      entirePosition: false,
    },
    onFormChange: () => undefined,
    positionOptions: [
      { label: "LONG SOL · 5x · 2,500 USDC", value: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef" },
    ],
    onSelectPosition: () => undefined,
    status: null,
    loading: false,
    onSubmit: () => undefined,
    onClose: () => undefined,
  },
};

export const EntirePositionToggled: Story = {
  args: {
    open: true,
    selectedPosition: {
      positionPubkey: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef",
      marketMint: "So11111111111111111111111111111111111111112",
      collateralMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
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
    },
    form: {
      positionPubkey: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef",
      sizeUsd: "",
      collateralUsd: "",
      desiredMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      maxSlippagePercent: "1",
      entirePosition: true,
    },
    onFormChange: () => undefined,
    positionOptions: [
      { label: "LONG SOL · 5x · 2,500 USDC", value: "Pos1AbcDefGhiJklMnoPqrStuVwxYz1234567890abcdef" },
    ],
    onSelectPosition: () => undefined,
    status: null,
    loading: false,
    onSubmit: () => undefined,
    onClose: () => undefined,
  },
};

export const NoPositionSelected: Story = {
  args: {
    open: true,
    selectedPosition: null,
    form: {
      positionPubkey: "",
      sizeUsd: "",
      collateralUsd: "",
      desiredMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      maxSlippagePercent: "1",
      entirePosition: false,
    },
    onFormChange: () => undefined,
    positionOptions: [],
    onSelectPosition: () => undefined,
    status: null,
    loading: false,
    onSubmit: () => undefined,
    onClose: () => undefined,
  },
};
