const fil = {
    name: null,
    age: 18,
}
const arr = []
for (let i = 0; i < 100; i++) {
    arr.push({ age: i, name: '张' + i })
}
const res = arr.filter(item => {
    return Object.keys(fil).filter(key => fil[key]).every(key => {
        return fil[key] === item[key]
    })
})
console.log(res);