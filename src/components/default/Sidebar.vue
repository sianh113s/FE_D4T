<script setup>
  import { RouterLink, RouterView } from "vue-router";

  

</script>

<template>
  <nav class="sidebar flex-none w-[340px]">
    <div class="tool-menu rounded-md px-5 h-[calc(100vh-80px)] my-[12px] top-[100px] bg-[#fff]">
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
      <div class="tooltip-middle m-[15px]">
        <div class="px-10 pb-[12px] flex items-center justify-center">
          <RouterLink to="/nap">
            <Button
              class="rounded-[50px] w-full"
              label="Nạp thêm sồi"
            />
          </RouterLink>
        </div>
      </div>
      <div class="tooltip-bottom">
        <div class="px-[20px]">
          <ul>
            <RouterLink :to="{name: 'profile' }">
              <li class="flex items-center gap-3">
                <Button
                  class="w-full"
                  label="Quản lý tài khoản"
                  severity="secondary"
                  icon="pi pi-user-edit"
                  text
                />
              </li>
            </RouterLink>
            <RouterLink :to="{name: 'bookcase' }">
              <li class="flex items-center gap-3">
                <Button
                  class="w-full"
                  label="Tủ sách cá nhân"
                  severity="secondary"
                  icon="pi pi-book"
                  text
                />
              </li>
            </RouterLink>
            <RouterLink :to="{name: 'transaction-histories' }">
              <li class="flex items-center gap-3">
                <Button
                  class="w-full"
                  label="Lịch sử giao dịch"
                  severity="secondary"
                  icon="pi pi-history"
                  text
                />
              </li>
            </RouterLink>
            <li class="flex items-center gap-3">
              <Button
                class="w-full"
                label="Hỗ trợ khách hàng"
                severity="secondary"
                icon="pi pi-headphones"
                text
              />
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .tool-menu {
    border-right: rgba(17, 17, 26, 0.1) solid 1px;
  }

  .tooltip-middle {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }
  
  

</style>