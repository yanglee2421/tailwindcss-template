const fun = (params, str) => {
    params.forEach(item => {
        Array.isArray(item.children) && fun(item.children, str)
        item.children = item.children.filter(el => el.label.includes(str))
    });
}
export default fun