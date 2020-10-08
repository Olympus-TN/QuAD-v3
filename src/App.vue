<template>
  <div class="appDiv">
    <freelancerHome />
    <navbar  @childToParent="changeuserdata" @companydata="changecompanydata"/>
    <signup />
    <!-- <profile /> -->
    <postJob />
    <profile :data="data" />
    <postJob />
    <companyProfile :cdata="cdata"/>
  </div>
</template>

<script>
import postJob from "./components/company/postJob.vue";
import signup from "./components/signup.vue";
import navbar from "./components/navbar.vue";
import profile from "./components/freelancer/profile";
// import postJob from "./components/company/postJob.vue";
import companyProfile from "./components/company/profile.vue";
import freelancerHome from "./components/freelancer/homePage";
export default {
  name: "App",
  components: {
    freelancerHome,
    signup,
    navbar,
    profile,
    postJob,
    // profile,
    // postJob,
    companyProfile,
  },
   data() {
    return {
      data:[],
      cdata:[]
    }
    },
  methods:{
   changeuserdata(value){
     this.data=value
   },
   changecompanydata(value){
     this.cdata=value 
   }
  }
};
</script>

<style scoped>
.appDiv {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
  background-size: cover;
  background-position: center;
  font-family: "Varela Round", sans-serif;
}
</style>
