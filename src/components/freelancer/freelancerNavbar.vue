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
          <router-link to="/freelancer/homepage" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item active">
         <router-link  to="/profile" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/freelancer/applications" class="nav-link">application</router-link>
        </li>
        <li class="nav-item active">
          <a class="nav-link">log out <span class="sr-only">(current)</span></a> 
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name:"freelancerNavbar"
};
</script>
<style scoped>

</style>
