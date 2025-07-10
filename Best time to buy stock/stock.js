function maxProfit(prices) {
  if (prices.length === 0) return 0; // Edge case: empty array

  let minPrice = prices[0]; // Assume first price is the cheapest
  let maxProfit = 0; // Start with 0 profit

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Check if current price is cheaper than minPrice
    if (currentPrice < minPrice) {
      minPrice = currentPrice; // Update minPrice
    } else {
      // Calculate profit if we sell today
      const profit = currentPrice - minPrice;
      // Update maxProfit if this profit is better
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
