<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import ShapeMaker from "@/components/nap/ShapeMaker.vue";
  import Frame1 from "@/components/nap/Frame1.vue";
  import Frame2 from "@/components/nap/Frame2.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const onNpGiTextClick = () => {
    router.push("/Nap/Payment");
  };
</script>

<template>
  <HeaderAfterLogin></HeaderAfterLogin>
  <div
    class="self-stretch flex flex-row items-center justify-center py-0 pr-0 pl-0.5 box-border max-w-full mt-[0px]"
  >
    <div
      class="h-[285px] flex-1 box-border overflow-hidden flex flex-row items-center justify-center py-0 pr-0 pl-0 max-w-full border-[1px] border-solid"
    >
      <div class="h-[285px] flex-1 relative max-w-full">
        <img
          class="absolute top-[6px] left-[-2px] w-full h-full object-cover [filter:blur(5px)]"
          loading="lazy"
          alt=""
          src="../../assets/imgs/pngtree-acorns-on-the-ground-in-the-forest-image_2556793.jpg"
        />
        <b
          class="absolute top-[0px] left-[0px] flex items-center w-[1440px] h-[285px] z-[1] mq450:text-lgi mq800:text-7xl"
        >
          <span class="w-full">
            <p
              class="m-0 text-white whitespace-pre-wrap text-45xl md:text-6xl lg:text-7xl"
            >
              Gói sồi
            </p>
            <p
              class="m-0 text-13xl md:text-2xl lg:text-5xl text-white whitespace-pre-wrap px-[14px]"
            >
              Đọc toàn bộ nội dung sách với huy hiệu Sồi
            </p>
            <p
              class="m-0 text-13xl md:text-2xl lg:text-5xl text-white whitespace-pre-wrap px-[14px]"
            >
              Nạp càng nhiều, khuyến mãi càng lớn
            </p>
          </span>
        </b>
      </div>
    </div>
  </div>
  <section
    class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[63px] box-border gap-[26px] max-w-full text-left text-13xl text-black font-segoe-ui mq800:pb-[27px] mq800:box-border mq1350:pb-[41px] mq1350:box-border"
  >
    <h2
      class="relative self-stretch m-0 mr-3 mr-4 font-bold whitespace-pre-wrap text-inherit font-inherit mq450:text-lgi mq800:text-7xl"
    >
      Nạp lần đầu
    </h2>
    <div
      class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap mr-1"
    >
      <ShapeMaker
        giHtSi299k="Gói Hạt Sồi 299k"
        prop="17.500"
        prop1="350.000đ"
        prop2="299.000đ"
        :onNpGiTextClick="onNpGiTextClick"
        class="mr-5"
      /><ShapeMaker
        giHtSi299k="Gói Hạt Sồi 499k"
        prop="27.500"
        prop1="550.000đ"
        prop2="499.000đ"
        :onNpGiTextClick="onNpGiText1Click"
      />
    </div>

    <h2
      class="relative self-stretch m-0 mr-4 font-bold whitespace-pre-wrap text-inherit font-inherit mq450:text-lgi mq800:text-7xl"
    >
      Chọn gói sồi muốn nạp
    </h2>

    <div
      class="flex-1 flex flex-row items-start justify-start max-w-full gap-[20px] mq800:flex-wrap"
    >
      <div
        class="flex flex-row items-start justify-start w-full gap-[20px] mr-1"
      >
        <div class="w-[25%] mr-2">
          <Frame2></Frame2>
        </div>
        <div class="w-[25%]">
          <Frame1
            giHtSi79k="Gói Hạt Sồi 299k"
            prop="15.000"
            prop1="299.000đ"
            :onNpGiTextClick="onNpGiText3Click"
            class="mr-3 mr-5"
          />
        </div>
        <div class="w-[25%]">
          <Frame1
            giHtSi79k="Gói Hạt Sồi 399k"
            prop="20.000"
            prop1="399.000đ"
            :onNpGiTextClick="onNpGiText4Click"
            class="mr-3 mr-5"
          />
        </div>
        <div class="w-[25%]">
          <Frame1
            giHtSi79k="Gói Hạt Sồi 499k"
            prop="25.000"
            prop1="499.000đ"
            :onNpGiTextClick="onNpGiText5Click"
            class="mr-3"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-row items-start justify-start w-full gap-[20px] mr-1">
      <Frame1
        giHtSi79k="Gói Hạt Sồi 79k"
        prop="4.000"
        prop1="79.000đ"
        :onNpGiTextClick="onNpGiText6Click"
        class="mr-2 mr-3 mr-5"
      />
      <Frame1
        giHtSi79k="Gói Hạt Sồi 99k"
        prop="5.000"
        prop1="99.000đ"
        :onNpGiTextClick="onNpGiText6Click"
        class="mr-3 mr-4"
      />
    </div>
  </section>
  <FooterApp></FooterApp>
</template>

<style lang="scss" scoped>
  .text-white {
    color: white;
  }
  .mr-5 {
    margin-right: 120px;
  }
  .mr-1 {
    margin-left: 60px;
  }
  .mr-2 {
    margin-right: 100px;
  }
  .mr-3 {
    margin-top: 20px;
  }
  .mr-4 {
    margin-left: 25px;
  }
  /* Colors */
  .white {
    color: #fff;
  }

  .sandybrown {
    color: rgba(255, 199, 120, 0.75);
  }
  .border-sandybrown {
    border-color: rgba(255, 199, 120, 0.75);
  }
  .bg-sandybrown {
    background-color: rgba(255, 199, 120, 0.75);
  }
  .black {
    color: #000;
  }

  .cornsilk {
    color: #faf4d4;
  }

  .brown {
    color: #9f2d2d;
  }

  .green {
    color: #119663;
  }

  .gainsboro-100 {
    color: #d9d9d9;
  }
  .border-gainboro-100 {
    border-color: #d9d9d9;
  }

  .bg-gainsboro-100 {
    background-color: #d9d9d9;
  }
  .gainsboro-200 {
    color: rgba(217, 217, 217, 0.25);
  }

  .bg-gainsboro-200 {
    background-color: rgba(217, 217, 217, 0.25);
  }
  .gainsboro-300 {
    color: #119663;
  }

  .aquamarine {
    color: #8bf8c4;
  }

  .text-chocolate {
    color: #c17011;
  }

  .mediumgreen-100 {
    color: #10b981;
  }

  .mediumgreen-200 {
    color: #00a169;
  }

  .gray-100 {
    color: #898989;
  }

  .border-gray-100 {
    border-color: #d9d9d9;
  }
  .gray-200 {
    color: rgba(0, 0, 0, 0.4);
  }

  .whitesmoke {
    color: #efefef;
  }

  /* Spacing - no custom spacing defined */

  /* Font Family */
  .roboto {
    font-family: Roboto;
  }

  .segoe-ui {
    font-family: "Segoe UI";
  }

  /* Border Radius */
  .rounded-6xl {
    border-radius: 25px;
  }

  .rounded-31xl {
    border-radius: 50px;
  }

  .rounded-30xl {
    border-radius: 45px;
  }

  .rounded-8xs {
    border-radius: 5px;
  }

  /* Font Size */
  .text-lg {
    font-size: 18px;
  }

  .text-xl {
    font-size: 20px;
  }

  .text-base {
    font-size: 16px;
  }

  .text-5xl {
    font-size: 24px;
  }

  .text-lgi {
    font-size: 19px;
  }

  .text-13xl {
    font-size: 32px;
  }

  .text-14xl {
    font-size: 30px;
  }

  .text-7xl {
    font-size: 26px;
  }

  .text-45xl {
    font-size: 64px;
  }

  .text-xs {
    font-size: 12px;
  }

  .text-inherit {
    font-size: inherit;
  }
</style>
