import arr from "@/hooks/test.js"
arr.forEach((element: Record<string, unknown>) => {
    element.name = 123
});
console.log(arr)
