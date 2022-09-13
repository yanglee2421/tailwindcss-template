const funSort = (arr: string[]) => {
    const res = arr.sort((current: string, next: string) => {
        return current.localeCompare(next, "zh-Hans-CN", { sensitivity: "accent" })
    })
    return res
}
const arr = ["张", "王", "刘", "李", "陈", "杨"]
console.log(funSort(arr))
