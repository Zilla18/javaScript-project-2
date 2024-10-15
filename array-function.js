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

// Factoria Function

function fac(numb) {
  let result = 1;

  for (let index = 1; index <= numb; index++) {
    result = result * index;
  }
  return result;
}
console.log(fac(4));

// Prime Number Check function

function primeNumberCheck(numbs) {
  if (numbs <= 1) {
    return false;
  }

  for (let index = 2; index <= Math.sqrt(numbs); index++) {
    if (numbs % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumberCheck(7));

// Fibonacci Sequence function
function fibona(numb_) {
  if (numb_ <= 0) return [];

  if (numb_ === 1) return [0];

  let fibSequence = [0, 1];

  for (let i = 2; i < numb_; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

console.log(fibona(30));
