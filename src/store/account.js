import { defineStore } from "pinia";

export const filter = defineStore("filter", {
  state: () => ({
    isHiddenFilter: true,
  }),
  getters: {},
  actions: {
    toggleIsHiddenFilter() {
      this.isHiddenFilter = !this.isHiddenFilter;
    },
  },
});
