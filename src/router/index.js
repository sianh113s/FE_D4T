import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminDashboard from "../views/AdminView/AdminDashboard.vue";
import { useConditionStore } from "../store/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/registration/SignUpView.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        if (conditionStore.isLoggedIn) {
          next({ name: "home" });
        } else {
          next();
        }
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/registration/SignInView.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        if (conditionStore.isLoggedIn) {
          next({ name: "home" });
        } else {
          next();
        }
      },
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
      component: () => import("../views/account/BookCaseView.vue"),
    },
    {
      path: "/account/profile",
      name: "profile",
      component: () => import("../views/account/AccountProfileView.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();

        if (!conditionStore.isLoggedIn) {
          next({ name: "home" });
        } else {
          next();
        }
      },
    },
    {
      path: "/account/transaction-histories",
      name: "transaction-histories",
      component: () => import("../views/account/TransactionHistoriesView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/account/test.vue"),
    },
    {
      path: "/sach",
      name: "sach",
      component: () => import("../views/BookDetail.vue"),
    },
  ],
});

export default router;
