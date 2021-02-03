<template>
  <section class="data">
    <h3>data</h3>
    <h4>name: {{ name }}</h4>
  </section>
  <section class="ref">
    <h3>ref</h3>
    <h4>Name: {{ currentName }}</h4>
    <h4>Age: {{ currentAge }}</h4>
    <h4>user1.name: {{currentUser1.name}}</h4>
    <h4>user1.age: {{currentUser1.age}}</h4>
    <h4>user2.name: {{currentUser2.name}}</h4>
    <h4>user2.age: {{currentUser2.age}}</h4>
  </section>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "Composition1",
  setup() {
    const currentName = ref("Jacky")
    const currentAge = ref(18)
    let user1 = {name: "Mary", age: 19}
    let user2 = ref({name: "Mary", age: 19})
    setTimeout(() => {
      currentName.value = "Jacky(change)"
      user1 = {name: "Mary(change)", age: 20}
      user2.value = {name: "Mary(change)", age: 20}
    }, 3000)
    return {
      currentName: currentName,
      currentAge: currentAge,
      currentUser1: user1,
      currentUser2: user2
    }
  },
  data() {
    return {
      name: "Jacky"
    }
  }
}
</script>

<style scoped>
h3 {
  color: darkred;
}
section {
  padding: 0px 10px;
}
section.data {
  background-color: mediumseagreen;
}
section.ref {
  background-color: darkseagreen;
}
</style>
