def firstUniqChar(s: str) -> int:
  for index, char in enumerate(s):
    if s.count(char, 0) == 1:
      return index
  return -1


def firstUniqueCharMap(s: str) -> int:
  map = {}
  for char in s:
    if char not in map.keys():
      map[char] = 1
    else:
      map[char] +=1
    # if else block can be simplified as
    # map[char] = map.get(char, 0) + 1

  # for key, value in map.items():
  #   if value == 1:
  #     return s.index(key)
  for i, char  in enumerate(s):
    if map[char] == 1:
      return i
  return -1

string = "leetcode"
print(firstUniqChar(string))
print(firstUniqueCharMap(string))