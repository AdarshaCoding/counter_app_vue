import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import About from "../About.vue";
import Users from "../Users.vue";
import UserProfile from "../UserProfile.vue";
import UserPosts from "../UserPosts.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  // {
  //   path: "/users/:id",
  //   component: Users,
  // },
  //Nested routes
  {
    path: "/users",
    component: Users,
    children: [
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "posts",
        component: UserPosts,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
