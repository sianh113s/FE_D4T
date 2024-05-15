<script setup>
  import http from "@/api/http-common";
  import { ref } from "vue";
  import { useToast } from "primevue/usetoast";
  import router from "@/router";
  import { useConditionStore } from "@/store";
  import showNotification from "../../utils/showNotification.js";

  const store = useConditionStore();
  const toast = useToast();

  const formData = ref({
    username: "",
    password: "",
  });

  const loginUser = async (urlApi, data) => {
    try {
      const response = await http.post(urlApi, data);

      localStorage.setItem(
        "FullName",
        JSON.stringify(response.data.metadata.user.FullName)
      );
      localStorage.setItem(
        "Username",
        JSON.stringify(response.data.metadata.user.Username)
      );

      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.metadata.tokens.accessToken)
      );
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(response.data.metadata.tokens.refreshToken)
      );
      showNotification(toast, "success", "Thông báo", response.data.message);

      //
      store.setLoggedIn();
      localStorage.setItem("isLoggedIn", true);

      setTimeout(() => {
        router.push({ path: "/" });
      }, 500);
    } catch (error) {
      showNotification(
        toast,
        "error",
        "Rất tiếc!",
        error?.response?.data?.message
      );
    }
  };

  const onSubmit = async () => {
    let urlApi = "/access/login-username";
    let requestData = {};

    if (formData.value.username.includes("@")) {
      urlApi = "/access/login-email";
      requestData = {
        email: formData.value.username,
        password: formData.value.password,
      };
    } else {
      requestData = {
        username: formData.value.username,
        password: formData.value.password,
      };
    }

    await loginUser(urlApi, requestData);

    formData.value.username = "";
    formData.value.password = "";
  };
</script>

<template>
  <div
    class="flex items-center justify-center w-screen h-screen registration-login t-"
  >
    <div class="relative img-login">
      <img
        class="w-screen h-screen bg-cover"
        src="../../assets/imgs/imgLogin.png"
        alt="ảnh trang login"
      />
    </div>

    <Toast />
    <form
      @submit.prevent="onSubmit"
      autocomplete="off"
      class="form-login w-[440px] h-[570px] absolute opacity-60 bg-black p-[40px] flex flex-col justify-around rounded-2xl shadow-xl"
    >
      <div
        class="heading heading-login text-[30px] font-[600] flex flex-col items-center text-center mb-[13px]"
      >
        <p>Đăng nhập</p>
        <div class="hr border w-[105px] mt-[5px]"></div>
      </div>
      <div class="flex flex-col items-center justify-center input input-login">
        <div>
          <label
            for="email"
            class="block my-2 text-[15px] font-medium dark:text-white"
            >Tên đăng nhập hoặc Email</label
          >
          <input
            type="text"
            name="email"
            id="email"
            class="w-[340px] h-[47px] text-[18px] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-3.5 font-medium"
            placeholder="username/username@gmail.com"
            required=""
            v-model="formData.username"
          />
        </div>
        <div>
          <label
            for="password"
            class="block my-2 text-[15px] font-medium dark:text-white"
            >Mật khẩu</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="w-[340px] h-[47px] text-[18px] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-3.5 font-medium"
            required=""
            v-model="formData.password"
          />
        </div>

        <button
          type="submit"
          class="btn-color w-[220px] h-[50px] mt-10 rounded-2xl font-[500] text-[15px] tracking-wide shadow-xl"
        >
          <span>TIẾN HÀNH ĐĂNG NHẬP</span>
        </button>
      </div>
      <div class="sub-title flex justify-between items-center p-[10px] mt-0">
        <div class="sub-title-left flex flex-col justify-between h-[110px]">
          <p>Hoặc</p>
          <div class="icon-login text-[]">
            <i
              class="mr-5 pi pi-google"
              style="font-size: 1.5rem"
            ></i>
            <i
              class="pi pi-facebook"
              style="font-size: 1.5rem"
            ></i>
          </div>
          <p><router-link to="/signup">Đăng ký tài khoản mới</router-link></p>
          <p>Cần trợ giúp</p>
        </div>
        <div class="sub-title-right w-[100px] h-[100px]">
          <img
            src="../../assets/imgs/logo-tron.png"
            alt=""
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .registration-login {
    color: white;
  }

  .btn-color {
    background-color: #ec7200;
    transform: translateY(-2px);
  }

  .btn-color:hover {
    background-color: #7f4108;
    transform: translateY(1px);
  }

  .pi-google {
    color: red;
  }

  .pi-facebook {
    color: blue;
  }

  .sub-title-left p {
    font-size: 13px;
  }
</style>
