from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start_index, end_index = 0,len(nums) - 1
        while (start_index < end_index):
          middle = (start_index + end_index) // 2
          if target == nums[middle]: return middle
          # if left acending
          if nums[start_index] <= nums[middle]:
            #  and contains target
            if target < nums[middle]:
                # search left
              end_index = middle - 1
            else:
                # search right
              start_index = middle + 1

          else:
             if nums[middle + 1] <= target:
                # search right side
                start_index = middle + 1
             else:
                end_index = middle -1

        return -1




nums = [4,5,6,7,0,1,2]
target = 0
solution = Solution()
print(solution.search(nums, target))