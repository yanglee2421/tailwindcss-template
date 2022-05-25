const arr = ['张', '王', '刘', '李', '陈', '杨']
const res = arr.sort((current, next) => {
    return current.localeCompare(next, 'zh-Hans-CN', { sensitivity: 'accent' })
})
console.log(res);