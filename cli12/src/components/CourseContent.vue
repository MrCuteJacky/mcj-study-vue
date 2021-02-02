<template>
  <li>
    <h2>{{ id }}-{{ current }}-{{ popular }}</h2>
    <button @click="toggleCourseDetail">toggle detail</button>
    <button @click="toggleCurrent">toggle current</button>
    <button @click="togglePopular">toggle popular</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "CourseContent",
  // emits: ['toggle-current'],
  emits: {
    'toggle-current'(id) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing");
        return false;
      }
    }
  },
  // props: ['id', 'name', 'duration', 'current'],
  props: {
    id: {type: String, required: true},
    name: {type: String, required: true},
    duration: {
      type: Number, required: true, validator(value) {
        return value > 7
      }
    },
    current: {type: Boolean, required: false, default: false},
    popular: {type: Boolean, required: false, default: false}
  },
  data() {
    return {
      detailsVisible: true
    }
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible
    },
    toggleCurrent() {
      this.$emit('toggle-current', this.id)
    },
    togglePopular() {
      this.emitter.emit("toggle-popular", this.id)
    }
  }
}
</script>
<style scoped>
h2 {
  color: red;
}

button {
  background-color: bisque;
}
</style>
