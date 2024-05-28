<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from "vue";
  import { onClickOutside } from "@vueuse/core";
  import http from "@/api/http-common";
  import showNotification from "@/utils/showNotification";
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const modal = ref(false);
  const modalRef = ref(null);

  onClickOutside(modalRef, (event) => {
    console.log(event);
    modal.value = false;
  });

  const handlleLogout = async () => {
    let urlApi = "/access/logout";
    let requestData = {
      accessToken: localStorage.getItem("accessToken") || "",
      refreshToken: localStorage.getItem("refreshToken") || "",
    };

    try {
      const response = await http.post(urlApi, requestData);

      showNotification(
        toast,
        "success",
        "Thông báo",
        response.data.message,
        1000
      );
      store.isLoggedIn = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isLoggedIn");

      setTimeout(() => {
        router.push({ path: "/" });
        router.go();
      }, 1000);
    } catch (error) {
      // console.log("error :>> ", error);
      showNotification(
        toast,
        "error",
        "Rất tiếc!",
        error?.response?.data?.message
      );
    }
    router.push({ path: "/" });
  };
</script>

<template>
  <nav class="sidebar flex-none w-[320px]">
    <div class="m-5">
      <div class="tool-menu p-8 h-[calc(100vh-80px)]">
        <div>
          <label class="font-semibold">TRANG CHỦ</label>
          <RouterLink :to="{ name: 'admin' }">
            <Button
              class="w-full text-left"
              label="Dashboard"
              severity="secondary"
              icon="pi pi-home"
              text
            />
          </RouterLink>
        </div>
        <div>
          <label class="font-semibold">CÔNG CỤ</label>
          <RouterLink :to="{ name: 'admin_user' }">
            <Button
              class="w-full text-left"
              label="Quản lý người dùng"
              severity="secondary"
              icon="pi pi-users"
              text
            />
          </RouterLink>

          <RouterLink :to="{ name: 'admin_book' }">
            <Button
              class="w-full text-left"
              label="Sách"
              severity="secondary"
              icon="pi pi-book"
              text
            />
          </RouterLink>

          <RouterLink :to="{ name: 'admin_comment' }">
            <Button
              class="w-full text-left"
              label="Quản lý bình luận"
              severity="secondary"
              icon="pi pi-comments"
              text
            />
          </RouterLink>

          <RouterLink :to="{ name: 'admin_voucher' }">
            <Button
              class="w-full text-left"
              label="Voucher"
              severity="secondary"
              icon="pi pi-ticket"
              text
            />
          </RouterLink>
        </div>
        <div>
          <label class="font-semibold">THAO TÁC</label>
          <Button
            @click="handlleLogout"
            class="w-full text-left"
            label="Đăng xuất"
            severity="secondary"
            icon="pi pi-sign-out"
            text
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .tool-menu {
    border-right: rgba(17, 17, 26, 0.1) solid 1px;
  }
</style>
