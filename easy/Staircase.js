// function reapeat(count, character) {
//   let repeatedString = '';
//   // Iterar 'count' veces y concatenar la cadena original a 'repeatedString'
//   for (let i = 0; i < count; i++) {
//     repeatedString += character;
//   }
//   return repeatedString;
// }

function staircase(n) {
  // Write your code here
  let numeral = ``;
  for (let i = 1; i <= n; i++) {
      numeral += `${` `.repeat(n - i)}${"#".repeat(i)}\n`
  }
  console.log(numeral)
}

console.log(staircase(6));


`
   #
  ##
 ###
####`






