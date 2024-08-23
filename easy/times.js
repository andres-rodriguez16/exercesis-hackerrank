function timeConversion(s) {

  let newArray = s.split("")
  let hour1 = parseInt(newArray[0] + newArray[1])
  let horario = newArray[newArray.length - 2]
  newArray.splice(newArray.length - 2, newArray.length - 1)
  if (horario === "P") {
    if (hour1 != 12) {
      newArray.splice(0, 2)
      newArray.unshift(hour1 + 12)
    }
  } else {
    if (hour1 === 12) {
      newArray.splice(0, 2)
      newArray.unshift("00")
    }
  }
  return newArray.join("")
}

console.log(
  timeConversion("12:05:45AM")
);
