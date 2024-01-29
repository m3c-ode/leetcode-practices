/* Given a string s, find the length of the longest
substring
 without repeating characters. */

export function lengthOfLongestSubstring(s: string): number {
  let startIndex = 0;
  let longestLength = 0;
  while (startIndex < s.length) {
    let currentLength = 0;
    const set = new Set();
    for (let i = startIndex; i < s.length; i++) {
      const element = s[i];
      if (set.has(element)) {
        break;
      }
      set.add(element);
      currentLength++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    startIndex++;
  }
  return longestLength;
}

function getLongestSubstring(s: string): number {
  let i = 0,
    j = 0;
  let longestLength = 0;
  const set = new Set();
  while (i < s.length) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      i++;
      longestLength = Math.max(longestLength, set.size);
    } else {
      set.delete(s[j]);
      j++;
    }
  }
  return longestLength;
}

const input = "abcabcbb";
getLongestSubstring(input);
