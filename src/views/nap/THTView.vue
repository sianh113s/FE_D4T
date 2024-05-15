<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const onGroupButtonClick = () => {
    router.push("/Nap/Payment");
  };
</script>
<template>
  <div>
    <HeaderAfterLogin></HeaderAfterLogin>

    <div
      class="relative font-semibold z-[1] max-w-full"
      style="width: 100%"
    >
      <div
        class="text-[21px] pl-[21px] mt-[250px]"
        style="padding: 40px"
      >
        <img
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            left: 50%;
            transform: translateX(-50%);
          "
          class="w-[600px] h-[250px] absolute !m-[0] top-[-230px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="../../assets/imgs/THT.png"
        />
        <ol class="m-0 font-inherit text-inherit">
          <li class="mb-0">
            1. Mã khuyến mãi là mã quà tặng D4T gửi đến độc giả trong các chương
            trình tri ân.
          </li>
        </ol>
        <p class="m-0">
          Mã CODE: D4T, SPRINGSALE, HOLIDAY25, VOUCHER20, SAVE10.
        </p>
        <p class="m-0">&nbsp;</p>
        <ol class="m-0 font-inherit text-inherit">
          <li class="mb-0">2. Nhận mã khuyến mại ở đâu?</li>
        </ol>
        <p class="m-0">
          Mã khuyến mại sẽ được D4T phát ra trong các chương trình như: Minigame
          trên trang đọc sách, các ngày lễ lớn (2/9, 30/4, 1/5, tết dương lịch,
          tết âm lịch,...).
        </p>
        <p class="m-0">
          Ngoài ra khách hàng có thể nhập các mã khuyến mãi sẵn có ở trên để
          được nhận quà từ chúng tôi.
        </p>
        <p class="m-0">&nbsp;</p>
        <p class="m-0">
          Hãy thường xuyên vào D4T để cập nhật nhanh các chương trình tri ân của
          D4T dành cho độc giả nhé các bạn!
        </p>
      </div>
      <button
        style="margin-left: 70px; margin-bottom: 20px"
        class="cursor-pointer border-none pt-0 px-4 pb-2 bg-mediumseagreen-100 m-[0] bottom-[0px] left-[200px] rounded-11xl flex flex-row items-end justify-start gap-[4px] whitespace-nowrap z-[4] hover:bg-mediumseagreen-200"
        @click="onGroupButtonClick"
      >
        <div
          class="h-[35px] w-[40px] relative rounded-11xl bg-mediumseagreen-100"
        >
          <i
            class="pi pi-arrow-left"
            style="
              color: white;
              font-size: 1.5rem;
              align-items: center;
              margin-top: 7px;
            "
          ></i>
        </div>
        <div
          class="relative text-xl font-semibold font-segoe-ui text-white text-right inline-block min-w-[76px] z-[1]"
        >
          Quay lại
        </div>
      </button>
    </div>

    <FooterApp></FooterApp>
  </div>
</template>
<style scoped>
  .bg-mediumseagreen-100 {
    background-color: #10b981;
  }
  .rounded-11xl {
    border-radius: 20px;
  }
  @media screen and (min-width: 1024px) {
    .text-45xl {
      font-size: 64px; /* Kích thước font lớn hơn cho màn hình lớn hơn hoặc bằng 1024px */
    }
    .text-13xl {
      font-size: 32px; /* Kích thước font lớn hơn cho màn hình lớn hơn hoặc bằng 1024px */
    }
  }
</style>
