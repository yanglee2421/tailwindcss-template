export const whiteList: string[] = ["login"];

export const toIsWhitelist = (id: string) => {
  return whiteList.includes(id);
};
