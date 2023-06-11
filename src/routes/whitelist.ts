export const whiteList: string[] = ["/login", "/404"];

export const toIsWhitelist = (id: string) => {
  return whiteList.includes(id);
};
