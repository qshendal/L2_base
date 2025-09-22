function toWeirdCase(string){
  let words = string.split(' ');
  let result = [];

  for (let word of words) {
    let formatted = '';
    for (let i = 0; i < word.length; i++) {
      formatted += i % 2 === 0
        ? word[i].toUpperCase()
        : word[i].toLowerCase();
    }
    result.push(formatted);
  }

  return result.join(' ');
}
