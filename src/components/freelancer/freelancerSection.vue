
<template>
  <div>
    <router-view>
      <navbar />
      
    </router-view>
  </div>
</template>

<script>
import navbar from "./freelancerNavbar"
// import homePage from "../freelancer/homePage";
// import profile from "../freelancer/profile";
export default {
  name: "freLaSec",
  components: {
    navbar,
    // homePage,
    // profile,
  },
};
</script>

<style>

</style>
