function howManyTimes(time1, time2) {
  let start = new Date(time1);
  let end = new Date(time2);
  let count = 0;

  while (start < end) {
    let h = start.getHours() % 12;
    let m = start.getMinutes();
    let s = start.getSeconds();

    if (m === 0 && s >= 0 && s < (h === 0 ? 12 : h)) {
      count++;
    }

    if (m === 30 && s === 0) {
      count++;
    }

    start.setSeconds(start.getSeconds() + 1);
  }

  return count;
}

