# 排序
---
![排序](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220425180507.png)

::: info 两个概念
- 稳定性：如果待排序的数组中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变
- 原地排序：特指空间复杂度是 O(1) 的排序算法
:::

## 冒泡排序
::: info 复杂度与稳定性
- 时间复杂度：最坏、平均都是O(n<sup>2</sup>)，最好是O(n)
- 空间复杂度：O(1)
- 稳定性：稳定排序
:::

### 原理
1. 比较相邻的两个元素，如果第一个比第二个大，就彼此交换
2. 从第一对到最后一对，对每一对相邻元素做一样的操作。此时在最后的元素应该会是最大的数，我们也称一遍这样的操作为一次冒泡排序
3. 即使是有序度最差的数组，最多也只需要（n - 1）趟冒泡排序，如[6, 5, 4, 3, 2, 1]只需要5次冒泡
4. 当某次冒泡操作已经没有数据交换时，说明已经达到
完全有序，不用再继续执行后续的冒泡操作

### 图示
![冒泡排序图示](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220425154356.png)

### 代码实现
```js
const bubbleSort = arr => {
  let swapped = false
  const a = [...arr]
  for (let i = 1; i < a.length; i++) {
    swapped = false
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        swapped = true // 交换数据
      }
    }
    if (!swapped) return a // 该轮循环没有交换数据，排序已完成
  }
  return a;
};
```
## 插入排序

::: info 复杂度与稳定性
- 时间复杂度：最坏、平均都是O(n^2)，最好是O(n)
- 空间复杂度：O(1)
- 稳定性：稳定排序
:::

### 原理
1. 将数组中的数据分为两个区间，已排序区间和未排序区间。初始已排序区间只有
一个元素，就是数组的第一个元素。
2. 取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。
3. 重复这个过程，直到未排序区间中元素为空，算法结束。

### 图示
![插入排序图示](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220425163746.png)

### 优势
当数组是`排序度比较好的状态`或者`数据规模比较小`的时候，插入排序效率更高。这也是为什么 `v8引擎` 会在数组长度小于等于 10 的时候采用插入排序。

### 代码实现
```js
const insertionSort = (arr) => {
  const a = [...arr]
  if (a.length <= 1) return a
  for (let i = 1; i < a.length; i++) {
      const temp = a[i]
      let j = i - 1
      // 若a[i]前有大于a[i]的值的化，向后移位，腾出空间，直到一个<=a[i]的值
      for (j; j >= 0; j--) {
          if (a[j] > temp) {
              a[j + 1] = a[j]
          } else {
              break
          }
      }
      a[j + 1] = temp
  }
  return a
}
```

## 选择排序

::: info 复杂度与稳定性
- 时间复杂度：最好、最坏、平均都是O(n^2)
- 空间复杂度：O(1)
- 稳定性：不稳定排序。比如[5，8，5，2，9]，第一次找到最小元素2，与第一个 5 交换位置，那第一个 5 和中间的 5 顺序就变了，所以就不稳定了。正是因此，相对于冒泡排序和插入排序，选择排序就稍微逊色了。
:::

### 原理
1. 在要排序的数组中，选出最小的一个数与第1个位置的数比较，如果第一个数交换
2. 在剩下的数当中再找最小的与第2个位置的数交换，依次类推，直到第n-1个元素（倒数第二个数）和第n个元素（最后一个数）比较为止

### 图示
![选择排序图示](https://cdn.jsdelivr.net/gh/mzhujihui/figure-bed/img/20220425173809.png)

### 代码实现
```js
const selectionSort = arr => {
  const a = [...arr]
  for (let i = 0; i < a.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < length; j++) { // 查找最小值下标
      if (a[ j ] < a[ minIndex ]) {
        minIndex = j
      }
    }
    if (minIndex !== i) [a[i], a[minIndex]] = [a[minIndex], a[i]];
  }
  return a;
}
```

## 快速排序

::: info 复杂度与稳定性
- 空间复杂度：最好、平均都是O(nlogn)，最坏是O(n^2)
- 时间复杂度：O(1)
- 稳定性：不稳定排序。以数组 [1, 2, 3, 3, 4, 5] 为例，因为基准的选择不确定，假如选定了第三个元素(也就是第一个 3) 为基准，所有小于 3 的元素在前面，大于等于 3 的在后面，排序的结果没有问题。可是如果选择了第四个元素(也就是第二个 3 )，小于 3 的在基准前面，大于等于 3 的在基准后面，第一个 3 就会被移动到 第二个 3 后面，所以快速排序是不稳定的排序。
:::

### 原理
1. 选择一个元素作为"基准"
2. 小于"基准"的元素，都移到"基准"的左边；大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

### 非原地排序代码实现

```js
const quickSort = (arr) => {
  const a = [...arr];
  if (a.length < 2) return a;

  // 取数组的中间元素作为基准，并把基准从原数组删除
  const pivotIndex = Math.floor(length / 2)
  const pivot = a.splice(pivotIndex, 1)[0]
  let leftArray = []
  let rightArray = []

  for (var i = 0; i < a.length; i++){
      if (a[i] < pivot) {
          leftArray.push(a[i]);
      } else {
          rightArray.push(a[i]);
      }
  }

  return [...quickSort(leftArray), midValue , ...quickSort(rightArray)]
}
```

### 原地排序代码实现

```js
const quickSort = (arr) => {
  const a = [...arr];
  if (a.length < 2) return a;

  // 取数组的中间元素作为基准，并把基准从原数组删除
  const pivotIndex = Math.floor(length / 2)
  const pivot = a.splice(pivotIndex, 1)[0]
  let leftArray = []
  let rightArray = []

  for (var i = 0; i < a.length; i++){
      if (a[i] < pivot) {
          leftArray.push(a[i]);
      } else {
          rightArray.push(a[i]);
      }
  }

  return [...quickSort(leftArray), midValue , ...quickSort(rightArray)]
}
```