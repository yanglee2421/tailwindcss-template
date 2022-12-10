export default (date: Date | number | string = Date.now(), simple = false) => {
  const fun = (num: number) => (num > 9 ? num : `0${num}`);
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const YYYY = date.getFullYear();
  let MM = fun(date.getMonth() + 1);
  let DD = fun(date.getDate());
  let hh = fun(date.getHours());
  let mm = fun(date.getMinutes());
  let ss = fun(date.getSeconds());
  return simple
    ? `${YYYY}-${MM}-${DD}`
    : `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
};
