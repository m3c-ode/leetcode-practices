/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices: number[]) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    console.log('profit', profit);
    return profit;
};

const prices = [3, 2, 7, 1];
const profit = maxProfit(prices);