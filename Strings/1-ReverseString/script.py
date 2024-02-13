from typing import List


class Solution:
  def reverseString(self, s: List[str]) -> None:
    """
    Do not return anything, modify s in-place instead.
    """
    i = 0
    j = len(s) -1
    # for i in len(s) / 2:
    while i < j:
      s[i], s[j] = s[j], s[i]
      j-=1
      i += 1


string = ["h","e","l","l","o"]
solution = Solution()
solution.reverseString(string)
print(string)

