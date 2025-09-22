function bingo(ticket, win) {
  let count = 0;

  for (let i = 0; i < ticket.length; i++) {
    let str = ticket[i][0];
    let num = ticket[i][1];

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        count++;
        break;
      }
    }
  }

  return count >= win ? 'Winner!' : 'Loser!';
}
