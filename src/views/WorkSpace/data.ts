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
export default arr;
