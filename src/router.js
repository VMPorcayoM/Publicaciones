import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Error from "@/views/Error";
import PostDetail from "@/views/PostDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
        path: '/posts/:id',
        name:'post-detail',
        component:  PostDetail
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    }
  ],
});
