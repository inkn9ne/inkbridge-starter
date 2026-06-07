import * as React from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface LeverageSliderProps {
  title?: string;
  display: string;
  sliderValue: number;
  min: number;
  max: number;
  step?: number;
  marks?: string[];
  disabled?: boolean;
  onAdjust?: (delta: number) => void;
  onSliderChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputId?: string;
  inputLabel?: string;
  inputValue?: string;
  inputMin?: number;
  inputMax?: number;
  inputStep?: string | number;
  inputPlaceholder?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputHelp?: React.ReactNode;
  showInput?: boolean;
  inputPosition?: "before-children" | "after-children";
  footer?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  children?: React.ReactNode;
}

export function LeverageSlider({
  title = "Leverage",
  display,
  sliderValue,
  min,
  max,
  step = 0.1,
  marks,
  disabled = false,
  onAdjust,
  onSliderChange,
  inputId,
  inputLabel = "Leverage",
  inputValue,
  inputMin,
  inputMax,
  inputStep = "0.1",
  inputPlaceholder,
  onInputChange,
  inputHelp,
  showInput = true,
  inputPosition = "after-children",
  footer,
  className,
  inputClassName,
  children,
}: LeverageSliderProps) {
  const shouldShowInput = showInput && Boolean(onInputChange);
  const inputRow = shouldShowInput ? (
    <div className="space-y-1">
      <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
        <Label htmlFor={inputId} className="text-xs uppercase tracking-wide text-muted-foreground">
          {inputLabel}
        </Label>
        <Input
          id={inputId}
          type="number"
          min={inputMin}
          max={inputMax}
          step={inputStep}
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={onInputChange}
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
          onClick={() => onAdjust?.(-0.1)}
          disabled={disabled || !onAdjust}
          className="h-9 w-9 rounded-full border border-muted-foreground/40 bg-background text-primary hover:bg-accent sm:h-10 sm:w-10"
        >
          <HiMinusSm className="size-4" />
        </Button>
        <div className="flex-1 text-center">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
          <p className="text-xl font-semibold sm:text-2xl">{display}</p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onAdjust?.(0.1)}
          disabled={disabled || !onAdjust}
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
        value={sliderValue}
        onChange={onSliderChange}
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
