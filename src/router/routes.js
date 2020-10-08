import Vue from "vue";
import Router from "vue-router";
import filed from "../components/filed.vue";
import home from "../components/freelancer/homePage.vue"
import profile from "../components/freelancer/profile.vue";
import postJob from "../components/company/postJob.vue";
// import Jobs from "../components/company/homePage.vue";
Vue.use(Router)

export default new Router ({
    routes : [
        {path: '/', component : filed},
        {path : '/home',component :home },
        {path : '/profile',component : profile},
        {path : '/newJob',component : postJob}
    ]
})