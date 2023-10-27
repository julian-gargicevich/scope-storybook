import { AssetFundDto } from "common/types/api";
import { format } from "date-fns";

const formatNegativeNumber = (value: number, formatted: string) => {
  if (value < 0) {
    const sanitzed = formatted.replace(/[-]/g, "");

    return `(${sanitzed})`;
  }
  return formatted;
};

export function millionFormatter(value?: number, fractionDigits = 1) {
  if (!value) return "-";

  const formatted = `$${(value / 1000000).toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })}m`;

  return formatNegativeNumber(value, formatted);
}

export function dollarFormatter(value?: number, fractionDigits = 0) {
  if (!value) return "-";

  const formatted = `$${value.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })}`;

  return formatNegativeNumber(value, formatted);
}

export function percentageFormatter(value?: number, fractionDigits = 2) {
  if (!value) return "-";

  const formatted = `${value.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })}%`;

  return formatNegativeNumber(value, formatted);
}

export function yearsFormatter(value?: number) {
  if (!value) return "-";

  const formatted = `${value.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })} Yrs`;

  return formatNegativeNumber(value, formatted);
}

export function monthsFormatter(value?: number) {
  if (!value) return "-";

  const formatted = `${value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  })} Mths`;

  return formatNegativeNumber(value, formatted);
}

export function sqmFormatter(value?: number) {
  if (!value) return "-";

  const formatted = `${value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  })} sqm`;

  return formatNegativeNumber(value, formatted);
}

export function formatDate(date?: string) {
  if (!date) return "-";

  return format(new Date(date), "MMM yy");
}

export function stringFormatter(value?: string) {
  if (!value) return "-";

  return value;
}

export function kiloWattFormatter(value?: number) {
  if (!value) return "-";

  const formatted = `${value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  })} kW`;

  return formatNegativeNumber(value, formatted);
}

export function numberFormatter(value?: number, fractionDigits = 0) {
  if (value === undefined || value === null) return "-";

  const formatted = value.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
  });

  return formatNegativeNumber(value, formatted);
}

export function validationFormatter({
  useSimpleValidation,
  useSimpleValidationAssetLevel,
}: {
  useSimpleValidation: boolean;
  useSimpleValidationAssetLevel: boolean;
}) {
  if (useSimpleValidation || useSimpleValidationAssetLevel) {
    return "Simple";
  }
  return "Full";
}

export function ownershipFormatter(assetFunds?: AssetFundDto[]) {
  if (!assetFunds || !assetFunds.length) return "-";

  return assetFunds
    .map((assetFund) => {
      return `${assetFund.fund?.code} - ${assetFund.ownership}%`;
    })
    .join(", ");
}

export function bpsFormatter(number?: number) {
  if (!number) {
    return "-";
  }
  const formatted = `${Math.abs(number).toLocaleString()} bps`;

  return formatNegativeNumber(number, formatted);
}

export function sizeFormatter(bytes?: number) {
  if (!bytes) return "-";

  const kb = Math.round(bytes / 1024);

  if (kb < 1024) {
    return `${kb.toLocaleString()} KB`;
  }

  const mb = kb / 1024;

  if (mb < 1024) {
    return `${mb.toLocaleString(undefined, {
      maximumFractionDigits: 1,
    })} MB`;
  }

  const gb = Math.round(mb / 1024);

  return `${gb.toLocaleString()} GB`;
}

export function yesNoFormatter(value?: boolean) {
  if (value === undefined || value === null) {
    return "-";
  }
  return value === true ? "Yes" : "No";
}

export type TooltipData<T> = {
  value: T;
  label?: string;
  formatter?: (value: T) => string;
};

export const tooltipFormatter = <T>(data: TooltipData<T>[]): string => {
  return data.reduce((result, curr) => {
    let formattedValue = "";

    if (curr?.formatter) {
      formattedValue = curr.formatter(curr.value);
    } else {
      formattedValue = curr.value?.toString() ?? "";
    }

    if (curr.label) formattedValue = `${curr.label} ${formattedValue}`;

    if (result === "") return formattedValue;
    else return `${result}, ${formattedValue}`;
  }, "");
};
