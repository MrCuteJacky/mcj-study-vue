<template>
  <form>
    <div>
      <label>id</label>
      <input type="text" v-model="inputId" />
    </div>
    <div>
      <label>name</label>
      <input type="text" v-model="inputName" />
    </div>
    <div>
      <label>duration</label>
      <input type="text" v-model="inputDuration" />
    </div>
    <button @click.prevent="addCourse">add course</button>
  </form>
</template>

<script>
export default {
  name: "CourseForm",
  emits: {
    'add-course'(id, name, duration) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing");
        return false;
      }
      if (name) {
        return true;
      } else {
        console.warn("name is missing");
        return false;
      }
      if (duration) {
        return true;
      } else {
        console.warn("duration is missing");
        return false;
      }
    }
  },
  data() {
    return {
      inputId: '',
      inputName: '',
      inputDuration: ''
    }
  },
  methods: {
    addCourse() {
      this.$emit('add-course', this.inputId, this.inputName, this.inputDuration)
    }
  }
}
</script>

<style scoped>
</style>
