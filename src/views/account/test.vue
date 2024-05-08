<script setup lang="ts">
  import { ref } from "vue";
  import { useConditionStore } from "@/store";

  const store = useConditionStore();
</script>

<template>
  <div
    @click="store.toggleIsHiddenHeaderDropdown"
    class="py-5 px-3 pb-[24px] cursor-pointer flex items-center gap-1"
  >
    <i
      class="pi pi-filter"
      style="color: black"
    ></i>
  </div>

</template>

<style scoped>
  
</style>
