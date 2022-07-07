/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
/**
 * 给模块指定类型
 * 给全局变量指定类型
 * 给全局方法指定类型
 * 给全局对象的属性指定类型
 */
declare module "testMod" {
  const aaa: number
  export default aaa
}
declare var Infinity: number
declare const Infinity: number
declare let Infinity: number

declare function alert(params: string): void

declare namespace window {
  function prompt(params: string): string
}

interface Array {
  fun(params: number): number
}