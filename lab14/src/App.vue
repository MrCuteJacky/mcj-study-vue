<template>
  <Composition1 v-if="false"></Composition1>
  <Composition2></Composition2>
</template>

<script>

import Composition1 from "@/components/Composition1";
import Composition2 from "@/components/Composition2";

export default {
  name: 'App',
  components: {
    Composition1,
    Composition2
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
