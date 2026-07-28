import * as React from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface LeverageSliderProps {
  /** Initial slider value. Also drives the headline display in Figma — the scanner traces `useState(defaultValue)` and substitutes the value into `{value}x` for static rendering. */
  defaultValue?: number;
  /** Fires every time the value changes (slider drag, +/- buttons, input). */
  onChange?: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  /** Step applied per −/+ button click. Defaults to `step`. */
  adjustStep?: number;
  marks?: string[];
  disabled?: boolean;
  inputId?: string;
  inputLabel?: string;
  inputHelp?: React.ReactNode;
  inputPlaceholder?: string;
  showInput?: boolean;
  inputPosition?: "before-children" | "after-children";
  footer?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  children?: React.ReactNode;
}

export function LeverageSlider({
  defaultValue,
  onChange,
  min,
  max,
  step = 0.1,
  adjustStep,
  marks,
  disabled = false,
  inputId,
  inputLabel = "Leverage",
  inputHelp,
  inputPlaceholder,
  showInput = false,
  inputPosition = "after-children",
  footer,
  className,
  inputClassName,
  children,
}: LeverageSliderProps) {
  const [value, setValue] = React.useState<number>(defaultValue ?? min);
  const effectiveAdjustStep = adjustStep ?? step;

  const updateValue = (next: number): void => {
    const clamped = Math.min(max, Math.max(min, next));
    setValue(clamped);
    onChange?.(clamped);
  };

  const handleAdjust = (delta: number): void => updateValue(value + delta);
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const next = Number(event.target.value);
    if (!Number.isNaN(next)) updateValue(next);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const next = Number(event.target.value);
    if (!Number.isNaN(next)) updateValue(next);
  };

  const inputRow = showInput ? (
    <div className="space-y-1">
      <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
        <Label htmlFor={inputId} className="text-xs uppercase tracking-wide text-muted-foreground">
          {inputLabel}
        </Label>
        <Input
          id={inputId}
          type="number"
          min={min}
          max={max}
          step={step}
          placeholder={inputPlaceholder}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          className={cn("h-8 w-24 text-right sm:h-9", inputClassName)}
        />
      </div>
      {inputHelp ? <p className="text-xs text-muted-foreground">{inputHelp}</p> : null}
    </div>
  ) : null;

  return (
    <div className={cn("space-y-3 rounded-2xl border bg-background/80 p-3 sm:space-y-4 sm:p-4", className)}>
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => handleAdjust(-effectiveAdjustStep)}
          disabled={disabled}
          className="h-9 w-9 rounded-full border border-muted-foreground/40 bg-background text-primary hover:bg-accent sm:h-10 sm:w-10"
        >
          <HiMinusSm className="size-4" />
        </Button>
        <div className="flex-1 text-center">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Leverage</p>
          <p className="text-xl font-semibold sm:text-2xl">{value}x</p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => handleAdjust(effectiveAdjustStep)}
          disabled={disabled}
          className="h-9 w-9 rounded-full border border-muted-foreground/40 bg-background text-primary hover:bg-accent sm:h-10 sm:w-10"
        >
          <HiPlusSm className="size-4" />
        </Button>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        disabled={disabled}
        className="w-full accent-primary"
      />
      {marks && marks.length > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase text-muted-foreground">
          {marks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      ) : null}
      {footer ? (
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          {footer}
        </div>
      ) : null}
      {inputPosition === "before-children" ? inputRow : null}
      {children}
      {inputPosition === "after-children" ? inputRow : null}
    </div>
  );
}
