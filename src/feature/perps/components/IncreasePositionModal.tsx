import * as React from "react";
import { InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { MIN_LEVERAGE, MIN_ORDER_COLLATERAL_USD, TOKEN_METADATA } from "../constants";
import type {
  CollateralMint,
  IncreaseFormState,
  PositionImpactMetrics,
} from "../types";
import { formatTokenAmount, normalizeDecimalInput, usdFormatter } from "../utils";
import { LeverageSlider } from "./LeverageSlider";

export interface IncreasePositionModalProps {
  open: boolean;
  mode: "open" | "increase";
  marketSymbol: string;
  hasLongPosition: boolean;
  hasShortPosition: boolean;
  form: IncreaseFormState;
  onFormChange: React.Dispatch<React.SetStateAction<IncreaseFormState>>;
  allowedInputMints: CollateralMint[];
  collateralGuidance: string | null;
  balancesLoading: boolean;
  inputWalletBalance: number | null;
  isLongSide: boolean;
  /** Initial leverage value for the slider's internal state. The slider renders the headline itself; the scanner traces this prop through useState for Figma. */
  defaultLeverage: number;
  /** Observer fired on every leverage change — parent can recompute preview values. */
  onLeverageChange?: (value: number) => void;
  leverageMarks: string[];
  maxLeverage: number;
  sizeUsdPreview: number | null;
  collateralLimitsError: string | null;
  status: string | null;
  loading: boolean;
  previewLoading: boolean;
  previewMetrics: PositionImpactMetrics | null;
  previewError: string | null;
  connected: boolean;
  canSubmit?: boolean;
  submitBlockedMessage?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
}

export function IncreasePositionModal({
  open,
  mode,
  marketSymbol,
  hasLongPosition,
  hasShortPosition,
  form,
  onFormChange,
  allowedInputMints,
  collateralGuidance,
  balancesLoading,
  inputWalletBalance,
  isLongSide,
  defaultLeverage,
  onLeverageChange,
  leverageMarks,
  maxLeverage,
  sizeUsdPreview,
  collateralLimitsError,
  status,
  loading,
  previewLoading,
  previewMetrics,
  previewError,
  connected,
  canSubmit = true,
  submitBlockedMessage,
  onSubmit,
  onClose,
  onOpenChange,
}: IncreasePositionModalProps) {
  const isOpenMode = mode === "open";
  const modalTitle = isOpenMode ? "Open position" : "Increase position";
  const modalOverview = isOpenMode
    ? `Open Position on ${marketSymbol} Market. Configure collateral, leverage and slippage. Preview shows estimated impact.`
    : `Increase Position on ${marketSymbol} Market. Configure collateral, leverage and slippage. Preview shows estimated impact.`;
  const inputTokenSymbol = TOKEN_METADATA[form.inputMint]?.symbol ?? "";
  const collateralAmountValue = Number(form.collateralAmount);
  const hasCollateralInput = Number.isFinite(collateralAmountValue) && collateralAmountValue > 0;
  const normalizedWalletBalance = Number.isFinite(inputWalletBalance ?? NaN) ? Number(inputWalletBalance) : 0;
  const hasInsufficientInputBalance =
    hasCollateralInput && !balancesLoading && collateralAmountValue > normalizedWalletBalance;
  const hasZeroInputBalance = !balancesLoading && normalizedWalletBalance <= 0;
  const collateralBalanceWarning = (() => {
    if (!hasCollateralInput && hasZeroInputBalance) {
      return `No ${inputTokenSymbol} wallet balance available.`;
    }
    if (!hasInsufficientInputBalance) return null;
    return `Collateral amount exceeds your ${inputTokenSymbol} wallet balance.`;
  })();

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
        onOpenChange(next);
      }}
    >
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>{modalTitle}</DialogTitle>
            {/* Mobile-only info popup. Wrapped in `sm:hidden` so the entire
                nested Dialog is removed from the tree at ≥sm, leaving a
                clean title row with just the DialogTitle. */}
            <div className="sm:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <InfoIcon className="h-4 w-4" />
                    <span className="sr-only">About increase</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>{modalTitle}</DialogTitle>
                    <DialogDescription>Overview</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2 text-sm">
                    <p>{modalOverview}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <DialogDescription className="hidden sm:block">{modalOverview}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            {!hasLongPosition && !hasShortPosition && (
              <div className="flex justify-center">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-background p-1 text-sm font-semibold shadow-sm">
                  <button
                    type="button"
                    aria-pressed={form.side === "long"}
                    onClick={() => onFormChange((prev) => ({ ...prev, side: "long" }))}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-5 py-2 transition-all duration-200",
                      form.side === "long"
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-[0_8px_16px_rgba(16,185,129,0.35)]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M13 7.828V20h-2V7.828L5.636 13.192 4.222 11.778 12 4l7.778 7.778-1.414 1.414L13 7.828Z" />
                    </svg>
                    Long / Buy
                  </button>
                  <button
                    type="button"
                    aria-pressed={form.side === "short"}
                    onClick={() => onFormChange((prev) => ({ ...prev, side: "short" }))}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-5 py-2 transition-all duration-200",
                      form.side === "short"
                        ? "bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-[0_8px_16px_rgba(244,63,94,0.35)]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M13 16.172 18.364 10.808l1.414 1.414L12 20 4.222 12.222 5.636 10.808 11 16.172V4h2v12.172Z" />
                    </svg>
                    Short / Sell
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4 rounded-2xl border bg-muted/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="min-w-0 truncate rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {marketSymbol} Market
                </span>
                <div className="flex shrink-0 items-center gap-2">
                  <Label htmlFor="inc-max-slippage" className="text-xs uppercase tracking-wide text-muted-foreground">
                    Max slippage (%)
                  </Label>
                  <Input
                    id="inc-max-slippage"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.maxSlippagePercent}
                    onChange={(event) =>
                      onFormChange((prev) => ({
                        ...prev,
                        maxSlippagePercent: normalizeDecimalInput(event.target.value),
                      }))
                    }
                    className="h-9 w-16 text-right sm:w-24"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border bg-background/80 p-4">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:items-center sm:gap-6">
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground">Input token</Label>
                  <Select
                    value={form.inputMint}
                    onValueChange={(value) => onFormChange((prev) => ({ ...prev, inputMint: value as CollateralMint }))}
                  >
                    <SelectTrigger className="h-11 min-w-[6.5rem] sm:w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {allowedInputMints.map((mint) => {
                        const meta = TOKEN_METADATA[mint];
                        if (!meta) return null;
                        return (
                          <SelectItem key={mint} value={mint}>
                            {meta.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="inc-collateral-amount"
                    className="text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Collateral amount
                  </Label>
                  <Input
                    id="inc-collateral-amount"
                    type="number"
                    min={MIN_ORDER_COLLATERAL_USD}
                    step="any"
                    placeholder="0.0"
                    value={form.collateralAmount}
                    onChange={(event) =>
                      onFormChange((prev) => ({
                        ...prev,
                        collateralAmount: normalizeDecimalInput(event.target.value),
                      }))
                    }
                    className={cn(
                      "h-12 w-full rounded-xl text-right text-base font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2",
                      isLongSide
                        ? "border border-emerald-500/40 bg-emerald-500/5 focus-visible:ring-emerald-500/30"
                        : "border border-rose-500/40 bg-rose-500/5 focus-visible:ring-rose-500/30"
                    )}
                  />
                  <p className="text-[11px] text-muted-foreground">
                    Min {MIN_ORDER_COLLATERAL_USD} USDC per order.
                  </p>
                  {collateralGuidance ? (
                    <p className="text-xs text-muted-foreground">{collateralGuidance}</p>
                  ) : null}
                  <div className="text-xs text-muted-foreground">
                    Wallet Balance:{" "}
                    {balancesLoading
                      ? "…"
                      : `${formatTokenAmount(inputWalletBalance ?? 0, TOKEN_METADATA[form.inputMint].decimals, 6)} ${inputTokenSymbol}`}
                  </div>
                </div>
              </div>
            </div>

            <LeverageSlider
              defaultValue={defaultLeverage}
              marks={leverageMarks}
              min={MIN_LEVERAGE}
              max={maxLeverage}
              step={0.1}
              onChange={onLeverageChange}
              showInput={false}
              inputPosition="after-children"
            >
              <p className="text-xs text-muted-foreground">
                Size preview: {sizeUsdPreview !== null ? usdFormatter.format(sizeUsdPreview) : "-"}
              </p>
            </LeverageSlider>

            {collateralLimitsError ? <p className="text-xs text-destructive">{collateralLimitsError}</p> : null}
            {collateralBalanceWarning ? <p className="text-xs text-amber-600 dark:text-amber-300">{collateralBalanceWarning}</p> : null}
            {!canSubmit && submitBlockedMessage ? (
              <p className="text-xs text-amber-700 dark:text-amber-300">{submitBlockedMessage}</p>
            ) : null}

            <div className="space-y-2">
              {status ? (
                <p className="text-xs text-muted-foreground" data-testid="increase-status">
                  {status}
                </p>
              ) : null}
              <div className="flex flex-wrap justify-end gap-2">
                <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading || !canSubmit || hasInsufficientInputBalance || hasZeroInputBalance}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60",
                    isLongSide
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-[0_8px_16px_rgba(16,185,129,0.35)] hover:brightness-105"
                      : "bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-[0_8px_16px_rgba(244,63,94,0.35)] hover:brightness-105"
                  )}
                >
                  {loading ? (
                    "Submitting…"
                  ) : isLongSide ? (
                    <>
                      <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M13 7.828V20h-2V7.828L5.636 13.192 4.222 11.778 12 4l7.778 7.778-1.414 1.414L13 7.828Z" />
                      </svg>
                      Long / Buy
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M13 16.172 18.364 10.808l1.414 1.414L12 20 4.222 12.222 5.636 10.808 11 16.172V4h2v12.172Z" />
                      </svg>
                      Short / Sell
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>

          <div className="space-y-3 rounded-2xl border bg-background/80 p-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-semibold">Position impact</h4>
                <p className="text-xs text-muted-foreground">Estimate how size, fees, and liquidation shift.</p>
              </div>
            </div>
            {previewLoading ? (
              <div className="space-y-3">
                <div className="h-4 w-32 animate-pulse rounded bg-muted-foreground/40" />
                <div className="h-4 w-24 animate-pulse rounded bg-muted-foreground/30" />
                <div className="h-24 animate-pulse rounded bg-muted-foreground/20" />
              </div>
            ) : previewMetrics ? (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase",
                      previewMetrics.quoteSide === "long"
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-rose-500/10 text-rose-600"
                    )}
                  >
                    {previewMetrics.quoteSide === "long" ? (
                      <svg viewBox="0 0 24 24" className="size-3" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M13 7.828V20h-2V7.828L5.636 13.192 4.222 11.778 12 4l7.778 7.778-1.414 1.414L13 7.828Z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="size-3" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M13 16.172 18.364 10.808l1.414 1.414L12 20 4.222 12.222 5.636 10.808 11 16.172V4h2v12.172Z" />
                      </svg>
                    )}
                    {previewMetrics.sideLabel} {previewMetrics.deltaTokenDisplay} {previewMetrics.tokenMeta.symbol}
                    <span className="ml-1 text-[11px] font-medium text-foreground/70">
                      @ {previewMetrics.markPriceDisplay ?? "-"}
                    </span>
                  </span>
                </div>
                <div className="my-1 h-px border-t border-dashed border-muted-foreground/30" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Entry price</p>
                    <p className="font-semibold">
                      {previewMetrics.entryBeforeDisplay
                        ? `${previewMetrics.entryBeforeDisplay} → ${previewMetrics.entryAfterDisplay ?? "-"}`
                        : previewMetrics.entryAfterDisplay ?? "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Liquidation price</p>
                    <p className="font-semibold">
                      {previewMetrics.liquidationBeforeDisplay
                        ? `${previewMetrics.liquidationBeforeDisplay} → ${previewMetrics.liquidationAfterDisplay ?? "-"}`
                        : previewMetrics.liquidationAfterDisplay ?? "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Δ Size</p>
                    <p className="font-semibold">
                      {previewMetrics.deltaTokenDisplay} {previewMetrics.tokenMeta.symbol}
                    </p>
                    <p className="text-xs text-muted-foreground">{previewMetrics.deltaUsdDisplay}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Projected size</p>
                    <p className="font-semibold">
                      {previewMetrics.totalTokenDisplay} {previewMetrics.tokenMeta.symbol}
                    </p>
                    <p className="text-xs text-muted-foreground">{previewMetrics.totalUsdDisplay}</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Slippage</p>
                    <p className="font-semibold">
                      {previewMetrics.slippageActualDisplay ?? "-"}
                      <span className="ml-2 text-xs text-muted-foreground">Max: {previewMetrics.maxSlippageDisplay}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Total fees</p>
                    <p className="font-semibold">{previewMetrics.totalFeesUsdDisplay}</p>
                    <p className="text-xs text-muted-foreground">
                      Borrow fees due: {previewMetrics.borrowFeesUsdDisplay}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 rounded-lg border border-dashed bg-background/60 p-3 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span>
                      Open fee {previewMetrics.openFeePercentDisplay ? `(${previewMetrics.openFeePercentDisplay})` : ""}
                    </span>
                    <span className="font-semibold">{previewMetrics.openFeeUsdDisplay}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>
                      Price impact{" "}
                      {previewMetrics.priceImpactPercentDisplay ? `(${previewMetrics.priceImpactPercentDisplay})` : ""}
                    </span>
                    <span className="font-semibold">{previewMetrics.priceImpactUsdDisplay}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Borrow fees due</span>
                    <span className="font-semibold">{previewMetrics.borrowFeesUsdDisplay}</span>
                  </div>
                  {previewMetrics.txFeeDisplay ? (
                    <div className="flex items-center justify-between gap-3">
                      <span>Transaction fee</span>
                      <span className="font-semibold">{previewMetrics.txFeeDisplay}</span>
                    </div>
                  ) : null}
                  {previewMetrics.rentDisplay ? (
                    <div className="flex items-center justify-between gap-3">
                      <span>Account rent</span>
                      <span className="font-semibold">{previewMetrics.rentDisplay}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {connected
                  ? "Adjust collateral or leverage to preview the updated position before submitting."
                  : "Connect your wallet and configure a position to preview the estimated impact."}
              </p>
            )}
            {previewError ? <p className="text-xs text-destructive">{previewError}</p> : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
