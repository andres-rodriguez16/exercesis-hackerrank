function birthdayCakeCandles(candles) {
  // Write your code here
  let mayor = candles[0];
  let countMayor = 1;
  for (let i = 1; i < candles.length; i++) {
    if (mayor < candles[i]) {
      mayor = candles[i]
      countMayor = 1;
    } else if (mayor === candles[i]) {
      countMayor++;
    } 
  }
  return countMayor;
}
// return countMayor;{}

console.log(
  birthdayCakeCandles([5,8,9,9])
);