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

const f1 = iterativeFactorial(5);
const f2 = recursiveFactorial(5);

console.log(f1, f2);
