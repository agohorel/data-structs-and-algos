function iterativePalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    } else return true;
  }
}

function recursivePalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    if (str[0] === str[str.length - 1]) {
      str = str.substr(1, str.length - 2);
      return recursivePalindrome(str);
    }
  }
  return false;
}

const result1 = iterativePalindrome('racecar');
const result2 = iterativePalindrome('notapalindrome');
console.log(result1, result2);

const result3 = recursivePalindrome('racecar');
const result4 = recursivePalindrome('notapalindrome');
console.log(result3, result4);
