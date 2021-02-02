<template>
  <ul>
    <CourseContent v-for="course in courses" :course="course"></CourseContent>
  </ul>
</template>

<script>
import CourseContent from "@/components/CourseContent";

export default {
  name: 'App',
  data() {
    return {
      courses: [
        {id: 'POOP', name: 'Python OOP Programming', duration: 35},
        {id: 'BDPY', name: 'Python and big data', duration: 35}
      ]
    }
  },
  components: {
    CourseContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
