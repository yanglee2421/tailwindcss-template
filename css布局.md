<!--
 * @Author: 张远航
 * @Date: 2022-03-21 17:12:29
 * @LastEditTime: 2022-03-21 17:51:19
 * @LastEditors: 张圣
 * @Description: 
 * @FilePath: \vue3note\css布局.md
-->
# CSS文档
### Flex布局
- Flex容器的属性
  1. jusitify-content
      1. center
      2. space-between
      3. space-evenly
      4. space-around
      5. flex-start
      6. flex-end
  2. align-items
      1. center
      2. stretch
      3. flex-start
      4. flex-end
      5. baseline
  3. align-content
      - 同jusitify-content
  4. flex-flow
      - 统合以下两个
  - flex-direction
      1. row
      2. row-reverse
      3. column
      4. column-reverse
  - flex-wrap
      1. nowrap
      2. wrap
      3. wrap-reverse
- Flex元素的属性
  1. align-self
      - 覆盖容器上的align-items
  2. flex
      - 统合以下三个
  - flex-grow
  - flex-shrink
  - flex-basic
  - flex-order
      - 数字、越小越靠前、
## 1. 两个元素,主轴上一个最左一个最右,辅轴上居中
~~~css
.box{
  display:flex;
  jusitify-content:space-between;
  .el{
    /**/
  }
}
~~~
## 2. 多个元素,全在一行,宽度一致
~~~css
.box{
  display:flex;
  .el{
    flex:1;
  }
}
~~~