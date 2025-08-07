export const formatNumberWithUnit = (
  price: number,
  { prefix, suffix }: Partial<{ prefix: string; suffix: string }>
) => {
  return [prefix, price.toLocaleString(), suffix].join("");
};

export const formatDate = (date: Date) => {
  return [
    date.getFullYear(),
    to2Digits(date.getMonth() + 1),
    to2Digits(date.getDate()),
  ].join("-");
};

export const formatPercentage = (rate: number, withUnit: boolean = false) => {
  return `${rate * 100}${withUnit ? "%" : ""}`;
};

const to2Digits = (n: number) => n.toString().padStart(2, "0");
