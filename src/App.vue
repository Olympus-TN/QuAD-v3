<template>

  <div class="appDiv">
    <companynavbar v-if="companynavbar" @companyhome="companyhome" @companyprofil="companyProfilec" @companypostjob="companypostjobc" @abouts="aboutc" />
    <freelancernavbar v-if="freelancernavbar" @freelancerhome="homec" @freelancerprofile="profile" @about="aboutc"/>
    <freelancerSection v-if="test"/>
    <freelancerHome :data="data" v-if="freelancerHome"/>
    <navbar  @childToParent="changeuserdata" @companydata="changecompanydata" v-if="landingpage"/>
    <signup v-if="landingpage"/>
    <postJob :cdata="cdata" v-if="companypostjob"/>
    <profile :data="data"  v-if="freelancerprofil" />
    <companyProfile :cdata="cdata" v-if="companyProfile"/>
    <companyhomepage :cdata="cdata" v-if="companyhomepage"/>
    <contact v-if="about" />


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
import contact from "./components/contact.vue"
import freelancernavbar from "./components/freelancer/freelancerNavbar.vue"
import companynavbar from "./components/company/companyNavbar.vue"




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
contact,
    freelancernavbar,
  companynavbar

  },
   data() {
    return {
      data : [],
      cdata:[],
            landingpage:true,
      ////Freelancer////
      test:false,
      freelancerHome:false,
      freelancernavbar:false,
      freelancerprofil:false,
      about:false,
      //company//
      companyhomepage:false,
      companyProfile:false,
      companynavbar:false,
      companypostjob:false
    }
    },
  methods:{
   changeuserdata: function(value){
     this.data=value
     this.landingpage=false
     this.freelancerHome=true
     this.freelancernavbar=true
     this.freelancerprofil=false
     this.about=false

    
   },
   changecompanydata: function(value){
     this.cdata=value 
     this.landingpage=false
     this.companynavbar=true
     this.companyhomepage=true
   },
   homec:function(value){
    if(value===true){
      this.freelancerHome=true
      this.freelancerprofil=false
         this.about=false
    }
   },
   profile:function(value){
     if(value===true){
       this.freelancerHome=false
       this.freelancerprofil=true
          this.about=false
     }
   },
   aboutc:function(value){
     if(value===true){
       this.freelancerHome=false
       this.freelancerprofil=false
       this.about=true
       this.companyProfile=false
       this.companyhome=false
       this.companypostjob=false
       
     }
   },
   companyhome:function(value){
     if(value===true){
       this.companyhomepage=true
       this.about=false
       this.companyProfile=false
       this.companypostjob=false
     }
   },
   companyProfilec:function(value){
     if(value===true){
       this.companypostjob=false
       this.companyhomepage=false
       this.about=false
       this.companyProfile=true
     }
   },
   companypostjobc:function(value){
     if(value===true){
       this.companyProfile=false
       this.about=false
       this.companypostjob=true
       this.companyhomepage=false
     }
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

