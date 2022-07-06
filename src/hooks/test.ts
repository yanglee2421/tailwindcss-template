import arr from "abc"
arr.forEach((element: Record<string, unknown>) => {
    element.name = 123
});
console.log(arr)
