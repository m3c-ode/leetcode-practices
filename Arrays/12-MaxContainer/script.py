from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        i = 0
        j = len(height) - 1
        while i < j:
            width = j - i
            current_area = min(height[i], height[j]) * width
            if current_area > max_area:
                max_area = current_area
            if height[i] < height[j]:
                i += 1
            else:
                j -=1
        return max_area

heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
solution = Solution()
print(solution.maxArea(heights))