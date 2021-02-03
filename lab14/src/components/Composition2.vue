<template>
  <section>
    <input type="text" @change="setCourseId" />
    <input type="text" @change="setCourseName" />
    <h4>{{ course }}, price: {{ price }}</h4>
    <button @click="extraDuration">increase</button>
    <h4>{{courseDisplayName}}</h4>
  </section>
</template>

<script>
import {computed, reactive, ref} from "@vue/reactivity";

export default {
  name: "Composition2",
  setup() {
    /* data. */
    const course = reactive({id: "POOP", name: "hello poop", duration: 35})
    const price = ref(24000)

    /* computed. */
    const courseDisplayName = computed(() => {
      return course.id + " " + course.name
    })

    /* methods. */
    function extraDuration() {
      course.duration += 7
      price.value += 5000
    }
    const setCourseId = (event) => {
      course.id = event.target.value
    }
    const setCourseName = function(event) {
      course.name = event.target.value
    }

    return {
      course, price, extraDuration, courseDisplayName, setCourseId, setCourseName
    }
  }
}
</script>

<style scoped>

</style>
