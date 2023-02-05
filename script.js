function threeSum(arr, target) {
  //your code here
	function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Number.MAX_VALUE;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closestSum;
}

}

module.exports = threeSum;
