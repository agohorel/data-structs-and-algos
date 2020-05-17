function iterativeReverseString(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed += str[str.length - i - 1];
  }
  return reversed;
}

function recursiveReverseString(str) {
  if (str.length === 0) {
    return str;
  } else {
    return recursiveReverseString(str.substr(1)) + str[0];
  }
}

const reversed = iterativeReverseString("reverse");
const palindrome = iterativeReverseString("racecar");
console.log(reversed, palindrome);

const reversed2 = recursiveReverseString("reverse");
const palindrome2 = recursiveReverseString("racecar");
console.log(reversed2, palindrome2);
