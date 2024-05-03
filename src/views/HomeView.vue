<script setup>
import HeaderBeforeLogin from "@/components/default/HeaderBeforeLogin.vue";
import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
import FooterApp from "@/components/default/FooterApp.vue";
import MainBanner from "@/components/landingPageComponents/MainBanner.vue";
import NewBooks from "@/components/landingPageComponents/NewBooks.vue";

import {
    RouterLink,
    RouterView
} from "vue-router";
</script>

<template>
    <HeaderBeforeLogin></HeaderBeforeLogin>

    <!-- <NewBooks></NewBooks> -->
    <HeaderAfterLogin></HeaderAfterLogin>
    <h1>This is Home View</h1>
    <RouterLink to="/about">Go to About</RouterLink>
    <FooterApp></FooterApp>
</template>

<style scoped></style>