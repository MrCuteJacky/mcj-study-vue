<template>
  <li>
    <h2>{{ id }}-{{ isCurrent }}</h2>
    <button @click="toggleCourseDetail">toggle detail</button>
    <button @click="toggleCurrent">toggle current</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "CourseContent",
  props: ['id', 'name', 'duration', 'current'],
  data() {
    return {
      detailsVisible: true,
      isCurrent: true
    }
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible
    },
    toggleCurrent() {
      this.isCurrent = !this.isCurrent
    }
  }
}
</script>
<style scoped>
h2 {
  color: red;
}
</style>
