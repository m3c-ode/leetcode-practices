const anagram = function (str1: string, str2: string) {
    if (str1.length !== str2.length) return false;
    // const newstr1 = str1.split('').sort().join('');
    // const newstr2 = str2.split('').sort().join('');
    return (str1.split('').sort().join('') === str2.split('').sort().join(''));
};

const anagram2 = function (str1: string, str2: string) {
    if (str1.length !== str2.length) return false;
    const map = new Map<string, number>();
    for (const char of str1) {
        map.set(char, !map.get(char) ? 1 : map.get(char)! + 1);
    }
    for (const char of str2) {
        map.set(char, map.get(char)! - 1);
    }
    for (const [char, occ] of map) {
        if (occ !== 0) return false;
    }
    return true;
};

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const map = new Map<string, number>();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
        // char.chaco;
    }
    console.log("🚀 ~ file: script.ts:7 ~ isAnagram ~ map", map);
    for (const char of t) {
        if (!map.get(char)) return false;
        map.set(char, map.get(char)! - 1);
    }
    return true;
};

function isAnagramBucket(s: string, t: string): boolean {
    // Using an array as a buckets
    if (s.length !== t.length) return false;
    let counts: number[] = [];
    for (const char of s) {
        let i = char.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    console.log('counts', counts);
    for (const char of t) {
        let i = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) {
            return false;
        }
        counts[i]--;
    }
    return true;
}

const s = "anagram", t = "nagaram";
console.log(anagram2(s, t));