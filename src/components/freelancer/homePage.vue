<template>
  <ul>
    <form v-on:submit.prevent="applying">
      <li v-for="(post, key) in this.posts" :key="key">
        <br />
        <div class="card">
          <div class="card-header">
            {{ post.companyId }}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ post.jobTitle }}</h5>
            <p class="card-text">{{ post.Description }}</p>
            <button type="submit" id="bnt" class="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
        <br />
      </li>
    </form>
  </ul>
</template>
<script>
const axios = require("axios");
export default {
  props: ["data"],
  data() {
    return {
      posts: {},
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3008/jobs")
      .then((response) => {
        console.log("hey", response.data);
        this.posts = response.data;
      })
      .catch((err) => console.log(err));
  },
  applying() {
    const app = {
      postId: "",
      userId: "",
    };
    console.log(app)
  },
};
</script>
<style scoped>
.card {
  width: 50%;
  position: relative;
  left: 25%;
}
#bnt {
  float: right;
}
</style>
