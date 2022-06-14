# js继承方案

## 原型链继承

> 将父类的实例作为子类的原型

### 实现
```js
function Supertype() {
    this.name = '奔驰'
    this.colors = ['white', 'black']
}

Supertype.prototype.getName = function() {
    console.log('name', this.name)
}

function Subtype() {}

Subtype.prototype = new Supertype()

const instance1 = new Subtype()
instance1.name = '奔驰 S'
instance1.colors.push('blue')

const instance2 = new Subtype()
instance2.name = '奔驰 G'is.name = '小明'
}
```

![原型链继承](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/202204261214460.png)

::: warning 缺点
1. 多个实例对引用类型的操作会被篡改
2. 子类型实例不能给父类型构造函数传参
:::

## 借用构造函数(经典继承)

> 在子类构造函数中调用父类构造函数，可以使用call()和apply()方法

### 实现
```js
function Supertype(name) {
    this.name = name
    this.colors = ['white', 'black']
}

Supertype.prototype.getName = function() {
    console.log('name', this.name)
}

function Subtype(name) {
    Supertype.call(this, name)
}

const instance1 = new Subtype('奔驰 S')
instance1.colors.push('blue')

const instance2 = new Subtype('奔驰 G')
```

![经典继承](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/202204261443237.png)

::: tip 优点
1. 可以在子类构造函数中向父类传参数
2. 父类的引用属性不会被共享
:::

::: warning 缺点
1. 只能继承父类的实例属性和方法，不能继承原型属性/方法（即不能访问Supertype.prototype上定义的属性/方法）
2. 无法实现复用，每个子类都有父类实例函数的副本，影响性能
:::

## 组合继承

> 用 `原型链` 实现对原型属性和方法的继承，用 `借用构造函数` 来实现实例属性的继承。

### 实现
```js
function Supertype(name) {
    this.name = name
    this.colors = ['white', 'black']
}

Supertype.prototype.getName = function() {
    console.log('name', this.name)
}

function Subtype(name) {
    Supertype.call(this, name)
}

Subtype.prototype = new Supertype()
Subtype.prototype.constructor = Subtype

const instance1 = new Subtype('奔驰 S')
instance1.colors.push('blue')

const instance2 = new Subtype('奔驰 G')
```

![组合继承](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/202204261502480.png)

::: warning 缺点
调用了2次 `SuperType()` ，给 `SuperType` 的原型和实例上都写入了两个属性name和colors
:::


## 原型式继承

> 就是对 `ES5 Object.create` 的模拟实现，将传入的对象作为创建的对象的原型。

### 实现
```js
function createObj(obj) {
    function Func() {}
    Func.prototype = obj
    return new Func
}

let person = {
    name: '奔驰',
    colors: ['white', 'black'],
    getName: function() {
        console.log('name', this.name)
    }
}

let person1 = createObj(person)
person1.name = '奔驰 S'
person1.colors.push('blue')

let person2 = createObj(person)
person2.name = '奔驰 G'
```

![原型继承](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/202204271458401.png)

::: warning 缺点
1. 多个实例继承的引用类型属性指向相同，存在篡改的可能。
2. 子类实例不能向父类传参
:::

## 寄生式继承

> 在原型式继承的基础上，增强对象，返回构造函数

### 实现
```js
function createObj(obj) {
    let clone = Object.create(obj)
    clone.getName = function() {
        console.log('name', this.name)
    }
    return clone
}

let person = {
    name: '奔驰',
    colors: ['white', 'black']
}

let person1 = createObj(person)
person1.name = '奔驰 S'
person1.colors.push('blue')

let person2 = createObj(person)
person2.name = '奔驰 G'
```

![寄生继承](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/202204271517957.png)

::: warning 缺点
1. 多个实例继承的引用类型属性指向相同，存在篡改的可能
2. 子类实例不能向父类传参
3. 每次创建对象都会创建一遍增强对象的属性/方法
:::

## 寄生组合式继承

> 借用构造函数传递参数，寄生模式实现继承

### 实现
```js
function inheritPrototype(subType, superType){
    // 创建对象，创建父类原型的一个副本
    var prototype = Object.create(superType.prototype)
    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
    prototype.constructor = subType
    // 指定对象，将新创建的对象赋值给子类的原型
    subType.prototype = prototype                     
}

function Supertype(name) {
    this.name = name
    this.colors = ['white', 'black']
}

Supertype.prototype.getName = function() {
    console.log('name', this.name)
}

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function Subtype(name) {
    Supertype.call(this, name)
}

// 将父类原型指向子类
inheritPrototype(Subtype, Supertype);

// 新增子类原型属性
Subtype.prototype.sayName = function(){
    console.log('sayName', this.name)
}

const instance1 = new Subtype('奔驰 S')
instance1.colors.push('blue')

const instance2 = new Subtype('奔驰 G')
```

![寄生组合继承](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/202204271626425.png)

::: tip 优点
1. 只调用了一次 `SuperType()` ，并且因此避免了在 `SubType.prototype` 上创建不必要的属性。
2. 原型链还能保持，能够正常使用 `instanceof` 和 `isPrototypeOf()`
:::
