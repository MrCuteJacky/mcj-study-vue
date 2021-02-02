<template>
  <li>
    <h2>{{course.id}}</h2>
    <button @click="toggleCourseDetail">show detail</button>
    <ul v-if="detailsVisible">
      <li>{{course.name}}</li>
      <li>{{course.duration}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "CourseContent",
  props: ['course'],
  data() {
    return {
      detailsVisible: true
    }
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible
    }
  }
}
</script>

<style scoped>

</style>
