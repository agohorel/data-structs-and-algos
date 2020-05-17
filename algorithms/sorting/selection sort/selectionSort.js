const fs = require("fs");
const values = fs
  .readFileSync("values.txt", "utf8")
  .split(",")
  .map((n) => Number(n));

function selectionSort(values) {
  let smallestIndex;
  for (let i = 0; i < values.length; i++) {
    smallestIndex = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[smallestIndex]) {
        smallestIndex = j;
      }
      const temp = values[smallestIndex];
      values[smallestIndex] = values[i];
      values[i] = temp;
    }
  }
  return values;
}

const sortedList = selectionSort(values);
console.log(sortedList);
