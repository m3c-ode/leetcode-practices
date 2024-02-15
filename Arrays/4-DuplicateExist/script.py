from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.index()
        nums_set = set(nums)
        if len(nums) != len(nums_set):
            return True
        return False

