<template>
  <CourseForm @add-course="addCourse"></CourseForm>
  <ul>
    <CourseContent v-for="course in courses" :key="course.id"
                   :id="course.id"
                   :name="course.name"
                   :duration="course.duration"
                   :current="course.current"
                   :popular="course.popular"
                   @toggle-current="toggleCurrentCourse"
                   @remove-current="removeCurrentCourse"></CourseContent>
  </ul>
</template>

<script>
import CourseContent from "@/components/CourseContent";
import CourseForm from "@/components/CourseForm";

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
    CourseContent,
    CourseForm
  },
  methods: {
    toggleCurrentCourse(id) {
      let course = this.courses.find(course => course.id === id)
      course.current = !course.current
    },
    addCourse(id, name, duration) {
      this.courses.push({id: id, name: name, duration: duration})
    },
    removeCurrentCourse(id) {
      let index = this.courses.findIndex(course => course.id === id)
      this.courses.splice(index, 1)
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
