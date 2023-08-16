/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var l = 0;
  var r = 1;

  let maxP = 0;

  while (r < length(prices)) {
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      maxP = Math.max(prices[r] - prices[l], maxP);
    }
    r += 1;
  }
  return maxP;
};
