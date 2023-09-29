function miniMaxSum(arr) {
  // Write your code here
  let orderArr = arr.sort((a, b) => (a - b))
  let totalSum = arr.reduce((acc, current) =>  (acc + current), 0);
  console.log(totalSum - orderArr[arr.length -1], totalSum - orderArr[0]);
}

console.log(miniMaxSum([2, 6, 8, 9, 5]));
                    //  0  1  2  3  4