<template>
  <div id="app">
    <p>
       <router-link to="/" class="link"></router-link>
        <!-- <router-link to="/home" class="link">HomePage</router-link>
        <router-link to="/profile" class="link">Profile</router-link>
        <router-link to="/newJob" class="link">Post a new Job</router-link> -->

    
  </p>
  <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  },
};
</script>

<style scoped>
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
  background-size: cover;
  background-position: center;
  font-family: "Varela Round", sans-serif;
}
</style>
