const reg = /^(http)(s{0,1})(:\/\/)(.+)(\.)([A-z]+)(\/{0,1})(.*)/i;
console.log(reg.test("http://developer.mozilla.org/zh-CN/docs/Web/CSS/filter"));
function test() {
  function is() {
    throw new Error("闭包中的函数抛出error");
  }
  is();
}
test();
console.log("抛出error后");
