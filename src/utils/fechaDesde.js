
export function compareDates(d1) {
  const date1 = new Date(d1);
  const date2 = new Date();
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.floor(Difference_In_Days);
}
