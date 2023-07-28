export const whiteList: string[] = ["404", "absen"];

export const toIsWhitelist = (id: string) => {
  return whiteList.includes(id);
};
