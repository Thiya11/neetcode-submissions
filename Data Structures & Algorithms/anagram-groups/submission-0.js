class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [[strs[0]]]
        const map = new Map()
        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0)

            for (const char of strs[i]) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index] ++
            }
            const key = count.join("#")

            if (map.has(key)) {
                map.get(key).push(strs[i])
            } else {
                map.set(key, [strs[i]])
            }
        }
        return [...map.values()]
    }
}
