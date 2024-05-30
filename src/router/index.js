import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminDashboard from "../views/admin/AdminDashboard.vue";
import { useConditionStore } from "../store/index.js";
import NapView from "@/views/nap/NapView.vue";
import PaymentView from "@/views/nap/PaymentView.vue";
import SearchView from "@/views/search/SearchView.vue";
import THTView from "@/views/nap/THTView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import useAdminStore from "@/store/admin";

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
      beforeEnter: (to, from, next) => {
        const adminStore = useAdminStore();
        if (adminStore.isAdmin) {
          next({ name: "admin" });
        } else {
          next();
        }
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminDashboard,
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/book",
      name: "admin_book",
      component: () => import("../views/admin/AdminBook.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/user",
      name: "admin_user",
      component: () => import("../views/admin/AdminUser.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/comment",
      name: "admin_comment",
      component: () => import("../views/admin/AdminComment.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/voucher",
      name: "admin_voucher",
      component: () => import("../views/admin/AdminVoucher.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/createbook",
      name: "createbook",
      component: () => import("../views/admin/CreateBook.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/editbook",
      name: "editbook",
      component: () => import("../views/admin/EditBook.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/deletebook",
      name: "deletebook",
      component: () => import("../views/admin/DeleteBook.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
    {
      path: "/admin/editVoucher",
      name: "editvoucher",
      component: () => import("../views/admin/EditVoucher.vue"),
      beforeEnter: (to, from, next) => {
        const conditionStore = useConditionStore();
        const adminStore = useAdminStore();

        if (conditionStore.isLoggedIn && adminStore.isAdmin) {
          next();
        } else {
          next({ name: "home" });
        }
      },
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
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    { path: "/:catchAll(.*)", component: NotFoundView },
  ],
});

export default router;
