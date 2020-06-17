/* 
The first two solutions have very poor runtimes due to repeating the same calculations 
over and over. The third example utilizes 'memoization' by using a cache that 
stores previously calculated values so each calculation only has to be performed once.
*/

function iterativeFactorial(n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

function memoizedFactorial(n, cache) {
  let factorial = 1;

  for (let i = n; i > 0; i--) {
    if (!cache[i]) {
      factorial *= i;
      cache[i] = factorial;
    } else {
      factorial = cache[i];
    }
  }
  return factorial;
}

const f1 = iterativeFactorial(5);
const f2 = recursiveFactorial(5);

const cache = {};
const f3 = memoizedFactorial(100, cache);

console.log(f1, f2, f3);
