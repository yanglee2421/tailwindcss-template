interface Options {
    label: string
    value: unknown
}
class Dialog {
    visible = false
    value = ""
    options: Options[] = []
    change() {
        this.visible = !this.visible
    }
}