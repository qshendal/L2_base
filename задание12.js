function longest(arr, n) {
 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].length < arr[j + 1].length) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr[n - 1];
}
