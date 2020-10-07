<template>
  <!-- Default form contact -->
  <div>
    <p class="h4 text-center mb-4">Post a new job</p>

    <!-- Default input name -->
    <label for="defaultFormContactNameEx" class="grey-text">Company name</label>
    <input
      type="text"
      id="defaultFormContactNameEx"
      class="form-control"
      v-model="offer.companyName"
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
      v-model="offer.jobDescription"
    ></textarea>

    <div class="text-center mt-4">
      <button class="btn btn-outline-warning" v-on:click="addNew()">
        Add a new post<i class="far fa-paper-plane ml-2"></i>
      </button>
    </div>
     <ul>
    <li v-for="(job,key) in jobOffers" :key="key">
        {{key}}-{{ job.companyName }} - {{job.jobTitle}} - {{job.jobDescription}}
    </li>
  </ul>
  </div>
   
  <!-- Default form contact -->
</template>

<script>
export default {
  data() {
    return {
      jobOffers : [],
      offer: {
        companyName: "",
        jobTitle: "",
        jobDescription: "",
      },
    };
  },
  methods: {
    addNew: function() {
      let copy={...this.offer}
      this.jobOffers.push(copy);
    },
  },
  // watch: {
  //   companyName: function(val) {
  //     console.log(val);
  //   },
  // },
};
</script>
