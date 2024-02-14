from typing import List


def removeDuplicates (nums: List[int]) -> int:
  unique_nums = set(nums)
  for index, num in enumerate(unique_nums):
    nums[index] = num
  return len(unique_nums)

def removeDuplicates1 (nums: List[int]) -> int:
  j = 1
  for i in range(1, len(nums)):
    if nums[i] != nums[i-1]:
      nums[j] = nums[i]
      j += 1
  return j + 1



test = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates1(test))