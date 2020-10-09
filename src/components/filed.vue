<template>
  <div>
     <navbar />
    <signup /> 
  </div>
</template>

<script>
import signup from "../components/signup";
import navbar from "../components/navbar.vue";
export default {
name : "filed",
components: {
    signup,
    navbar
}
}
</script>

<style scoped>

</style>