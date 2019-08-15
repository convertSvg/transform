## Transfrom

`matrix()` 是矩阵函数，以一个含六值的 `matrix(a, b, c, d, e, f)` 变换矩阵的形式指定一个 `2D` 变换，相当于直接应用一个 `[a, c, e, b, d, f]` 变换矩阵。

> 注意： `matrix(a, b, c, d, e, f)` 是 `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, e, f, 0, 1)` 的一个简写。

- `e` 和 `f` 代表着偏移量 `translate`，x 和 y 轴
- `a` 和 `d` 代表着缩放比例 `scale`, x 和 y 轴
- b 和 c 代表着斜切skew（具体参数和角度关系为, b-->tanθ y轴 c-->tanθ x轴 ,我们具体操作的时候还是要使用小数的）
- a b c d 中的ad代表缩放(scale),bc代表者斜切(skew); abcd四个参数代表着旋转，这你可能难以理解，请继续往下看。

## 2D变形 

> matrix()  combine()  getCoordinateTransform()

skew skewX skewY
scale scaleX scaleY 
rotate 
translate translateX translateY 

> [CSS3 2D 转换](https://www.w3school.com.cn/css3/css3_2dtransform.asp)
> [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate)

## 3D变形

> matrix3d()  combine3d()  getCoordinateTransform()

scaleZ scale3D
rotateX rotateY rotateZ rotate3D 
translateZ translate3d

> [CSS3 3D 转换](https://www.w3school.com.cn/css3/css3_3dtransform.asp)

## Target

- 坐标变换
- 矩阵变换



[matrix()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
[matrix3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
[Transform Functions](https://drafts.csswg.org/css-transforms-2/#Rotate3dDefined)


[SVG中的坐标系统和坐标变换](https://segmentfault.com/a/1190000004320934)
[笛卡尔坐标系](https://zh.wikipedia.org/wiki/%E7%AC%9B%E5%8D%A1%E5%B0%94%E5%9D%90%E6%A0%87%E7%B3%BB)
[3D数学基础-向量运算基础和矩阵变换](http://frankorz.com/2017/09/22/basic-of-vector-and-matrix-transformation/#%E4%BA%8C%E7%BB%B4%E7%A9%BA%E9%97%B4%E4%B8%8B%E7%9A%84%E6%97%8B%E8%BD%AC)