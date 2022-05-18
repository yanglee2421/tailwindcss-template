const obj = {
  name: "123",
  fun(params, par) {
    console.log(this.name);
    console.log(params);
    console.log(par);
  }
}
obj.fun.bind({ name: "456" }, 456)(789)