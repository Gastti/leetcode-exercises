let twoSum = function (nums, target) {
    let results = []

    for (number of nums) {
        console.log(number);
        for (let i = 0; i < nums.length; i++) {
            next = nums[i]
            if (nums.indexOf(number) !== nums.indexOf(next) && number + next === target) {
                results.push(nums.indexOf(number))
                results.push(nums.indexOf(next))
                return results
            }
        }
    }
};

console.log(twoSum([3,3], 6));