/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
/**
 * 手动的给没有定义类型的模块指定类型
 */
declare module "testMod" {
  const aaa: number
  export default aaa
}
/**
 * 
 */
declare namespace el {
  enum Gender { unknown = 0, men = 1, women = 2 }
}