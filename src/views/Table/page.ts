import Form from "./form"
interface tablePage {
    form: unknown
    table: unknown
    pagination: unknown
}
class Page implements tablePage {
    constructor(
        public form: Form
    ) { }

}