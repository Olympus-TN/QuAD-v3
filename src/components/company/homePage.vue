<template>
    <div>
<div>
    <ul class="list-group" v-for="(job, key) in jobs" :key="key" >
      <div class="listOne">
        <li class="list-group-item">
        <h6><p> Company Name : {{cdata.Name}} </p></h6>
        </li>
        <li class="list-group-item">
        <h6><p>Job Title : {{job.jobTitle}}</p> </h6>
        </li>
        <li class="list-group-item">
        <h6><p>Description :{{job.Description}}  </p></h6>
        </li>
        <li class="list-group-item">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Freelancer applied</button>
        <button type="button" class="btn btn-danger">Delete</button>
        </li>
      </div>
    </ul>
  </div>
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
      props:["cdata"],
  name: "companyhomepage",
  data () {
  return {
  jobs:[]
  }
  },
  watch:{
   cdata(newv,prev){
       console.log(prev,newv)
       axios
        .get("http://127.0.0.1:3008/home")
        .then((res) => {
            var result=[]
            for(var i=0;i<res.data.length;i++){
                if((res.data[i].companyId*1)===this.cdata.id){
                    result.push(res.data[i])
                }
            }
            this.jobs=result
        })
        .catch((err) => console.error("company post jobs erroe", err));
  }
   }
}
</script>
<style scoped>
.card, .listOne {
margin-left: 25%;
margin-top: 1%;
margin-bottom: 5px;;
padding: 3%;
width: 50%;
}

</style>
