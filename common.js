function isPrime(num) {
  let i = 2;
  while (i < parseInt(num / 2) + 1) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}

//  get all the primes numbers until the specific num
function findPrimes(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res;
}

console.log(findPrimes(20));
