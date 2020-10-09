<template>
  <div class="appDiv">
    <freelancerSection />
    <freelancerHome :data="data"/>
    <navbar  @childToParent="changeuserdata" @companydata="changecompanydata" />
    <signup />
    <postJob :cdata="cdata"/>
    <profile :data="data" />
    <companyProfile :cdata="cdata"/>
  </div>
</template>

<script>
import freelancerSection from './components/freelancer/freelancerSection'
import postJob from "./components/company/postJob.vue";
import signup from "./components/signup.vue";
import navbar from "./components/navbar.vue";
import profile from "./components/freelancer/profile";
import companyProfile from "./components/company/profile.vue";
import freelancerHome from "./components/freelancer/homePage";

export default {
  name: "App",
  components: {
    freelancerSection,
    freelancerHome,
    signup,
    navbar,
    profile,
    postJob,
    companyProfile,

  },
   data() {
    return {
      data : [],
      cdata:[]
    }
    },
  methods:{
   changeuserdata: function(value){
     this.data=value
   },
   changecompanydata: function(value){
     this.cdata=value 
   }
  }
};
</script>

<style scoped>
.appDiv {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
  background-position: center;
  font-family: "Varela Round", sans-serif;
}
</style>
