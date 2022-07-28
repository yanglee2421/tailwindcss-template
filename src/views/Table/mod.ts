import { FormData } from "./formData"
const arr: FormData[] = []
for (let i = 1; i < 100; i++) {
    arr.push(new FormData(i))
}
export default arr