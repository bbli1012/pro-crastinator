// @ts-nocheck

export function parseDate(ms) {
  return new Date(ms);
}

export function parseRelativeDate(date, currentDate) {
  if (date instanceof Date) {
    date = date.getTime();
  }

  if (currentDate) {
    let currentDate = new Date();
    currentDate = currentDate.getTime();
  }

  let timeDiff = new Date(Math.abs(currentDate - date));
  return (
    Math.floor(timeDiff / 36000000) +
    " Hrs " +
    timeDiff.getMinutes() +
    " Mins " +
    timeDiff.getSeconds() +
    " Seconds ago"
  );
}
