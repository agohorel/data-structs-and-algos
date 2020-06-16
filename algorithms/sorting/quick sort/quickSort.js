function quickSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  // pick a pivot
  const pivot = arr[0];
  // separate all items smaller or larger than pivot into separate arrays
  let smaller = [];
  let larger = [];

  // loop over all elems but skip the pivot (first element in our case)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      smaller.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }
  // sort smaller and larger arrays in place
  smaller = quickSort(smaller);
  larger = quickSort(larger);

  // return concat of smaller + pivot + larger
  return [...smaller, pivot, ...larger];
}

const values = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const result = quickSort(values);
console.log(result);
