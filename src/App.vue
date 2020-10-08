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

export default {
  name: "App",
  components: {

  },
   data() {
    return {
      data : [],
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
