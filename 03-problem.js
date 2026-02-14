function largestAndSmallestElem(arr) {
  let largest = arr[0], smallest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) largest = arr[i]
    if (smallest > arr[i]) smallest = arr[i]
  }

  return `Largest: ${largest}, Smallest: ${smallest}`
}

arr1 = [10, 20, 30]
arr2 = [5, 2, 9, 1, 7]
arr3 = [-5, -2, -9, -1, -7]
arr4 = [-3, 5, -8, 2, 0]
arr5 = [42]
arr6 = [3, 3, 3, 3]

console.log(largestAndSmallestElem(arr1))
console.log(largestAndSmallestElem(arr2))
console.log(largestAndSmallestElem(arr3))
console.log(largestAndSmallestElem(arr4))
console.log(largestAndSmallestElem(arr5))
console.log(largestAndSmallestElem(arr6))
