import { defineStore } from "pinia";

export const useConditionStore = defineStore("condition", {
  state: () => ({
    isHiddenHeaderDropdown: true,
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    toggleIsHiddenHeaderDropdown() {
      this.isHiddenHeaderDropdown = !this.isHiddenHeaderDropdown;
    },
  },
});
