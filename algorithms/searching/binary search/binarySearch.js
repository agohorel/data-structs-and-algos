const fs = require("fs");
const data = fs
  .readFileSync("values.txt", "utf8")
  .split(",")
  .map((x) => Number(x));

function binarySearch(values, target) {
  let low = 0;
  let mid = Math.floor(values.length / 2);
  let high = values.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const guess = values[mid];

    if (guess === target) {
      console.log(`Found ${guess} at index ${mid}!`);
      return guess;
    } else if (guess < target) {
      low = mid + 1;
    } else if (guess > target) {
      high = mid - 1;
    }
  }
  console.log("Value not found!");
  return false;
}

binarySearch(data, 1);
binarySearch(data, 99);
binarySearch(data, 1110);
