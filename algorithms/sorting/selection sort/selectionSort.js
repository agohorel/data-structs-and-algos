const fs = require("fs");

class SelectionSort {
  constructor() {
    this.values = fs
      .readFileSync("values.txt", "utf8")
      .split(",")
      .map((n) => Number(n));
    this.smallestIndex = 0;
  }

  sort = () => {
    for (let i = 0; i < this.values.length; i++) {
      this.smallestIndex = i;
      for (let j = i + 1; j < this.values.length; j++) {
        if (this.values[j] < this.values[this.smallestIndex]) {
          this.smallestIndex = j;
        }
        const temp = this.values[this.smallestIndex];
        this.values[this.smallestIndex] = this.values[i];
        this.values[i] = temp;
      }
    }
    console.log(this.values);
  };
}

const selectionSort = new SelectionSort();
selectionSort.sort();
