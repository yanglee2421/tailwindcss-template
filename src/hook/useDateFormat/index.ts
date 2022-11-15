export default (
  date: Date | number | string = Date.now(),
  needSecond = true
) => {
  const fun = (num: number) => {
    return num > 9 ? num : `0${num}`;
  };
  if (typeof date !== "object") {
    date = new Date(date);
  }
  const yyyy = date.getFullYear();
  let MM = fun(date.getMonth() + 1);
  let dd = fun(date.getDate());
  let hh = fun(date.getHours());
  let mm = fun(date.getMinutes());
  let ss = fun(date.getSeconds());
  return needSecond
    ? `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`
    : `${yyyy}-${MM}-${dd}`;
};
