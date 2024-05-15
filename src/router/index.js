import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminDashboard from "../views/admin/AdminDashboard.vue";
import { useConditionStore } from "../store/index.js";
import NapView from "@/views/nap/NapView.vue";
import PaymentView from "@/views/nap/PaymentView.vue";
import THTView from "@/views/nap/THTView.vue";

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
      path: "/sach",
      name: "Sach",
      component: () => import("../views/book/BookDetail.vue"),
      beforeEnter: (to, from, next) => {
        if (Object.keys(to.query).length > 0) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },

    {
      path: "/sach/bookContent",
      name: "Content",
      component: () => import("../views/book/BookContent.vue"),
    },
    {
      path: "/Nap",
      name: "Nap",
      component: NapView,
    },
    {
      path: "/Nap/Payment",
      name: "PaymentView",
      component: PaymentView,
    },
    {
      path: "/Nap/Payment/Tim-hieu-them",
      name: "Tim-hieu-them",
      component: THTView,
    }
  ],
});

export default router;