<template>
  <section class="data">
    <h3>data</h3>
    <h4>name: {{ name }}</h4>
  </section>
  <section class="ref">
    <h3>ref</h3>
    <h4>Name: {{ currentName }}</h4>
    <h4>Age: {{ currentAge }}</h4>
    <h4>user1: {{ currentUser1.name }}, {{ currentUser1.age }}</h4>
    <h4>user2: {{ currentUser2.name }}, {{ currentUser2.age }}</h4>
    <h4>user1Ref: {{ currentUser1Ref.name }}, {{ currentUser1Ref.age }}</h4>
  </section>
  <section class="reactive">
    <h3>reactive</h3>
    <h4>user3: {{ currentUser3.name }}, {{ currentUser3.age }}</h4>
    <h4>user3: {{ currentUser3Name }}, {{ currentUser3Age }}</h4>
  </section>
</template>

<script>
import {ref, reactive, isRef, isReactive, toRefs} from "@vue/reactivity";

export default {
  name: "Composition1",
  setup() {
    const currentName = ref("Jacky")
    const currentAge = ref(18)
    let user1 = {name: "Mary", age: 19}
    const user1Ref = toRefs(user1)
    const user2 = ref({name: "Mary", age: 19})
    const user3 = reactive({name: "Jhon", age: 19})

    console.log(`user1 isRef? ${isRef(user1)}`)
    console.log(`user1 isReactive? ${isReactive(user1)}`)

    console.log(`user2 isRef? ${isRef(user2)}`)
    console.log(`user2 isReactive? ${isReactive(user2)}`)

    console.log(`user3 isRef? ${isRef(user3)}`)
    console.log(`user3 isReactive? ${isReactive(user3)}`)

    setTimeout(() => {
      currentName.value = "Jacky(change)"
      user1 = {name: "Mary(change)", age: 20}
      user2.value = {name: "Mary(change)", age: 20}
      user3.name = "Jhon(change)"
      user3.age = 20
      user1Ref.value.name = "Mary(change)"
    }, 3000)
    return {
      currentName: currentName,
      currentAge: currentAge,
      currentUser1: user1,
      currentUser2: user2,
      currentUser3: user3,
      currentUser3Name: user3.name,
      currentUser3Age: user3.age,
      currentUser1Ref: user1Ref
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

section.reactive {
  background-color: #42b983;
}
</style>
