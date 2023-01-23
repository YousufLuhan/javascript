function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function totallPrime(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }
  return array;
}
