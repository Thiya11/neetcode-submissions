class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let profit = 0

       while(right < prices.length) {
         if (prices[left] < prices[right]) {
            let curr = prices[right] - prices[left]
            profit = Math.max(profit, curr)
         } else {
            left = right
         }
         right += 1
       }
        return profit
    }
}
