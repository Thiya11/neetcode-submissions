class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let count = new Map()

        for(const i of s) {
           count.set(i, (count.get(i) || 0) + 1)
        }

        for(const j of t) {
            if (!count.has(j) || count.get(j) === 0) return false

            count.set(j, count.get(j) - 1)
        }

        return true

    }
}
