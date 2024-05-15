<script setup>
  import router from "@/router";
  import { ref } from "vue";

  const props = defineProps({
    page: Number,
    maxPage: Number,
  });

  const emit = defineEmits(["newPage"]);

  const newPage = ref(props.page);

  const decrementPage = () => {
    newPage.value -= 1;
    emit("newPage", newPage.value);
  };

  const incrementPage = () => {
    newPage.value += 1;
    emit("newPage", newPage.value);
  };

  const goToHomePage = () => {
    router.push({ path: "/" });
  };
</script>

<template>
  <div>
    <div
      class="w-[1029px] mb-[50px] flex items-center justify-center border border-[#ccc] rounded-[50px] overflow-hidden"
    >
      <Button
        class="w-[343px] rounded-none"
        label=""
        icon="pi pi-angle-double-left"
        :disabled="page <= 1"
        @click="decrementPage"
      />
      <Button
        class="w-[343px] rounded-none"
        icon="pi pi-home"
        severity="secondary"
        label="Trang chủ"
        @click="goToHomePage"
      />
      <Button
        class="w-[343px] rounded-none"
        label=""
        icon="pi pi-angle-double-right"
        iconPos="right"
        :disabled="page >= maxPage"
        @click="incrementPage"
      />
    </div>
  </div>
</template>

<style scoped>
  /*  */
</style>
