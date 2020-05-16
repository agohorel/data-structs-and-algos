const fs = require("fs");

class BubbleSort {
  constructor() {
    this.values = fs
      .readFileSync("values.txt", "utf8")
      .split(",")
      .map((i) => Number(i));
  }

  sort = () => {
    for (let i = 0; i < this.values.length; i++) {
      for (let j = 0; j < this.values.length - i - 1; j++) {
        if (this.values[j] > this.values[j + 1]) {
          const temp = this.values[j];
          this.values[j] = this.values[j + 1];
          this.values[j + 1] = temp;
        }
      }
    }
    console.log(this.values);
  };
}

bubbleSort = new BubbleSort();
bubbleSort.sort();
