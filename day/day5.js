// ❌ Code sẽ bị ESLint báo lỗi
const calculateTotal = function (prices, taxRate) {
  let subtotal = 0;
  for (let i = 0; i < prices.length; i++) {
    subtotal += prices[i];
  }
  return subtotal * (1 + taxRate);
};