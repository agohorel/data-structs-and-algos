const fs = require("fs");
const values = fs
  .readFileSync("values.txt", "utf8")
  .split(",")
  .map((i) => Number(i));

function bubbleSort(values) {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        const temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
  }
  console.log(values);
}

bubbleSort(values);
