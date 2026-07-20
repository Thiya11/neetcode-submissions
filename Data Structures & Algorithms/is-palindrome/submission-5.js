class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let left = 0
        let right = s.length - 1

        const isAlphanumeric = (c) =>  {
        const charcode = c.charCodeAt(0);
        return (
            (charcode >= 48 && charcode <= 57) ||
            (charcode >= 65 && charcode <= 100) ||
            (charcode >= 97 && charcode <= 122)
        )}

        while(left < right) {
            while (left < right && !isAlphanumeric(s[left])) left++
            while (left < right && !isAlphanumeric(s[right])) right--

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left ++
            right --
        }

        return true

    }
}
