import { reactive, ref, computed, toRaw } from "vue"
import type { WritableComputedRef } from "vue"
export default <T extends Record<string, unknown>>(params: T[]) => {
    interface _T extends T {
        chk?: WritableComputedRef<boolean>
    }
    const res = computed(() => {
        const target: _T[] = toRaw(params)
        target.forEach(item => {
            item.chk = computed({
                get() {
                    return [].includes(item)
                },
                set() { }
            })
        })
    })
    return res
}