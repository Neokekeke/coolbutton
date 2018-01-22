# project_demos
Demos for learning
# "GhostButton"

一个自己制作的小Demo，使用了Jquery和CSS3的transform动画，实现了国外比较火热的“幽灵按钮”样式。
Demo实现的效果比较简单，以后会慢慢学习添加一些更复杂的功能。

### 碰到几个问题：
Q1：在给最外层div(.box)设置position居中定位时，内部div(.toolTip)获取offset.left的值时和内部div(.link .link-mushroom)的offset.left不相等。

A1：目前的解决方法是不给外层div(.box)定义position属性，用margin 0 auto代替，内部div的offset.left取值就一致了。

>参考的幽灵按钮网站：[iuvo](http://www.iuvo.si/)   


![](https://raw.githubusercontent.com/NeoKeKeKe/project_demos/master/GhostButton/button.png)


>已实现效果

![](https://raw.githubusercontent.com/NeoKeKeKe/project_demos/master/GhostButton/demo.png)