export function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function formatDate(date: Date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
}

export function previousDate(date: Date, days: number) {
  return new Date(new Date(date).setDate(new Date(date).getDate() - days));
}
