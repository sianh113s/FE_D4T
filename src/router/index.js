import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminDashboard from "../views/AdminView/AdminDashboard.vue";
import { useConditionStore } from "../store/index.js";
import AdminBook from "@/views/AdminView/AdminBook.vue";
import AdminComment from "@/views/AdminView/AdminComment.vue";
import AdminVoucher from "@/views/AdminView/AdminVoucher.vue";

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
      path: "/admin/book",
      name: "admin_book",
      component: () => import("../views/AdminView/AdminBook.vue"), 
    },
    {
      path: "/admin/user",
      name: "admin_user",
      component: () => import("../views/AdminView/AdminUser.vue"), 
    },
    {
      path: "/admin/comment",
      name: "admin_comment",
      component: () => import("../views/AdminView/AdminComment.vue"), 
    },
    {
      path: "/admin/voucher",
      name: "admin_voucher",
      component: () => import("../views/AdminView/AdminVoucher.vue"), 
    },
    {
      path: "/admin/createbook",
      name: "createbook",
      component: () => import("../views/AdminView/CreateBook.vue"), 
    },
    {
      path: "/admin/editbook",
      name: "editbook",
      component: () => import("../views/AdminView/EditBook.vue"), 
    },
    {
      path: "/admin/deletebook",
      name: "deletebook",
      component: () => import("../views/AdminView/DeleteBook.vue"), 
    },
    {
      path: "/admin/deleteuser",
      name: "deleteuser",
      component: () => import("../views/AdminView/DeleteUser.vue"), 
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
      name: "sach",
      component: () => import("../views/BookDetail.vue"),
    },
  ],
});

export default router;
