<template>
  <!-- Default form contact -->
<div>
<div class="card">
  <div  class="card-title">
    <p class="h4 text-center mb-4">Post a new job</p>
  </div>
    <!-- Default input name -->
    <br />
    <div class="card-title">
    <!-- Default input email -->
    <label for="defaultFormContactEmailEx" class="grey-text">Job Title</label>
      </div>
    <input
      type="text"
      id="defaultFormContactEmailEx"
      class="form-control"
      v-model="offer.jobTitle"
    />

    <br />

    <!-- Default textarea message -->
    <div class="card-title">
    <label for="defaultFormContactMessageEx" class="grey-text"
      >Job description</label>
    </div>
    <textarea
      type="text"
      id="defaultFormContactMessageEx"
      class="form-control"
      rows="3"
      v-model="offer.Description"
    ></textarea>
    <div class="text-center mt-4">
      <button class="btn btn-outline-warning" v-on:click="postPost()">
        Add a new post<i class="far fa-paper-plane ml-2"></i>
      </button>
    </div>
</div>
    <div>
    <ul class="list-group" v-for="(job, key) in jobOffers" :key="key">
      <div class="listOne">
        <li class="list-group-item">
        <h6><p> Company Name : {{ cdata.Name }} </p></h6>
        </li>
        <li class="list-group-item">
        <h6><p>Job Title :{{ job.jobTitle }} </p> </h6>
        </li>
        <li class="list-group-item">
        <h6><p>Description : {{ job.Description }} </p></h6>
        </li>
        <li class="list-group-item">
        <button type="button" class="btn btn-danger">Delete</button>
        </li>
      </div>
    </ul>
  </div>
</div>

  <!-- Default form contact -->
</template>

<script>
import axios from "axios";
export default {
  props: ["cdata"],
  name: "postJob",
  data() {
    return {
      jobOffers: [],
      // all the informatino that the post gonna take.
      offer: {
        companyId: this.cdata.id,
        jobTitle: "",
        Description: "",
      },
    };
  },
  methods: {
    postPost: function() {
      let copy = { ...this.offer };
      this.jobOffers.push(copy);
      this.offer.companyId=this.cdata.id
      axios
        .post("http://127.0.0.1:3008/jobs", this.offer)
        .then((res) => console.log(res, "RES"))
        .catch((err) => console.error("company post jobs erroe", err));
    },
  },
};
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
