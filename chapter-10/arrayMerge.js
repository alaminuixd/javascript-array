function mergeArrays(array, merged = [], index = 0) {
  if (index === array.length) return merged;
  if (Array.isArray(array[index])) {
    mergeArrays(array[index], merged, 0);
  } else {
    merged.push(array[index]);
  }

  return mergeArrays(array, merged, index + 1); //
}
const arr1 = [
  [1, 3, 4, 5],
  [6, 7, 8, 9],
];
console.log(mergeArrays(arr1));
