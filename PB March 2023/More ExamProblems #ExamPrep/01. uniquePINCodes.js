function uniquePINCodes(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let n3 = Number(input[2]);

  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const pins = [];

  for (let i = 2; i <= n1; i += 2) {
    for (let j = 2; j <= n2; j++) {
      if (!isPrime(j)) continue;
      for (let k = 2; k <= n3; k += 2) {
        pins.push(`${i} ${j} ${k}`);
      }
    }
  }

  return pins.join('\n');
}

console.log(uniquePINCodes(['3', '5', '5']));
