<template>
  <div>
    <h1>form validation using vuelidate</h1>
    <div class="form-control">
      <label for="name">Name: </label>
      <input id="name" type="text" placeholder="name" v-model="$v.name.$model"/>
      <strong class="error">
        <em v-for="(error, index) of $v.name.$errors" :key="index">{{ error.$message }}</em>
      </strong>
    </div>
    <div class="form-control">
      <label for="email">Email: </label>
      <input id="email" type="text" placeholder="email" v-model.trim="$v.email.$model" @blur="$v.email.$touch"/>
      <strong class="error">
        <em v-for="(error, index) of $v.email.$errors" :key="index">{{ error.$message }}</em>
      </strong>
    </div>
  </div>
</template>

<script>
import {email, required} from "@vuelidate/validators";

export default {
  name: "VuelidateExample",
  data() {
    return {
      email: "",
      name: ""
    }
  },
  validations() {
    return {
      name: {required},
      email: {required, email}
    }
  },
  methods: {}
}
</script>

<style scoped>
.form-control > label:first-child {
  font-weight: bold;
  font-size: 1em;
  padding: 5px;
  display: inline-block;
  margin: 10px 0 5px 0;
  width: 100px;
  text-align: right;
}

.form-control > input {
  border: none;
  outline: none;
  border-bottom: 1px solid #42b983;
  font-size: 1em;
  padding: 5px;
  display: inline-block;
  margin: 10px 0 5px 0;
}
.form-control > input.invalid {
  border-bottom: 1px solid red;
}

.form-control .error {
  color: red;
}
</style>
