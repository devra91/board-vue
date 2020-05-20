import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import BoardList from "../pages/board/boardList.vue";
import BoardCreate from "../pages/board/boardCreate.vue";
import BoardDetail from "../pages/board/boardDetail.vue";
import ErrorPage from "../pages/ErrorPage.vue";

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/board",
    name: "board-list",
    component: BoardList,
  },
  {
    path: "/board/create/:contentId?",
    name: "board-create",
    component: BoardCreate,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/board/detail/:contentId",
    name: "board-detail",
    component: BoardDetail,
  },
  {
    path: "*",
    component: ErrorPage,
  },
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})
