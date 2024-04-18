<script setup>
  import { ref } from "vue";
  const searchValue = ref("");
</script>

<template>
  <div>
    <header class="">
      <div class="h-[80px] flex justify-between px-6 header__inner">
        <div class="left">
          <img
            class="w-[167px] h-[48px]"
            src="../../assets/imgs/logo-dai.png"
            alt="Logo"
          />
        </div>
        <div class="middle">
          <ul class="flex gap-[50px] items-center">
            <li class="p-4 cursor-pointer">
              Thể loại
              <i
                class="font-thin pi pi-chevron-down"
                style="color: black"
              ></i>
            </li>
            <li class="p-4 cursor-pointer">Sách mới nhất</li>
            <li class="p-4 cursor-pointer">Hot</li>
            <li class="p-4 cursor-pointer">Nạp sồi</li>
            <li>
              <div class="flex flex-wrap gap-3 card justify-content-center">
                <IconField iconPosition="left">
                  <InputIcon class="pi pi-search"> </InputIcon>
                  <InputText
                    class="rounded-[50px]"
                    v-model="searchValue"
                    placeholder="Search"
                  />
                </IconField>
              </div>
            </li>
          </ul>
        </div>
        <div class="items-center gap-3 right">
          <Button
            class="rounded-[50px] cursor-pointer"
            label="Đăng ký"
            severity="secondary"
            outlined
          />
          <Button
            class="rounded-[50px] cursor-pointer"
            label="Đăng nhập"
            outlined
          />
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
  .left,
  .middle,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header__inner {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }
</style>
