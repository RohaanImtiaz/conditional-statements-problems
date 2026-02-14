function findLargest(nums) {
  let largest = 0;

  for (let i = 0; i < nums.length; i++)
    if (nums[i] > largest)
      largest = nums[i];
  
  return largest;
}

const nums1 = [10, 20, 30]
const nums2 = [10, 20, 30, 40, 50]
const nums3 = [50, 40, 30, 20, 10]

console.log(findLargest(nums1))
console.log(findLargest(nums2))
console.log(findLargest(nums3))
