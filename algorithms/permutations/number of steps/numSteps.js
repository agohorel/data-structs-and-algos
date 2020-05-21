function numSteps(current, destination) {
  if (current === destination) {
    return 1;
  } else if (current > destination) {
    return 0;
  }

  return (
    numSteps(current + 1, destination) + numSteps(current + 2, destination)
  );
}

const start = Date.now();
const result = numSteps(0, 20);
const stop = Date.now();
const duration = (stop - start) / 1000;
console.log(
  `There are ${result} permutations of 1 and/or 2 steps to reach destination. Computed in ${duration} seconds`
);

function numStepsMemoized(current, destination, cache = {}) {
  if (current === destination) {
    return 1;
  } else if (current > destination) {
    return 0;
  } else if (cache[current] === undefined) {
    cache[current] =
      numStepsMemoized(current + 1, destination, cache) +
      numStepsMemoized(current + 2, destination, cache);
  }
  return cache[current];
}

const start2 = Date.now();
const result2 = numStepsMemoized(0, 200); // note input is 10x larger!
const stop2 = Date.now();
const duration2 = (stop - start) / 1000;
console.log(
  `There are ${result2} permutations of 1 and/or 2 steps to reach destination. Computed in ${duration2} seconds`
);
