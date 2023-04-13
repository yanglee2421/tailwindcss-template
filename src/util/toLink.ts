export function toLink(str: unknown, msg: string = "") {
  if (typeof str !== "string") return msg;
  if (!str) return msg;

  const reg =
    /^(?<prefix>.*)(?<link>https?\:\/\/.+\.\w{2,3}(\:\d{2,5})?(\/\w+)*)(?<suffix>.*)$/gis;
  const res = reg.exec(str);
  if (!res) return str;

  const { groups } = res;
  if (!groups) return str;

  const { link } = groups;
  const a = `<a href='${link}' target='_blank'>${link}</a>`;
  return str.replace(link, a);
}
