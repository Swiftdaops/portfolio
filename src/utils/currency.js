export const countryCurrencyMap = {
  US: { currency: "USD", price: 1000 },
  CA: { currency: "CAD", price: 1350 },
  AU: { currency: "AUD", price: 1500 },
  NG: { currency: "NGN", price: 1500000 },
};

export const formatCurrency = ({ price, currency }) => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    }).format(price);
  } catch (e) {
    return `${currency} ${price}`;
  }
};
