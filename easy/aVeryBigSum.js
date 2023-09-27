
function aVeryBigSum(ar) {
  // Write your code here
  let count = ar[0];
  for (let i = 1; i < ar.length; i++) {
    count = count +  ar[i];
  }
  return count
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003,1000000004, 1000000005])
)



