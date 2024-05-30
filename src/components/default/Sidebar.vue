<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from "vue";
  import { onClickOutside } from "@vueuse/core";
  import { useCoinsStore } from "@/store";

  const modal = ref(false);
  const modalRef = ref(null);

  onClickOutside(modalRef, (event) => {
    // console.log(event);
    modal.value = false;
  });

  const store = useCoinsStore();
  const userFname = JSON.parse(localStorage.getItem("FullName")) || "user";
</script>

<template>
  <div>
    <nav class="sidebar flex-none w-[340px]">
      <div
        class="tool-menu rounded-md px-5 h-[calc(100vh-80px)] my-[12px] top-[100px] bg-[#fff]"
      >
        <div class="flex items-center tooltip-top p-[15px] justify-between">
          <div class="flex flex-col t-left">
            <span class="text-xl font-bold text-[#334155]">{{
              userFname
            }}</span>
            <div class="flex items-center gap-3 pt-2">
              <i
                class="pi pi-credit-card"
                style="color: #f3c201"
              ></i
              ><span class="text-[#f3c201] font-semibold">{{
                store.coins
              }}</span>
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
            <RouterLink to="/Nap/Payment">
              <Button
                class="rounded-[50px] w-[220px]"
                label="Nạp thêm sồi"
              />
            </RouterLink>
          </div>
        </div>
        <div class="tooltip-bottom">
          <div class="px-[20px]">
            <ul>
              <RouterLink :to="{ name: 'profile' }">
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
              <RouterLink :to="{ name: 'bookcase' }">
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
              <RouterLink :to="{ name: 'transaction-histories' }">
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
                  @click="modal = true"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div
      v-if="modal"
      ref="modalRef"
      class="modal"
    >
      <div class="bg-white inner">
        <p class="p-3 text-2xl font-semibold text-center">Bạn cần hỗ trợ</p>
        <p class="text-base text-center">
          Liên hệ với chúng tôi thông qua các kênh hỗ trợ
        </p>
        <div class="my-2 text-center">
          <Button
            class="rounded-3xl w-[140px] text-stone-900"
            icon="pi pi-telegram"
            label="Telegram"
            severity="secondary"
            outlined
          />
          <Button
            class="rounded-3xl ml-10 w-[140px] text-stone-900"
            icon="pi pi-comment"
            label="Zalo"
            severity="secondary"
            outlined
          />
        </div>
        <p class="text-base text-center">Hoặc</p>
        <div class="my-2 text-center">
          <Button
            class="rounded-3xl w-[320px] text-left text-stone-900"
            icon="pi pi-phone"
            label="0328 426 688"
            severity="secondary"
            outlined
          />
          <Button
            class="rounded-3xl my-3 w-[320px] text-left text-stone-900"
            icon="pi pi-envelope"
            label="d4tbooks@gmail.com"
            severity="secondary"
            outlined
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tool-menu {
    border-right: rgba(17, 17, 26, 0.1) solid 1px;
  }

  .tooltip-middle {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }
  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 460px;
    max-width: 100%;
    z-index: 10;
  }
  .inner {
    padding: 0.4em 2em;
    border-radius: 20px;
    border: 1px solid var(--vp-c-divider);
    box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
  }
</style>
