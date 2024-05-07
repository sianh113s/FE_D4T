<script setup>
  import HeaderBeforeLogin from "@/components/default/HeaderBeforeLogin.vue";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import { useCoinsStore, useConditionStore } from "@/store";
  import { onMounted } from "vue";

  const store = useConditionStore();

  const coinsStore = useCoinsStore();

  onMounted(coinsStore.setCoins);
</script>

<template>
  <div>
    <HeaderBeforeLogin v-if="!store.isLoggedIn"></HeaderBeforeLogin>
    <HeaderAfterLogin v-else></HeaderAfterLogin>
    <h1>This is Home View</h1>
    <RouterLink to="/admin">Go to Admin</RouterLink>
    <FooterApp></FooterApp>
  </div>
</template>

<style scoped></style>
