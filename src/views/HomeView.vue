<script setup>
  import HeaderBeforeLogin from "@/components/default/HeaderBeforeLogin.vue";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  // import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <HeaderBeforeLogin></HeaderBeforeLogin>
  <HeaderAfterLogin></HeaderAfterLogin> -->
  <h1>This is Home View</h1>
  <RouterLink to="/about">Go to About</RouterLink>
  <RouterLink to="/admin">Go to Admin</RouterLink>
  <FooterApp></FooterApp>
</template>

<style scoped></style>
