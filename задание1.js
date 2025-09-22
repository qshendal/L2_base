function hasTwoCubeSums(n) {
  let foundPairs = [];
  for (let i = 1; i <= Math.cbrt(n); i++) {
    for (let j = i + 1; j <= Math.cbrt(n); j++) {
      let sum = i ** 3 + j ** 3;
      if (sum === n) {
        foundPairs.push([i, j]);
      }
    }
  }
  for (let i = 0; i < foundPairs.length; i++) {
    for (let j = i + 1; j < foundPairs.length; j++) {
      let [a1, b1] = foundPairs[i];
      let [a2, b2] = foundPairs[j];

      let all = new Set([a1, b1, a2, b2]);
      if (all.size === 4) {
        return true; 
      }
    }
  }
  return false; 
}
