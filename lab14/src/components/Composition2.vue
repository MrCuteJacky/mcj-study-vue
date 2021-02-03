<template>
  <section>
    <input type="text" v-model="course.id"/>
    <input type="text" v-model="course.name"/>
    <h4>{{ course }}, price: {{ price }}</h4>
    <button @click="extraDuration">increase</button>
    <h4>{{ courseDisplayName }}</h4>
    <h4>{{ courseDisplayNameFunction() }}</h4>
    <input type="text" v-model="courseDisplayName"/>
  </section>
</template>

<script>
import {computed, reactive, ref} from "@vue/reactivity";
import {watch} from "@vue/runtime-core";

export default {
  name: "Composition2",
  setup() {
    /* data. */
    const course = reactive({id: "POOP", name: "hello poop", duration: 35})
    const price = ref(24000)

    /* computed. */
    const courseDisplayName = computed({
      get() {
        // console.log("computed courseDisplayName")
        return course.id + "," + course.name
      },
      set(courseDisplayName) {
        course.id = courseDisplayName.split(",")[0]
        course.name = courseDisplayName.split(",")[1]
      }
    })

    /* watch */
    watch(price, (newValue, oldValue) => {
      console.log(`1 price goes from ${newValue} to ${oldValue}`)
    })
    watch([courseDisplayName, price], (newValue, oldValue) => {
      console.log(`2 courseDisplayName goes from ${newValue[0]} to ${oldValue[0]}`)
      console.log(`2 price goes from ${newValue[1]} to ${oldValue[1]}`)
    })

    /* methods. */
    function extraDuration() {
      course.duration += 7
      price.value += 5000
    }

    const courseDisplayNameFunction = () => {
      // console.log("courseDisplayNameFunction")
      return course.id + "," + course.name
    }

    return {
      course, price, extraDuration, courseDisplayName, courseDisplayNameFunction
    }
  }
}
</script>

<style scoped>

</style>
