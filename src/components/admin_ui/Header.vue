<script setup>
  import { RouterLink } from "vue-router";
  import { useConditionStore } from "@/store";
  import http from "@/api/http-common";
  import { useToast } from "primevue/usetoast";
  import showNotification from "@/utils/showNotification";
  import router from "@/router";

  const toast = useToast();
  const store = useConditionStore();

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

      localStorage.clear();

      setTimeout(() => {
        // router.push({ path: "/" });
        router.go();
      }, 500);

      return;
    } catch (error) {
      // console.log("error :>> ", error);
      showNotification(
        toast,
        "error",
        "Rất tiếc!",
        error?.response?.data?.message
      );
      router.push({ path: "/" });
      return;
    }
  };
</script>

<template>
  <Toast />
  <div>
    <header class="">
      <div class="h-[80px] flex justify-between px-6 header__inner">
        <div class="left">
          <RouterLink to="/">
            <img
              class="w-[167px] h-[48px]"
              src="../../assets/imgs/logo-dai.png"
              alt="Logo"
            />
          </RouterLink>
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
            <img
              class="w-[40px] h-[40px] rounded-[50px]"
              src="../../assets/imgs/avatar_demo.png"
              alt=""
            />
          </div>

          <div
            :class="{ hidden: store.isHiddenHeaderDropdown }"
            class="absolute top-[80px] right-0 z-40"
          >
            <div class="tool-menu rounded-md w-[180px] bg-[#fff]">
              <div class="p-[10px]">
                <ul>
                  <li class="flex items-center gap-3">
                    <Button
                      @click="handlleLogout"
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
