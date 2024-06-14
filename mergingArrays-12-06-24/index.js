const arr1 = [2, 4, 3, 5, 4, 6];
const arr2 = [1, 2, 6, 5, 4, 6];
function removeDuplicates(arr1, arr2, arr) {
  arr = arr1.concat(arr2);
  let removedArray = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(removedArray.sort());
}
removeDuplicates(arr1, arr2);
