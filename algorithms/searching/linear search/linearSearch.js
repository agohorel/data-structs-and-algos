const fs = require("fs");
const values = fs
  .readFileSync("values.txt", "utf8")
  .split(",")
  .map((x) => Number(x));

function linearSearch(values, target) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === target) {
      console.log(`Found ${target} at index ${i}!`);
      return i;
    }
  }
  console.log("Value not found!");
  return false;
}

linearSearch(values, 1);
linearSearch(values, 99);
linearSearch(values, 1110);
