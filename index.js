var twoSum = function (nums, target) {
  let _i = nums.length - 1
  for (_i; _i >= 0; _i--) {
    // 下标处理,与自身相同则跳过一次循环
    for (let _j = _i - 1; _j >= 0; _j--) {
      if (nums[_j] + nums[_i] === target) {
        // 找到了,直接返回
        return [_i, _j]
      }
    }
  }
  return []
}

// const res = twoSum([1, 3], 4)
// const res = twoSum([2, 7, 11, 15], 9)
const res = twoSum([2, 2], 4)
console.log(res)
