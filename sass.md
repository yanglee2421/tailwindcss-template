<!--
 * @Author: 张远航
 * @Date: 2022-03-21 13:51:28
 * @LastEditTime: 2022-03-21 14:10:20
 * @LastEditors: 江雪玲
 * @Description: 
 * @FilePath: \vue3note\sass.md
-->
# sass学习文档
## 1. 变量声明
### 1-1 变量声明
- 有块级作用域
- 声明方式如下
~~~sass
$height-color；#f90
~~~
### 1-2 变量引用
- 变量发生更改时，所有引用变量的作为值的属性都会发生更改
### 1-3 命名规范
- 既可以使用`_`也可以使用`-`
## 2. 允许CSS嵌套
~~~sass
#id1
  #id2{
    color:#fff;
  }
}
/* 编译后 */
#id1 #id2{
  color:#fff;
}
~~~
### 2-1 父选择器标识符`&`
- 在嵌套发生时回到上一级选择器
~~~sass
#id1{
  #id2{
    color:#f00;
  }
  &:hover{
    color:#fff;
  }
}
~~~
编译后
~~~css
#id1 #id2{
  color:#f00;
}
#id1:hover{
  color:#fff;
}
~~~