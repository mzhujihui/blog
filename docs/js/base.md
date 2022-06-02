# js基础

## 数据类型

JS 数据类型分为**原始类型**和**对象类型**。

![js数据类型](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220424175740.png)

## 类型判断

### 1. typeof
> typeof 操作符返回一个字符串，表示未经计算的操作数的类型。

原始类型中除了 **null**，其他类型都可以通过 **typeof** 来判断。

![typeof判断原始类型](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220424175739.png)

typeof null === 'object' 是一个久远的bug

> JS初始版本使用的是32位系统，为了性能考虑使用低位存储变量的类型信息，而000开头代表的是对象，null表示全零，所以对象的类型被误判为object。虽然现在的内部类型判断代码已经改变了，但是这个Bug却一直流传了下来。

对于对象类型来说，**typeof** 只能具体判断函数的类型为 **function**，其它均为 **object**。

![typeof判断对象类型](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220424175741.png)

### 2. instanceof
> instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

![](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220424175742.png)

- 实现 **instanceof**

```js
/**
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @return {*} Boolean
 */
function myInstanceof(obj, func) {
  // 判断传入的obj参数是否是对象
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }
  let proto = Object.getPrototypeOf(obj) // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
  if (proto === func.prototype) {
    return true
  } else if (proto === null) {
    return false
  } else {
    return myInstanceof(proto, func)
  }
}
```

### 3. Object.prototype.toString.call
![](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220424175738.png)

实现一个通用函数判断数据类型

```js
const getType = (s) => {
  const r = Object.prototype.toString.call(s)
  // Object.prototype.toString.call(s).slice(8,-1).toLowerCase()
  const t = r.replace(/\[object (.*?)\]/, '$1').toLowerCase()
  return t
}
```