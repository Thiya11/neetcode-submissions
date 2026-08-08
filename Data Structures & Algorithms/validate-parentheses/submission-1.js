class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const closeToOpen = {")": "(", "}" : "{", "]": "["}

        for(const char of s) {
            if (char in closeToOpen) {
              if (stack && stack[stack.length - 1] == closeToOpen[char]) {
                stack.pop()
              } else {
                return false
              }
            } else {
                stack.push(char)
            }
        }
        return !stack.length 
    }
}
