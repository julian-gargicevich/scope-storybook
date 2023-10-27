export const getInputNumberFormatter =
  (numberOfDecimals: number) => (value?: number) => {
    if (!value) {
      return "";
    }

    const [integerPart, decimalPart] = Number(value)
      .toFixed(numberOfDecimals)
      .split(".");

    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    if (decimalPart === undefined) {
      return `${formattedIntegerPart}`;
    }

    return !!decimalPart && Number(decimalPart)
      ? `${(Number(integerPart) + Number("0." + decimalPart)).toLocaleString()}`
      : formattedIntegerPart;
  };

export const integerInputFormatter = getInputNumberFormatter(0);

export const percentageInputFormatter = getInputNumberFormatter(2);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parserNumber = (value: any) => {
  return value!.replace(/\$\s?|(,*)/g, "");
};
