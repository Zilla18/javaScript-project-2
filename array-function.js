// Finding maximum and minimum value in an array

function maximumValue(num) {
  let newNumbers = num.sort((a, b) => a - b);

  return `minimum = ${newNumbers[0]} maxnumber = ${
    newNumbers[newNumbers.length - 1]
  } `;
}
console.log(maximumValue([2, 37, 80, 74, 86, 90, 65]));

// calculating the sum of all elements in an array

function totalSum(sum) {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total = total + sum[i];
  }
  return total;
}

console.log(totalSum([2, 37, 80, 74, 86, 90, 65]));

// filtering out elements from an array based on a given condition.
function filterOut(biggest) {
  return (biggest = biggest.filter((numb) => numb <= 70));
}
console.log(filterOut([2, 37, 80, 74, 70, 86, 90, 65]));
