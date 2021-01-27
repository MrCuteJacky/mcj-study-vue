### **lab10:** Hello vue3, css.

#### run app
```shell
npx serve .
```

#### sample
- [document: #v-bind][v-bind]
```html
<!-- class binding -->
<div :class="{red: isRed}"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, {classB: isB, classC: isC}]">

<!-- style binding -->
<div :style="{fontSize: size + 'px'}"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
```

[v-bind]: https://vuejs.org/v2/api/?#v-bind
