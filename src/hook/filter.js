/*
item的属性及属性值必须与filter对象中的相对应
*/
export default (arr, fil = {}) => {
    if (!Array.isArray(arr)) throw new Error('一参必须是一个Array！')
    if (Object.prototype.toString.call(fil) !== '[object Object]') throw new Error('二参必须是一个Object！')
    const res = arr.filter(item => {
        return Object.keys(fil).filter(key => fil[key]).every(key => {
            return fil[key] === item[key]
        })
    })
    return res
}