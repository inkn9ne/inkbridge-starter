import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

import { TOKEN_METADATA } from "../constants";
import type { CollateralMint, DecreaseFormState, PerpsPosition } from "../types";
import {
  formatTimestamp,
  formatUsd,
  formatUsdFromBase,
  normalizeDecimalInput,
  resolveUsdNumber,
  usdFormatter,
} from "../utils";

interface PositionOption {
  label: string;
  value: string;
}

export interface DecreasePositionModalProps {
  open: boolean;
  selectedPosition: PerpsPosition | null;
  form: DecreaseFormState;
  onFormChange: React.Dispatch<React.SetStateAction<DecreaseFormState>>;
  positionOptions: PositionOption[];
  onSelectPosition: (positionPubkey: string) => void;
  status: string | null;
  loading: boolean;
  canSubmit?: boolean;
  submitBlockedMessage?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

export function DecreasePositionModal({
  open,
  selectedPosition,
  form,
  onFormChange,
  positionOptions,
  onSelectPosition,
  status,
  loading,
  canSubmit = true,
  submitBlockedMessage,
  onSubmit,
  onClose,
}: DecreasePositionModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Decrease position</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-3">
              <div>
                <Label htmlFor="decrease-position">Select position</Label>
                <Select
                  value={form.positionPubkey}
                  onValueChange={(value) => {
                    if (value === "__none") return;
                    onSelectPosition(value);
                  }}
                >
                  <SelectTrigger id="decrease-position">
                    <SelectValue placeholder="Choose position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positionOptions.length ? (
                      positionOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="__none" disabled>
                        No open positions
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              {selectedPosition ? (
                <div className="space-y-2 rounded-lg border bg-muted/20 p-3 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Position</p>
                      <p className="text-base font-semibold">
                        {selectedPosition.side.toUpperCase()}{" "}
                        {TOKEN_METADATA[selectedPosition.marketMint]?.symbol ?? ""}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Updated {formatTimestamp(selectedPosition.updatedTime)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Unrealized PnL</p>
                      <p
                        className={cn(
                          "text-lg font-semibold",
                          (resolveUsdNumber(selectedPosition.pnlAfterFeesUsd) ?? 0) >= 0
                            ? "text-emerald-500"
                            : "text-rose-500"
                        )}
                      >
                        {formatUsd(selectedPosition.pnlAfterFeesUsd)}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Position value</p>
                      <p className="font-semibold">
                        {(() => {
                          const n =
                            (resolveUsdNumber(selectedPosition.collateralUsd) ?? 0) +
                            (resolveUsdNumber(selectedPosition.pnlAfterFeesUsd) ?? 0);
                          return usdFormatter.format(n);
                        })()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Collateral</p>
                      <p className="font-semibold">{formatUsdFromBase(selectedPosition.collateralUsd)}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-destructive">No open position is selected.</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="decrease-max-slippage">Max slippage (%)</Label>
                <Input
                  id="decrease-max-slippage"
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
                  className="h-9 text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="decrease-desired-mint">Receive collateral in</Label>
                <Select
                  value={form.desiredMint}
                  onValueChange={(value) =>
                    onFormChange((prev) => ({ ...prev, desiredMint: value as CollateralMint }))
                  }
                >
                  <SelectTrigger id="decrease-desired-mint">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(TOKEN_METADATA).map(([mint, meta]) => (
                      <SelectItem key={mint} value={mint}>
                        {meta.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 rounded-lg border bg-background/80 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">Close entire position</p>
                  <p className="text-xs text-muted-foreground">
                    Exit the position completely and settle remaining collateral.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "h-8 shrink-0 px-3 text-xs font-semibold uppercase",
                    form.entirePosition
                      ? selectedPosition?.side === "long"
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
                        : "border-rose-500 bg-rose-500/10 text-rose-600"
                      : ""
                  )}
                  onClick={() =>
                    onFormChange((prev) => ({ ...prev, entirePosition: !prev.entirePosition }))
                  }
                  aria-pressed={form.entirePosition}
                >
                  {form.entirePosition ? "Entire position" : "Partial close"}
                </Button>
              </div>
              {!form.entirePosition && (
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="decrease-size-usd">Reduce size (USD)</Label>
                    <Input
                      id="decrease-size-usd"
                      type="number"
                      min="0"
                      step="any"
                      placeholder="0.00"
                      value={form.sizeUsd}
                      onChange={(event) =>
                        onFormChange((prev) => ({
                          ...prev,
                          sizeUsd: normalizeDecimalInput(event.target.value),
                        }))
                      }
                      className="h-10 text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="decrease-collateral-usd">Withdraw collateral (USD)</Label>
                    <Input
                      id="decrease-collateral-usd"
                      type="number"
                      min="0"
                      step="any"
                      placeholder="0.00"
                      value={form.collateralUsd}
                      onChange={(event) =>
                        onFormChange((prev) => ({
                          ...prev,
                          collateralUsd: normalizeDecimalInput(event.target.value),
                        }))
                      }
                      className="h-10 text-right"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              {status ? (
                <p className="text-xs text-muted-foreground" data-testid="decrease-status">
                  {status}
                </p>
              ) : null}
              {!canSubmit && submitBlockedMessage ? (
                <p className="text-xs text-amber-700 dark:text-amber-300">{submitBlockedMessage}</p>
              ) : null}
              <div className="flex flex-wrap justify-end gap-2">
                <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading || !canSubmit || !selectedPosition}>
                  {loading ? (form.entirePosition ? "Closing…" : "Submitting…") : form.entirePosition ? "Close position" : "Submit decrease"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
