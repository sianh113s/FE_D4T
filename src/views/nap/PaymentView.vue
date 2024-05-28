<script setup>
  // Import các component cần thiết từ thư mục components
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import Kinhhoat from "@/components/nap/Kinhhoat.vue";
  // import Hinhthuc từ thư mục components nhưng hiện đang bị comment
  // import Hinhthuc from "@/components/nap/Hinhthuc.vue";
</script>

<template>
  <!-- Sử dụng component HeaderAfterLogin để hiển thị header sau khi đăng nhập -->
  <HeaderAfterLogin></HeaderAfterLogin>

  <!-- Phần container chính -->
  <div
    class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full mt-[-10px]"
  >
    <div class="flex flex-row items-start justify-start flex-1 max-w-full">
      <div
        class="mr-4 h-[285px] flex-1 [filter:blur(0px)] bg-white box-border overflow-hidden flex flex-col items-start justify-start relative gap-[10px] max-w-full border-[1px] border-solid border-white"
      >
        <!-- Tiêu đề chính của trang -->
        <div class="">
          <b
            class="w-full px-[51px] h-full absolute !m-[0] top-[0px] left-[0px] flex items-center z-[1] mq800:text-7xl mq450:text-lgi"
          >
            <span class="w-full">
              <p class="m-0 text-5xl">Chọn hình thức thanh toán</p>
              <p class="pt-4 text-xl">An toàn - Nhanh chóng - Bảo mật</p>
            </span>
          </b>
        </div>
        <!-- Đường viền ngang phía dưới tiêu đề -->
        <div
          class="w-[1440px] h-px absolute !m-[0] top-[285px] left-[-2px] box-border z-[2] border-t-[1px] border-solid border-gray-100"
        />
      </div>
    </div>
  </div>

  <!-- Sử dụng component Kinhhoat để hiển thị nội dung của phần kích hoạt -->
  <Kinhhoat></Kinhhoat>

  <!-- <Hinhthuc></Hinhthuc> -->

  <FooterApp></FooterApp>
</template>
