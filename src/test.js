setTimeout(() => {
    console.log('计时结束');
}, 100);
Promise.resolve('成功了').then(res => {
    setTimeout(() => {
        console.log(res);
    }, 100);
})
