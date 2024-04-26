import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/account/bookcase",
      name: "bookcase",
      component: () => import("../views/BookCaseView.vue"),
    },
    {
      path: "/account/profile",
      name: "profile",
      component: () => import("../views/AccountProfileView.vue"),
    },
    {
      path: "/account/transaction-histories",
      name: "transaction-histories",
      component: () => import("../views/TransactionHistoriesView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/test.vue"),
    },
  ],
});

export default router;
