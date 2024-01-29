// Import the function to test

import { lengthOfLongestSubstring } from "./script";

describe("lengthOfLongestSubstring function", () => {
  it('should return 3 for the input "abcabcbb"', () => {
    // Input
    const s = "abcabcbb";
    // Expected output
    const expected = 3;
    // Assertion
    expect(lengthOfLongestSubstring(s)).toEqual(expected);
  });

  it('should return 1 for the input "bbbbb"', () => {
    // Input
    const s = "bbbbb";
    // Expected output
    const expected = 1;
    // Assertion
    expect(lengthOfLongestSubstring(s)).toEqual(expected);
  });

  it('should return 3 for the input "pwwkew"', () => {
    // Input
    const s = "pwwkew";
    // Expected output for "wke"
    const expected = 3;
    // Assertion
    expect(lengthOfLongestSubstring(s)).toEqual(expected);
  });
});
