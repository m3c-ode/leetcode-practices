from typing import List


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
      max_candies = max(candies)
      result = [(candy + extraCandies) >= max_candies for candy in candies]
      return result

solution = Solution()
candies = [2,3,5,1,3]
extra = 3
print(solution.kidsWithCandies(candies, extra))
