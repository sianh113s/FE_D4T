import { defineStore } from "pinia";

export const useConditionStore = defineStore("condition", {
  state: () => ({
    isHiddenHeaderDropdown: true,
  }),
  getters: {},
  actions: {
    toggleIsHiddenHeaderDropdown() {
      this.isHiddenHeaderDropdown = !this.isHiddenHeaderDropdown;
    },
  },
});
