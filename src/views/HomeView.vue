<script setup>
  import HeaderBeforeLogin from "@/components/default/HeaderBeforeLogin.vue";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import MainBanner from "@/components/landingPageComponents/MainBanner.vue";
  import HotBooks from "@/components/landingPageComponents/HotBooks.vue";
  import NewBooks from "@/components/landingPageComponents/NewBooks.vue";

  import { RouterLink, RouterView } from "vue-router";

  import { useCoinsStore, useConditionStore } from "@/store";
  import { onMounted } from "vue";

  const store = useConditionStore();

  const coinsStore = useCoinsStore();

  onMounted(coinsStore.setCoins);
</script>

<template>
  <div>
    <div>
      <HeaderBeforeLogin v-if="!store.isLoggedIn"></HeaderBeforeLogin>
      <HeaderAfterLogin v-else></HeaderAfterLogin>
    </div>
    <div>
      <MainBanner></MainBanner>
      <div class="flex flex-col justify-center items-center h-auto">
        <HotBooks></HotBooks>
      </div>
      <div class="flex flex-col justify-center items-center h-auto">
        <NewBooks></NewBooks>
      </div>
    </div>
    <div>
      <FooterApp></FooterApp>
    </div>
  </div>
</template>

<style scoped></style>
