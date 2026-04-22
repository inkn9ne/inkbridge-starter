import type { HTMLAttributes } from "react";
import clsx from "clsx";

export type SkeletonVariant = "rect" | "circle" | "text";

/**
 * Skeleton loader component for displaying placeholder content while data loads.
 *
 * Provides animated pulse effect with support for different shapes.
 * Use during initial page load or when fetching data.
 *
 * @example
 * ```tsx
 * <Skeleton className="w-24 h-24" variant="circle" />
 * <Skeleton className="w-full h-8" variant="rect" />
 * ```
 */
interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Shape variant of the skeleton */
  variant?: SkeletonVariant;
}

export function Skeleton(props: SkeletonProps) {
  const { className, variant = "rect", ...rest } = props;
  const radiusClass =
    variant === "circle" ? "rounded-full" : variant === "text" ? "rounded" : "rounded";

  return (
    <div
      aria-hidden="true"
      className={clsx("bg-gray-200 animate-pulse", radiusClass, className)}
      {...rest}
    />
  );
}

/**
 * SkeletonText component for displaying multiple text line placeholders.
 *
 * Automatically creates multiple skeleton lines with varying widths for
 * a more realistic loading state that mimics paragraph text.
 *
 * @example
 * ```tsx
 * <SkeletonText lines={4} />
 * <SkeletonText lines={2} widths={["full", "half"]} />
 * ```
 */
interface SkeletonTextProps {
  /** Number of skeleton lines to display */
  lines?: number;
  /** Container className */
  className?: string;
  /** className applied to each line */
  lineClassName?: string;
  /** Custom width pattern for lines (cycles through if lines > widths.length) */
  widths?: SkeletonTextWidth[];
}

const WIDTH_CLASSNAMES = {
  full: "w-full",
  half: "w-1/2",
  third: "w-1/3",
  twoThirds: "w-2/3",
} as const;

type SkeletonTextWidth = keyof typeof WIDTH_CLASSNAMES;

const DEFAULT_WIDTHS: SkeletonTextWidth[] = [
  "full",
  "twoThirds",
  "half",
  "third",
];

export function SkeletonText(props: SkeletonTextProps) {
  const { lines = 3, className, lineClassName, widths = DEFAULT_WIDTHS } = props;

  return (
    <div aria-hidden="true" className={clsx("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => {
        const width = widths[index % widths.length];

        return (
          <Skeleton
            key={index}
            variant="text"
            className={clsx("h-4", WIDTH_CLASSNAMES[width], lineClassName)}
          />
        );
      })}
    </div>
  );
}
