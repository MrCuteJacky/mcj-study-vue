<template>
  <div>
    <h1>form practice</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: course.idValid === 0}">
        <label for="course-id">id:</label>
        <input id="course-id" type="text" v-model="course.id" @blur="validateId"/>
        <span class="error" v-if="course.idValid === 0">The course id can not be empty</span>
      </div>
      <div class="form-control">
        <label for="course-name">name:</label>
        <input id="course-name" type="text" v-model="course.name"/>
      </div>
      <div class="form-control">
        <label for="course-duration">duration:</label>
        <input id="course-duration" type="number" v-model.number="course.duration"/>
      </div>
      <div class="form-control">
        <label for="course-category">category:</label>
        <select id="course-category" v-model="course.category">
          <option v-for="courseCategoryOption in courseCategoryOptions" :key="courseCategoryOption">
            {{ courseCategoryOption }}
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>equipment:</label>
        <span v-for="courseEquipmentOption in courseEquipmentOptions" :key="courseEquipmentOption">
          <input :id="courseEquipmentOption" type="checkbox" :name="courseEquipmentOption" :value="courseEquipmentOption" v-model="course.equipment"/><label :for="courseEquipmentOption">{{ courseEquipmentOption }}</label>
        </span>
      </div>
      <div class="form-control">
        <label>location:</label>
        <span v-for="courseLocationOption in courseLocationOptions" :key="courseLocationOption">
          <input :id="courseLocationOption" type="radio" :name="courseLocationOption" :value="courseLocationOption" v-model="course.location"/><label :for="courseLocationOption">{{ courseLocationOption }}</label>
        </span>
      </div>
      <button>submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  components: {},
  data() {
    return {
      courseCategoryOptions: ["java", "C#", "Python", "JS"],
      courseEquipmentOptions: ["arduino", "webcam", "internet"],
      courseLocationOptions: ["taipei", "taichung", "kaohsiung"],
      course: {
        id: "",
        name: "",
        duration: "",
        category: "java",
        equipment: [],
        location: "",
        rememberMe: false,
        idValid: -1
      }
    }
  },
  methods: {
    validateId() {
      this.course.idValid = this.course.id.trim() === "" ? 0 : 1
    },
    submitForm(event) {
      console.log("form submitted", event, this.course)
      this.course = {}
    }
  }
}
</script>

<style scoped>
.form-control {
  boder: 2px;
  margin: 0.5rem 0;
}
.form-control > label:first-child {
  display: inline-block;
  width: 100px;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label {
  color: red;
}
.form-control.invalid span {
  color: red;
}
</style>
