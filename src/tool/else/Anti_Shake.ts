class AntiShake {
    constructor(public callback: Function, public delay = 0) { }
    #shake?: number
    #throttle = true
    run(shake?: boolean) {
        shake ? this.shake() : this.throttle()
    }
    throttle() {
        if (this.#throttle) {
            this.#throttle = false
            this.callback()
            setTimeout(() => {
                this.#throttle = true
            }, this.delay);
        }
    }
    shake() {
        clearTimeout(this.#shake)
        this.#shake = setTimeout(() => {
            this.callback()
        }, this.delay) as unknown as number;
    }
}
export default AntiShake