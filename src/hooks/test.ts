const reg = /[^A-z.\d\n\p{sc=Han}]/ug
const regg = /[^u4e00-u9fa5]/g
console.log(`龍`.match(reg))
