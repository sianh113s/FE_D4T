<script setup>

import HeaderAfterLogin from './components/default/HeaderAfterLogin.vue';
import FooterApp from './components/default/FooterApp.vue';
</script>

<template>
 <HeaderAfterLogin></HeaderAfterLogin>
  <router-view />
  <FooterApp></FooterApp>
</template>

<style scoped></style>
