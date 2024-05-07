import { defineStore } from "pinia";

export const useConditionStore = defineStore("condition", {
  state: () => ({
    isHiddenHeaderDropdown: true,
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  }),
  getters: {},
  actions: {
    setLoggedIn() {
      this.isLoggedIn = true;
    },
    toggleIsHiddenHeaderDropdown() {
      this.isHiddenHeaderDropdown = !this.isHiddenHeaderDropdown;
    },
  },
});
