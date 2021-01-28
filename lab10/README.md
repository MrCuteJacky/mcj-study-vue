### **Lab 10:** Hello vue3, style.

#### Run app

```shell
npx serve .
```

#### Sample

```html
<!-- class binding -->
<div :class="{red: isRed}"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, {classB: isB, classC: isC}]">

<!-- style binding -->
<div :style="{fontSize: size + 'px'}"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
```

#### Document

- [#v-bind][v-bind]

[v-bind]: https://vuejs.org/v2/api/?#v-bind
