<script setup>
  import { ref } from "vue";

  const props = defineProps({
    tenGoi: String,
    giaTien: String,
    soLuongSoi: String,
    handle: Function,
  });
  const valueCount = ref(0);

  const minusValueCount = () => {
    valueCount.value--;
    if (valueCount.value <= 0) {
      valueCount.value = 0;
    }

    props.handle(
      -((valueCount.value + 1) * props.soLuongSoi),
      -((valueCount.value + 1) * props.giaTien)
    );
  };
  const plusValueCount = () => {
    valueCount.value++;
    if (valueCount.value >= 100) {
      valueCount.value = 100;
    }

    props.handle(
      valueCount.value * props.soLuongSoi,
      valueCount.value * props.giaTien
    );
  };
</script>

<template>
  <div class="border-b-2 border-[#ccc]">
    <div class="flex items-center justify-center">
      <div class="left w-[110px]">
        <img
          src="../../assets/imgs/bonussoi.png"
          alt="soi_img"
        />
      </div>
      <div class="flex flex-col gap-2 right w-[255px]">
        <span class="pt-2 text-xl font-bold">{{ tenGoi }}</span>
        <div class="flex flex-col gap-2">
          <span class="pt-2"
            >Số lượng Sồi: <strong>{{ soLuongSoi }}</strong>
          </span>
          <span
            >Giá tiền: <strong>{{ giaTien }}</strong>
          </span>
          <div class="flex gap-2 pb-4">
            <span>Số lượt mua: </span>
            <div class="flex">
              <Button
                class="w-[30px] h-[30px] rounded-none"
                icon="pi pi-minus"
                @click="minusValueCount"
                :disabled="valueCount <= 0"
              />
              <InputText
                class="w-[80px] h-[30px] py-0 rounded-none"
                maxlength="3"
                type="text"
                v-model="valueCount"
              />

              <Button
                class="w-[30px] h-[30px] rounded-none"
                icon="pi pi-plus"
                @click="plusValueCount"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*  */
</style>
