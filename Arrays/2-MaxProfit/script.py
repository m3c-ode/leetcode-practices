from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(1,len(prices)):
            if (prices[i] > prices[i-1]) :
                profit += (prices[i] - prices[i-1])
        return profit

solution = Solution()
test_case = [1,2,3,4,5]
print(solution.maxProfit(test_case))