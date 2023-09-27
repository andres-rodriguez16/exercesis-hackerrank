
//* Ordenados 
// function isBalanced(s) {
//   let corchetes = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   }
//   
//   let length = s.length - 1
//   let mitad = s.length / 2 
//   for (let i = 0; i < mitad; i++) {
//     if (corchetes[s[i]] === s[length]) {
//       length--
//     } else {
//       return "NO"
//     }
//   }
//   return "YES"
// }

//! desordenados 
function isBalanced(s) {
  const stack = [];
  let blackest = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (blackest[element]) stack.push(element);
    else {
      // if (stack.length === 0) return "NO"
      let open = stack.pop()
      if (
        element === ")" && open !== "(" ||
        element === "]" && open !== "[" ||
        element === "}" && open !== "{") {

        return "NO"
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO"
}
console.log(isBalanced('{(([])[])[]}'));







