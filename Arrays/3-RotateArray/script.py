from typing import List

class Solution:
  def rotateByAdding(self, nums: List[int], k: int) -> None:
      """
      Do not return anything, modify nums in-place instead.
      """
      k = k % len(nums)
      rot_index = len(nums) - k
      new_start = nums[rot_index:]
      new_end = nums[:rot_index]
      nums[:k] = new_start
      nums[k:] = new_end
      # nums = new_start + new_end
      print('adding', nums)

  def rotateByPopping(self, nums: List[int], k: int) -> None:
    k = k % len(nums) #if k is bigger than the length of the array
    print("🚀 ~ k:", k)
    for i in range(k):
        nums.insert(0, nums.pop())
    print('popped', nums)


solution = Solution()
nums = [1,2,3,4,5,6,7]
k = 3
# solution.rotateByAdding(nums, k)
print(solution.rotateByAdding(nums, k))
print(solution.rotateByPopping(nums, k))
