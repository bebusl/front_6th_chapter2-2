export const isValidCouponCode = (code: string) => {
  const codeRegex = /[A-Z0-9]{4,12}/g;
  return !!code.match(codeRegex);
};

export const isValidStock = (stock: number) => {
  return stock > 0;
};

export const isValidPrice = (price: number) => {
  return price >= 0;
};

export const extractNumber = (value: string) => {
  return value.replace(/\D/g, ""); // 숫자가 아닌 문자 제거
};
