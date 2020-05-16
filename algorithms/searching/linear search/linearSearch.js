const fs = require("fs");

class LinearSearch {
  constructor() {
    this.target = 73;
    this.values = fs
      .readFileSync("values.txt", "utf8")
      .split(",")
      .map((x) => Number(x));
  }

  search = () => {
    this.values.forEach((value) => {
      if (value === this.target) {
        console.log(value);
        return value;
      }
    });
  };
}

const linearSearch = new LinearSearch();
linearSearch.search();
