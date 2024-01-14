/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

export function threeSum(nums: number[]): number[][] {
  // Set will allow us to have unique triplets
  const set = new Set();
  // Fix 1 number and 2sum problem on the rest
  let res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    // Target is what need to equal total 0
    const target = -nums[i];
    console.log("🚀 ~ threeSum ~ target:", target);
    const map = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      const element = nums[j];
      console.log("🚀 ~ threeSum ~ element:", element);
      const diff = target - element;
      console.log("🚀 ~ threeSum ~ diff:", diff);
      if (map.has(diff)) {
        const triplet = [nums[i], diff, element].sort();
        const key = triplet.join("");
        if (!set.has(key)) {
          set.add(key);
          console.log("🚀 ~ threeSum ~ set:", set);
          res.push(triplet);
          console.log("🚀 ~ threeSum ~ res:", res);
          continue;
        }
      }
      map.set(element, j);
    }
    console.log("🚀 ~ threeSum ~ map ", map, "after target", target);
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
