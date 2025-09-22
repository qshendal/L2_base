function createPhoneNumber(numbers) {
  let result = '';
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) result += '(';
    if (i === 3) result += ') ';
    if (i === 6) result += '-';
    result += numbers[i];
  }
  return result;
}
