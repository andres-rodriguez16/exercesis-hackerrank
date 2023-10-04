

function compareTriplets(a, b) {
  let result = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result[0]++;
    else if (a[i] < b[i]) result[1]++;
  }
  return result;
}

a = [4, 6, 3]
b = [3, 2, 1]
console.log(compareTriplets(a, b));

