import http from "@/api/http-common";
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

export const useCoinsStore = defineStore("coins", {
  state: () => ({
    coins: 0,
  }),
  getters: {},
  actions: {
    async setCoins() {
      const response = await http.get(
        "http://localhost:3000/v1/api/transaction/coins"
      );
      this.coins = response.data.metadata?.coins;
    },
  },
});
