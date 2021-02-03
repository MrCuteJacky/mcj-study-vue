<template>
  <section class="data">
    <h3>data</h3>
    <h4>name: {{ username }}</h4>
  </section>
  <section class="ref">
    <h3>ref</h3>
    <h4>Name: {{ currentName }}</h4>
    <h4>Age: {{ currentAge }}</h4>
  </section>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "Composition1",
  setup() {
    const currentName = ref("Jacky")
    const currentAge = ref(18)
    setTimeout(() => {
      currentName.value = "Jacky tsai"
    }, 3000)
    return {
      currentName: currentName,
      currentAge: currentAge
    }
  },
  data() {
    return {
      username: "Jacky"
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
