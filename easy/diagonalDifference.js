

function diagonalDifference(arr) {
  let left = 0;
    let right = 0;
    const length = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        left += arr[i][i];
        right += arr[length - i][i];
    }
    return Math.abs(left - right);

}
let arr = [
// 0
  [11, 2, 4],
//    1
  [4, 5, 6],

  [10, 8, -12]
// length - 1
]

console.log(diagonalDifference(arr));


console.log(4**(1/2), "result");
