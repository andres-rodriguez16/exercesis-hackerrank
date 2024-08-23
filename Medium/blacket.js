function isBalanced(s) {

  const stack = [];
  let bracket = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  for (let char of s) {
    let itOpens = bracket.hasOwnProperty(char)
    if (itOpens) {
      stack.push(char);
    } else {
      if (bracket[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{}}"));








