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
    if (newPage.value > 1) {
      const tmp = parseInt(newPage.value) - 1;
      newPage.value = tmp;
      emit("newPage", tmp);
    }
  };

  const incrementPage = () => {
    if (newPage.value < props.maxPage) {
      const tmp = parseInt(newPage.value) + 1;
      newPage.value = tmp;
      emit("newPage", tmp);
    }
  };

  const inputPage = () => {
    let parsedPage = parseInt(newPage.value);
    if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= props.maxPage) {
      emit("newPage", parsedPage);
    }
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
      <InputText
        class="w-[343px] rounded-none"
        v-model="newPage"
        type="text"
        variant="filled"
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
