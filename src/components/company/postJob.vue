<template>
  <!-- Default form contact -->
  <div>
    <p class="h4 text-center mb-4">Post a new job</p>

    <!-- Default input name -->
    <label for="defaultFormContactNameEx" class="grey-text">Company id</label>
    <input
      type="text"
      id="defaultFormContactNameEx"
      class="form-control"
      v-model="offer.companyId"
    />

    <br />

    <!-- Default input email -->
    <label for="defaultFormContactEmailEx" class="grey-text">Job Title</label>
    <input
      type="text"
      id="defaultFormContactEmailEx"
      class="form-control"
      v-model="offer.jobTitle"
    />

    <br />

    <!-- Default textarea message -->
    <label for="defaultFormContactMessageEx" class="grey-text"
      >Job description</label
    >
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
    <ul>
      <li v-for="(job, key) in jobOffers" :key="key">
        {{ key }}-{{ job.companyId }} - {{ job.jobTitle }} -
        {{ job.Description }}
      </li>
    </ul>
  </div>

  <!-- Default form contact -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jobOffers: [],
      offer: {
        companyId: "",
        jobTitle: "",
        Description: "",
      },
    };
  },
  methods: {
    addNew: function() {
      let copy = { ...this.offer };
      this.jobOffers.push(copy);
    },
  
  // watch: {
  //   companyName: function(val) {
  //     console.log(val);
  //   },
  // },
  postPost: function() {
    axios
      .post("http://127.0.0.1:3008/jobs", this.offer)
      .then((res) => console.log(res, "RES"))
      .catch((err) => console.error("[cpost jobs erroe]", err));
  },
  },
};
</script>
