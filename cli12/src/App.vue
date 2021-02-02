<template>
  <ul>
    <CourseContent v-for="course in courses"
                   :id="course.id"
                   :name="course.name"
                   :duration="course.duration"
                   :current="true"></CourseContent>
  </ul>
</template>

<script>
import CourseContent from "@/components/CourseContent";

export default {
  name: 'App',
  data() {
    return {
      courses: [
        {id: 'POOP', name: 'Python OOP Programming', duration: 30},
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
