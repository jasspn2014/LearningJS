export const arr = [1, 5, 21, 39, 3, 17, 66, 88, 88, 2, 4, 11, 38, 8, 9];
export const user10 = {
  name : 'extras.js'
}
export function secondLargestNumber(arr) {
  let largest = Number.MIN_VALUE;
  let sLargest = Number.MIN_VALUE;
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    if (largest < arr[i]) {
      sLargest = largest;
      largest = arr[i];
    } else if (sLargest < arr[i]) {
      sLargest = arr[i];
    }
  }

  return sLargest;
}
