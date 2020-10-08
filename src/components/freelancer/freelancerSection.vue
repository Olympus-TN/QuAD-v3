
<template>
  <div>
    <p>
      <router-link to="/home" class="link">HomePage</router-link>
      <router-link to="/profile" class="link">Profile</router-link>
      <router-link to="/newJob" class="link">Post a new Job</router-link>
    </p>
    <router-view></router-view>
    <homePage />
    <profile />
  </div>
</template>

<script>
import homePage from "../freelancer/homePage";
import profile from "../freelancer/profile";
export default {
  name: "freLaSec",
  components: {
    homePage,
    profile,
  },
};
</script>

<style>

</style>
