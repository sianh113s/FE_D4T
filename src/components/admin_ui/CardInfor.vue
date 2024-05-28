<script setup>
  import { ref } from "vue";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      required: true,
    },
    counter: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="">
    <div class="p-[25px] flex gap-[10px] rounded-[15px] border border-[#ccc]">
      <div class="flex flex-col gap-2 left">
        <span class="text-[#64748b] font-semibold">{{ props.title }}</span>
        <span class="text-[#60c55e] font-bold text-lg">{{
          props.counter || 0
        }}</span>
        <span class="text-[#64748b] font-light">{{ props.desc }}</span>
      </div>
      <div class="right">
        <Button
          :icon="props.icon"
          :severity="props.severity || 'success'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*  */
</style>
