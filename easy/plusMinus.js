
function plusMinus(arr) {
  // Write your code here
  let negativos = 0;
  let positivos = 0;
  let ceros = 0;
  let lenght = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivos++
    }
    else if (arr[i] < 0) {
      negativos++
    } else {
      ceros++
    }
  }
  function result(num) {
    return num = (num / lenght).toFixed(6)
  }
  console.log(result(negativos), result(positivos), result(ceros));
}

let arr = [-4, 3, -9, 0, 4, 1]
console.log(
  plusMinus(arr)
);