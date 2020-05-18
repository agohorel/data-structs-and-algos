const fs = require('fs');
const values = fs
  .readFileSync('values.txt', 'utf8')
  .split(',')
  .map((x) => Number(x));

function insertionSort(values) {
  for (let i = 0; i < values.length; i++) {
    let current = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] > current) {
      values[j + 1] = values[j];
      j--;
    }
    values[j + 1] = current;
  }
  return values;
}

const sorted = insertionSort(values);
console.log(sorted);
