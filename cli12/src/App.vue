<template>
  <ul>
    <CourseContent v-for="course in courses" :key="course.id"
                   :id="course.id"
                   :name="course.name"
                   :duration="course.duration"
                   :current="course.current"
                   :popular="course.popular"
                   @toggle-current="toggleCurrentCourse"></CourseContent>
  </ul>
</template>

<script>
import CourseContent from "@/components/CourseContent";

export default {
  created() {
    this.emitter.on("toggle-popular", (id) => {
      let course = this.courses.find(course => course.id === id)
      course.popular = !course.popular
    })
  },
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
  },
  methods: {
    toggleCurrentCourse(id) {
      let course = this.courses.find(course => course.id === id)
      course.current = !course.current
    }
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
