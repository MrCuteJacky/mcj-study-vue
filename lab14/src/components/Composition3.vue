<template>
  <div>
    <h3>{{ course }}</h3>
    <h3>{{ price }}</h3>
    <h4>{{ courseDisplay }}</h4>
  </div>
</template>

<script>
export default {
  name: "Composition3",
  props: ["course", "price"],
  computed: {
    courseDisplay() {
      if (!this.price) {
        return `course: ${JSON.stringify(this.course)}`
      } else {
        return `course: ${JSON.stringify(this.course)}, price: ${this.price}`
      }
    }
  }
}
</script>

<style scoped>

</style>
