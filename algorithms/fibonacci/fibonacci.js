function iterativeFibonacci(n) {
  let fibonacci = 1;
  let prev = 0;
  let prevPrev = null;

  for (let i = 1; i < n; i++) {
    prevPrev = prev;
    prev = fibonacci;
    fibonacci = prev + prevPrev;
  }
  return fibonacci;
}

function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

const f1 = iterativeFibonacci(16);
const f2 = recursiveFibonacci(16);
console.log(f1, f2);
