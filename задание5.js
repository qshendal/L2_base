function primeFactors(n) {
  let result = '';
  let i = 2;

  while (i <= n) {
    let count = 0;
    while (n % i === 0) {
      n /= i;
      count++;
    }
    if (count > 0) {
      result += count === 1 ? `(${i})` : `(${i}**${count})`;
    }
    i++;
  }

  return result;
}
