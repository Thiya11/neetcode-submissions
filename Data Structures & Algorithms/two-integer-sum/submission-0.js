class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0
        while (i < nums.length) {
            const intrim = target - nums[i]
            const j = nums.indexOf(intrim, i+1)
            if(j !== -1) {
                return [i, j]
            }
            i++
        }
    }
}
