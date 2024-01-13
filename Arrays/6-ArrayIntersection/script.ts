/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1: number[], nums2: number[]) {
    let intersection: number[] = [];
    if (nums1.length <= nums2.length) {
        for (const num of nums1) {
            console.log("🚀 ~ file: script.ts:10 ~ intersect ~ num", num);
            console.log("🚀 ~ file: script.ts:12 ~ intersect ~ nums2.includes(num)", nums2.includes(num));
            if (nums2.includes(num)) {
                intersection.push(num);
                nums2.splice(nums2.indexOf(num), 1);
            }
        }
    } else {
        for (const num of nums2) {
            if (nums1.includes(num)) {
                intersection.push(num);
                nums1.splice(nums1.indexOf(num), 1);
            }
        }
    }
    return intersection;
};

var intersect2 = function (nums1: number[], nums2: number[]) {
    var map: any = {};
    var result: number[] = [];
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = (map[nums1[i]] || 0) + 1;
        console.log("🚀 ~ file: script.ts:33 ~ intersect2 ~ map", map);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] > 0) {
            map[nums2[i]]--;
            result.push(nums2[i]);
        }
    }
    return result;
};

const nums1 = [9, 3, 7];
const nums2 = [6, 4, 1, 0, 0, 4, 4, 8, 7];

const result = intersect(nums1, nums2);
console.log("🚀 ~ file: script.ts:28 ~ result", result);
