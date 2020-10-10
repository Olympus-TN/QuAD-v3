<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">

          <router-link to="/home" class="nav-link" @click="freelancerhome">Home</router-link>

        </li>
        <li class="nav-item active">
         <router-link  to="/profile" class="nav-link" @click="freelancerprofile">Profile</router-link>
        </li>
        <li class="nav-item active">

          <router-link to="/newJob" class="nav-link">about</router-link>
        </li>
        <li class="nav-item active">
          <a class="nav-link" @click="logout">log out <span class="sr-only">(current)</span></a>

        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {

  name :"freelancernavbar",
  data() {
    return {
      
    }
  },
  methods:{
    logout(){
location.reload();
    },
    freelancerhome(){
this.$emit('freelancerhome',true)
    },
    freelancerprofile(){
      this.$emit('freelancerprofile',true)
    }
  }

};
</script>
<style scoped>

</style>
