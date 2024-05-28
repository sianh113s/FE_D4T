// src/stores/PostStore.js
import { ref } from "vue";
import { defineStore } from "pinia";

const useAdminStore = defineStore("admin", () => {
  // State
  const isAdmin = ref(localStorage.getItem("isAdmin") == "true");

  // Actions
  function setIsAdmin(status) {
    isAdmin.value = status;
  }
  return {
    isAdmin,
    setIsAdmin,
  };
});

export default useAdminStore;
