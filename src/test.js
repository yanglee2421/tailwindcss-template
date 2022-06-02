const fun = async () => {
    console.log('async begin');//1
    const res = await new Promise((resolve) => {
        setTimeout(() => {
            console.log('async');//4
            resolve('async res')
        }, 0);
    })
    console.log(res);//5
}
const fun2 = async () => {
    console.log('async02 begin');//2
    const res = await new Promise((resolve) => {
        setTimeout(() => {
            console.log('async02');//6
            resolve('async02 res')//7
        }, 0);
    })
    console.log(res);
}
fun()
fun2()
console.log('同步');//3