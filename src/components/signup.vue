<template>
  <!-- ===========================================  Welcoming text  =========================================== -->

  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6">
      <p id="welcome">
        Welcome to the sQuAD ! <br /><br />
        Our objectiv is to connect the dots between developpers and companies
        striving for awesome people like YOU !<br />
        What are you waiting for? <br />
        Create you account right now and let the world see your amazing skills.
      </p>
    </div>

    <!-- ===========================================  Freelancer signup  =========================================== -->
    <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="container">
        <div div v-if="userSignup">
          <form v-on:submit.prevent="signupuserrequest" class="form-signup">
            <div class="text-center mb-4">
              <h1 class="h3 mb-3 font-weight-normal">
                You don't have account? create one. It's free
              </h1>

              <button
                id="userSignup"
                type="button"
                class="btn btn-outline-primary"
              >
                Freelancer
              </button>
              <button
                id="companySignup"
                type="button"
                class="btn btn-outline-primary"
              >
                Company
              </button>
              <label id="userMsg" for="label-name"
                >Sign up as a Freelancer</label
              >
            </div>

            <label for="label-name">Your name</label>
            <div class="form-label-group">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
                required
                autofocus
                v-model="userName"
              />
            </div>

            <label for="label-email">Your Email</label>
            <div class="form-label-group">
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Your Email"
                required
                autofocus
                v-model="userEmail"
              />
            </div>

            <label for="label-password">Password</label>
            <div class="form-label-group">
              <input
                type="password"
                id="label-password"
                class="form-control"
                placeholder="Password"
                required
                v-model="userPassword"
              />
            </div>

            <label for="label-password">Confirm password</label>
            <div class="form-label-group">
              <input
                type="password"
                id="label-password"
                class="form-control"
                placeholder="Confirme password"
                required
                v-model="userCpassword"
              />
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <!-- ===========================================  company signup  =========================================== -->

        <div v-if="comapnysignup">
          <form
            v-on:submit.prevent="signupcompanyrequest"
            class="comapnysignup"
          >
            <div class="text-center mb-4">
              <h1 class="h3 mb-3 font-weight-normal">
                You don't have account? create one. It's free
              </h1>

              <button id="userSignup" type="button" class="btn btn-primary">
                Freelancer
              </button>
              <button id="companySignup" type="button" class="btn btn-primary">
                Company
              </button>
              <label id="companyMsg" for="label-name"
                >Sign up as a Company</label
              >
            </div>

            <label for="label-name">Company name</label>
            <div class="form-label-group">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Company name"
                required
                autofocus
                v-model="companyName"
              />
            </div>

            <label for="label-email">Company email</label>
            <div class="form-label-group">
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Your Company email"
                required
                autofocus
                v-model="comapnyEmail"
              />
            </div>

            <label for="label-password">Password</label>
            <div class="form-label-group">
              <input
                type="password"
                id="label-password"
                class="form-control"
                placeholder="Password"
                required
                v-model="comapnyPassword"
              />
            </div>

            <label for="label-password">Confirm password</label>
            <div class="form-label-group">
              <input
                type="password"
                id="label-password"
                class="form-control"
                placeholder="Confirme password"
                required
                v-model="companyCpassword"
              />
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      // this two lines for the switch between the company signup and freelancer signup.
      comapnysignup: false,
      userSignup: true,

      // this lines for the freelancer signup.
      userName: "",
      userEmail: "",
      userPassword: "",
      userCpassword: "",

      // this lines for the company signup.
      companyName: "",
      comapnyEmail: "",
      comapnyPassword: "",
      companyCpassword: "",

      // this list gonna take the all informatyion for the company and freelancer.
      freelancerList: [],
      companyList: [],
    };
  },

  methods: {
    // addFreelancer: function() {
    //   const freelancer = {
    //     userName: this.userName,
    //     userEmail: this.userEmail,
    //     userPassword: this.userPassword,
    //     userCpassword: this.userCpassword,
    //   };
    //   // check !
    //   console.log(freelancer);

    //   axios
    //     .post("http://127.0.0.1:3008/signup", freelancer)
    //     .then((response) => console.log("freelancer SignUp", response.data))
    //     .catch((error) => console.log(error));
    // },
    // ontest: function() {
    //   console.log("test");
    // },
    // addCompany: function() {
    //   const company = {
    //     companyName: this.companyName,
    //     comapnyEmail: this.comapnyEmail,
    //     comapnyPassword: this.comapnyPassword,
    //     comapnyCpassword: this.comapnyCpassword,
    //   };
    //   // check !
    //   console.log(company);
    // },

    signupuser() {
      console.log("w");
      this.comapnysignup = false;
      this.userSignup = true;
    },
    signupcompany() {
      console.log("w");
      this.comapnysignup = true;
      this.userSignup = false;
    },
    signupcompanyrequest() {
      axios({
        method: "post",
        url: "http://localhost:3008/signup/company",
        data: {
          ImageSrc: null,
          Name: this.companyName,
          Email: this.comapnyEmail,
          password: this.comapnyPassword,
          Location: null,
          PhoneNumber: null,
        },
      }).then((data) => {
        console.log(data);
      });
    },
    signupuserrequest() {
      console.log(1);
      axios({
        method: "post",
        url: "http://localhost:3008/signup",
        data: {
          Avatar: "",
          FirstName: this.userName,
          LastName: "",
          Email: this.userEmail,
          Password: this.userPassword,
          PhoneNumber: null,
          Description: "",
          Age: null,
          Skills: null,
        },
      }).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
  padding-top: 30px;
  border-radius: 5%;
  background-color: white;
}

#userSignup {
  margin: 10px;
}

#companySignup {
  margin: 10px;
}

.container {
  width: 450px;
}

#companyMsg {
  font-size: 30px;
}

#userMsg {
  font-size: 30px;
}

#welcome {
  padding-top: 100px;
  padding-left: 32px;
  color: #f8f9f9;
  font-size: 31px;
}
.row {
  padding-top: 70px;
}
</style>
