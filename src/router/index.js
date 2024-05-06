import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminDashboard from "../views/AdminView/AdminDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/registration/SignUpView.vue"),
    },

    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/registration/SignInView.vue"),
    },

    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/admin",
      name: "admin",
      component: AdminDashboard,
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
    {
      path: "/sach",
      name: "Sách",
      component: () => import("../views/BookDetail.vue"),
    },
  ],
});

export default router;
