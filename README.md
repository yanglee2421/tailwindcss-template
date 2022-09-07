# 埋点
## 用法
~~~tsx
/**
 * 参数为事件名，值非函数
 * 给标记元素绑定该事件，事件触发时将值push到meta的actions中
 */
<fw-div v-track:click="{}"></fw-div>
/**
 * 参数为事件名，值为函数
 * 给标记元素绑定该事件，事件触发时将函数的返回值push到meta的actions中
 */
<fw-div v-track:input="(event)=>event"></fw-div>
/**
 * 无参数，值为函数
 * 挂载和卸载前，以meta和track方法作为实参调用该函数
 */
<fw-div v-track="(meta,track)=>{}"></fw-div>
/**
 * 参数为root
 * 挂载时，将值push到actions中
 * 卸载时或页面关闭时，调用track
 */
<fw-div v-track:root="(meta,callback)=>{}"></fw-div>
~~~