/**
 * d.ts文件专门用于声明类型
 * 在这里声明的类型仅为语法提示发挥作用，不参与到编译中
 * 不能写枚举
 */

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

type FunctionAction<TData> = (prevData: TData) => TData;
type SetStateAction<TData> = TData | FunctionAction<TData>;
type Dispatch<TAction> = (action: TAction) => void;

/**
 * declare，宣言一个变量必定存在，并为其指定类型
 * 给模块指定类型
 * 给全局变量指定类型
 * 给全局方法指定类型
 * 给全局对象的属性指定类型
 */
declare const globalConst: number;
declare function fun(params: string): void;
declare namespace globalObj {
  let property: number;
  function fun(params: number): string;
}
/**
 * 按TS的语法风格，不应为已有的类或对象添加属性字段，但有些情况下需要这样做
 *
 * 比如，要使用JS中的原型链进行继承，
 * 此时需要在对应的接口中声明属性和方法的类型
 */
interface Array {
  fun(params: number): number;
}
