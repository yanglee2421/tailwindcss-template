import type { FormInstance, FormRules } from "element-plus"
enum Gender { unknown = 0, men = 1, women = 2 }
interface formItem {
    name: string
    age: number
    gender: Gender
    address: string[]
}
class FormItem implements formItem {
    name = ""
    age = 0
    gender = Gender.men
    address = []
}
class Form {
    private defaultData = new FormItem()
    private data = Object.assign({}, this.defaultData)
    rules: FormRules = {}
    constructor(
        private ref: FormInstance | undefined
    ) { }
    reset() {
        this.ref?.resetFields()
    }
    validate() {
        let res = true
        this.ref?.validate((vali: boolean) => {
            if (vali) {
                res = true
            } else {
                res = false
                return false
            }
        })
        return res
    }
    get name() {
        return this.data.name
    }
    set name(value) {
        this.data.name = value
    }
    get age() {
        return this.data.age
    }
    set age(value) {
        this.data.age = value
    }
    get gender() {
        return this.data.gender
    }
    set gender(value) {
        this.data.gender = value
    }
    get address() {
        return this.data.address
    }
    set address(value) {
        this.data.address = value
    }
}
export default Form