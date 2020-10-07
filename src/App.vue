<template>
  <div class="appDiv">

    <!-- <navbar />
    <signup /> -->
    <!-- <profile /> -->
    <!-- <postJob /> -->
    <companyProfile />
  </div>
</template>

<script>
// import signup from "./components/signup.vue";
// import navbar from "./components/navbar.vue";
// import profile from './components/Freelancer/profile.vue'
// import postJob from "./components/company/postJob.vue"
import companyProfile from "./components/company/profile.vue"
export default {
  name: "App",
  components: {
    // signup,
    // navbar,
    // profile,
    // postJob,
  companyProfile,
  },
};
</script>

<style scoped>
.appDiv {
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
  background-size: cover;
  background-position:center;
  font-family: "Varela Round", sans-serif;

}
</style>

