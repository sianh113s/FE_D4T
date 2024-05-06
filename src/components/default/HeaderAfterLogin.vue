<script setup>
  import { RouterLink } from "vue-router";

  import { useConditionStore } from "@/store";

  import { ref } from "vue";
  const searchValue = ref("");

  const store = useConditionStore();
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
                class="pi pi-chevron-down"
                style="color: black"
              ></i>
            </li>
            <li class="p-4 cursor-pointer">Sách mới nhất</li>
            <li class="p-4 cursor-pointer">Hot</li>
            <li class="p-4 cursor-pointer">
              <RouterLink to="/nap">Nạp sồi</RouterLink>
            </li>
            <li>
              <div class="flex flex-wrap gap-3 card justify-content-center">
                <IconField iconPosition="left">
                  <InputIcon class="pi pi-search"/>
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

        <!-- RIGHT -->
        <div class="relative items-center gap-4 right">
          <div class="px-3 py-5 cursor-pointer">
            <i
              class="text-[28px] pi pi-bell"
              style="color: black"
            ></i>
          </div>
          <div
            @click="store.toggleIsHiddenHeaderDropdown"
            class="py-5 px-3 pb-[24px] cursor-pointer flex items-center gap-1"
          >
            <!-- <img
              class="w-[30px] h-[30px]"
              src="../assets/svg/circle-user-regular.svg"
              alt=""
            /> -->
            <img
              class="w-[40px] h-[40px] rounded-[50px]"
              src="../../assets/imgs/avatar_demo.png"
              alt=""
            />
            <i
              class="pi pi-chevron-down"
              style="color: black"
            ></i>
          </div>

          <div
            :class="{ hidden: store.isHiddenHeaderDropdown }"
            class="absolute top-[80px] right-0 z-40"
          >
            <div class="tool-menu rounded-md pt-3 w-[254px] bg-[#fff]">
              <div
                class="flex items-center tooltip-top p-[15px] justify-between"
              >
                <div class="flex flex-col t-left">
                  <span class="text-xl font-bold text-[#334155]"
                    >Dương Dũng</span
                  >
                  <div class="flex items-center gap-3 pt-2">
                    <i
                      class="pi pi-credit-card"
                      style="color: #f3c201"
                    ></i
                    ><span class="text-[#f3c201] font-semibold">10000</span>
                  </div>
                </div>
                <div class="t-right">
                  <img
                    class="w-[50px] h-[50px] rounded-[50px]"
                    src="../../assets/imgs/avatar_demo.png"
                    alt="circle-user-regular"
                  />
                </div>
              </div>
              <div class="tooltip-middle">
                <div class="px-[15px] flex items-center justify-center">
                  <Button
                    class="rounded-[50px] w-full"
                    label="Nạp thêm sồi"
                  />
                </div>
              </div>
              <div class="tooltip-bottom">
                <div class="p-[15px]">
                  <ul>
                    <li class="flex items-center gap-3">
                      <Button
                        class="w-full"
                        label="Quản lý tài khoản"
                        severity="secondary"
                        icon="pi pi-user-edit"
                        text
                      />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button
                        class="w-full"
                        label="Tủ sách cá nhân"
                        severity="secondary"
                        icon="pi pi-book"
                        text
                      />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button
                        class="w-full"
                        label="Lịch sử giao dịch"
                        severity="secondary"
                        icon="pi pi-list"
                        text
                      />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button
                        class="w-full"
                        label="Hỗ trợ khách hàng"
                        severity="secondary"
                        icon="pi pi-headphones"
                        text
                      />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button
                        class="w-full"
                        label="Đăng xuất"
                        severity="secondary"
                        icon="pi pi-sign-out"
                        text
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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

  .tool-menu {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
</style>
