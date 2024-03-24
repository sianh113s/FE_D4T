<script setup>
  import Header from "@/components/Header.vue";
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Header></Header>
  <h1>This is Home View</h1>
  <RouterLink to="/about">Go to About</RouterLink>
</template>

<style scoped></style>
