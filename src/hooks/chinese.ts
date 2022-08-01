const reg1 = /\p{sc=Han}/u
const reg2 = /\u4e00-\u9fa5/
const reg3 = /\p{Unified_Ideograph}/u
const str = "中文"
console.log(reg3.test(str))
