# vite-vue

## Get Started

[Live Preview](https://yanglee2421.github.io/vite-vue)

## vue3.3

### TypeScript 与 setup 改进

1. defineProps 支持复杂类型（包括引入的类型）
2. 泛型组件（不懂）
3. defineEmits 写法改进，不再需要调用签名
4. defineSlots 为 slots 声明类型

### 实验功能

1. 从 props 中解构出的变量支持响应式
2. defineModel 快速声明 v-model

### 其它功能

1. defineOptions，支持在 setup 中声明组件 options
2. toRef 增强
3. toValue（unref 增强版，支持 getters）
