// Applying binary search algorithm
let binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1

    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);
        let value = nums[pivot];

        if (value === target) {
            return pivot;
        } else if (value < target) {
            left = pivot + 1;
        } else if (value > target) {
            right = pivot - 1;
        }
    }

    return -1
}

// Applying a linear search method using the JavaScript findIndex() function
let search = function (nums, target) {
    return nums.findIndex(num => num === target);
};