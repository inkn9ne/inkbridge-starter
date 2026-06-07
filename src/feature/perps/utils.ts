import { USD_DECIMALS } from "./constants";

function formatGroupedNumber(
  value: number,
  {
    minimumFractionDigits = 0,
    maximumFractionDigits = 4,
  }: { minimumFractionDigits?: number; maximumFractionDigits?: number } = {}
) {
  if (!Number.isFinite(value)) return "-";
  const sign = value < 0 ? "-" : "";
  const normalized = Math.abs(value).toLocaleString("en-US", {
    useGrouping: false,
    minimumFractionDigits,
    maximumFractionDigits,
  });
  const [whole = "0", fraction] = normalized.split(".");
  const groupedWhole = Number(whole).toLocaleString("en-US");
  return `${sign}${groupedWhole}${fraction ? `.${fraction}` : ""}`;
}

export const usdFormatter = {
  format(value: number) {
    if (!Number.isFinite(value)) return "-";
    const sign = value < 0 ? "-" : "";
    return `${sign}$${formatGroupedNumber(Math.abs(value), {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  },
};

function baseUnitsToNumber(value: string, decimals: number): number | null {
  if (!value) return null;
  if (!/^-?\d+$/.test(value)) return null;
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return num / 10 ** decimals;
}

export const resolveUsdNumber = (value?: string | null | number) => {
  if (value === undefined || value === null) return null;
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }
  if (value.includes(".")) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
  }
  const base = baseUnitsToNumber(value, USD_DECIMALS);
  if (base !== null) return base;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
};

export const formatUsd = (value?: string | null, fallback = "-") => {
  if (!value && value !== "0") return fallback;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return usdFormatter.format(numeric);
};

export const formatUsdFromBase = (value?: string | null) => {
  const num = resolveUsdNumber(value);
  return num === null ? "-" : usdFormatter.format(num);
};

export const formatTimestamp = (value?: string | number | null) => {
  if (value === undefined || value === null) return "-";
  const ms = typeof value === "string" ? Number(value) * 1000 : value * 1000;
  if (!Number.isFinite(ms)) return "-";
  return new Date(ms).toLocaleString();
};

const formatBaseUnitAmount = (
  value?: string | null,
  decimals = 6,
  fractionDigits = 4,
) => {
  const num = baseUnitsToNumber(value ?? "", decimals);
  if (num === null) return "-";
  return formatGroupedNumber(num, { maximumFractionDigits: fractionDigits });
};

export const formatTokenAmount = (
  value?: string | number | null,
  decimals = 6,
  fractionDigits = 4,
) => {
  if (value === undefined || value === null || value === "") return "-";
  if (typeof value === "string" && (value.includes(".") || value.toLowerCase().includes("e"))) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return "-";
    return formatGroupedNumber(numeric, { maximumFractionDigits: fractionDigits });
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) return "-";
    return formatGroupedNumber(value, { maximumFractionDigits: fractionDigits });
  }
  return formatBaseUnitAmount(value, decimals, fractionDigits);
};

export const normalizeDecimalInput = (value: string) => value?.replace(/,/g, ".") ?? value;
