let twoSum = function (nums, target) {
    let prev;
    let next;
    let results = []

    for (let i = 0; i < nums.length; i++) {
        prev = nums[i]
        for (let j = 0; j < nums.length; j++) {
            next = nums[j]
            if (nums.indexOf(prev) !== nums.indexOf(next) && prev + next === target) {
                results.push(nums.indexOf(prev))
                results.push(nums.indexOf(next))
            }
        }
    }
    return results
};

console.log(twoSum([2, 7, 11, 15], 9));