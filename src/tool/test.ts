const test = () => {
    (async () => {
        const res = await Promise.resolve(888)
        console.log(res)
    })()
    console.log(123)
}
test()