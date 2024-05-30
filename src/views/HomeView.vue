<script setup>
  import HeaderBeforeLogin from "@/components/default/HeaderBeforeLogin.vue";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import ScrollToTop from "@/components/default/ScrollToTop.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import MainBanner from "@/components/home/MainBanner.vue";
  import HotBooks from "@/components/home/HotBooks.vue";
  import NewBooks from "@/components/home/NewBooks.vue";
  import TrackingBooks from "@/components/home/TrackingBooks.vue";
  import FreeBooks from "@/components/home/FreeBooks.vue";

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
      <div class="flex flex-col items-center justify-center h-auto">
        <TrackingBooks v-if="store.isLoggedIn"></TrackingBooks>
        <FreeBooks></FreeBooks>
        <HotBooks></HotBooks>
      </div>
      <div class="flex flex-col items-center justify-center h-auto">
        <NewBooks></NewBooks>
      </div>

      <div>
        <ScrollToTop></ScrollToTop>
      </div>
    </div>
    <div>
      <FooterApp></FooterApp>
    </div>
  </div>
</template>

<style scoped></style>
