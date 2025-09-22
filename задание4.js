function findMissing(list) {
  let step = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 1; i < list.length; i++) {
    if (list[i] !== list[i - 1] + step) {
      return list[i - 1] + step;
    }
  }
}
