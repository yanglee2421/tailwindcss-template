class Item {
  constructor(
    public id: string,
    public name: string,
    public age: string,
    public gender: "男" | "女" | "不男不女",
    public address: string,
    public hobby?: string[]
  ) {}
}
const arr: Item[] = [];
arr.push(
  new Item("1", "孙悟空", "18", "男", "花果山水帘洞", ["抽烟", "喝酒", "烫头"])
);
arr.push(
  new Item("2", "猪八戒", "19", "男", "高老庄", ["打牌", "撸串", "纹身"])
);
arr.push(new Item("3", "沙和尚", "20", "男", "通天河", ["打劫", "赌钱"]));
arr.push(new Item("4", "唐三藏", "21", "男", "金山寺", ["唠叨", "读书"]));
export default arr;
