const obj = {
    [Symbol.asyncIterator]: async function* () {
        for (let i = 0; i < 3; i++) {
            yield Promise.resolve(i)
        }
    },
    [Symbol.iterator]: function* () {
        for (let i = 10; i < 13; i++) {
            yield Promise.resolve(i)
        }
    },
    [Symbol.toStringTag]: "1111"
}
const res = obj[Symbol.asyncIterator]()
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
