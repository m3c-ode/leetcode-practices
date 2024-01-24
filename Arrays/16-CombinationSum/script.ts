/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/
// Backtracking will be used
function combinationSum(candidates: number[], target: number): number[][] {
  if (target === 1) return [];
  let res: number[][] = [];

  function testCandidate(
    startIndex: number,
    target: number,
    currentCombination: number[]
  ) {
    // Base case
    if (target === 0) {
      res.push([...currentCombination]);
      return;
    }

    if (target < 0) return;

    // Recursive case
    for (let index = startIndex; index < candidates.length; index++) {
      const candidate = candidates[index];
      currentCombination.push(candidate);

      testCandidate(index, target - candidate, currentCombination);

      // Remove last combination to test with others
      currentCombination.pop();
    }
  }

  testCandidate(0, target, []);
  return res;
}

console.log(combinationSum([2, 3, 6, 7], 7));
