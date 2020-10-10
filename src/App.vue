<template>
  <div class="app-div">
    <freelancerSection />
    <freelancerHome :data="data"/>
    <navbar  @childToParent="changeuserdata" @companydata="changecompanydata" />
    <router-view class="view"></router-view>
    <signup />
    <postJob :cdata="cdata"/>
    <profile :data="data" />
    <companyProfile :cdata="cdata"/>
    <companyhomepage :cdata="cdata"/>
    <contact />
  </div>
</template>

<script>
/*eslint-disable */
import freelancerSection from './components/freelancer/freelancerSection'
import postJob from "./components/company/postJob.vue";
import signup from "./components/signup.vue";
import navbar from "./components/navbar.vue";
import profile from "./components/freelancer/profile";
import companyProfile from "./components/company/profile.vue";
import freelancerHome from "./components/freelancer/homePage";
import companyhomepage from "./components/company/homePage.vue"
import about from "./components/about.vue"
import filed from "./components/filed.vue"
import contact from "./components/contact.vue";


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
    companyhomepage,
    contact
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
/*eslint-enable */
</script>

<style scoped>
.app-div {
  width: 100%;
  margin: auto;
  -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.mos.cms.futurecdn.net/kVHndERw4LxuWxArZouVU6.jpg");
    background-position: center;
    font-family: "Varela Round", sans-serif;
}

</style>

