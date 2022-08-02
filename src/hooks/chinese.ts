const reg1 = /\p{sc=Han}/u
const reg2 = /\u4e00-\u9fa5/
const reg3 = /\p{Unified_Ideograph}/u
const reg4 = /\p{Script=Greek}/u
const str = "π"
console.log(reg4.test(str))
