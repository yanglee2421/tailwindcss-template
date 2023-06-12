export const whiteList: string[] = ["404"];

export const toIsWhitelist = (id: string) => {
  return whiteList.includes(id);
};
