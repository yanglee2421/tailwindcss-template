const reg = /^(http)(s{0,1})(:\/\/)(.+)(\.)([A-z]+)(\/{0,1})(.*)/i
console.log(reg.test("http://developer.mozilla.org/zh-CN/docs/Web/CSS/filter"))
