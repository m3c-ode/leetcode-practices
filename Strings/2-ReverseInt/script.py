class Solution:
  def reverse(self, x:int) -> int:
    res = list(str(abs(x)))
    res.reverse()
    print('is it reversed?', res)
    rev_str = ''.join(res)
    print('after join', rev_str)
    if x < 0:
      return -1*int(rev_str)
    else:
      return int(rev_str)

  def reverseSlicingNotation(self, y:int) -> int:
    as_string = str(abs(y))[::-1]
    print('test', as_string)
    if y < 0:
      return -1*int(as_string)
    else:
      return int(as_string)



solution = Solution()
num = -123
# solution.reverse(num)
print(solution.reverse(num))
print(solution.reverseSlicingNotation(num))