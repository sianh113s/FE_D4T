<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  const onNpGiTextClick = () => {
    
    router.push("/Nap/Payment");
  };
</script>
<template>
  <div class="flex flex-row items-start justify-between w-full gap-[20px]">
    <div
      class="w-[250px] rounded-6xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center pt-0 pb-16 pr-[9px] pl-[19px] relative gap-[59px] z-[1] border-[1px] border-solid border-sandybrown mq450:pb-[42px] mq450:box-border"
    >
      <img
        class="w-[70px] h-[70px] absolute !m-[0] top-[40px] left-[calc(50%_-_35px)] object-cover z-[1]"
        alt=""
        src="../../assets/imgs/bonussoi.png"
      />
      <div
        class="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[179px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro-100"
      />
      <div
        class="w-[202px] flex flex-row items-center justify-center py-0 px-[45px] box-border"
      >
        <div
          class="flex-1 bg-sandybrown flex flex-row items-center justify-center pt-0 pb-[11px] pr-0.5 pl-0 whitespace-nowrap z-[1] text-sm text-center"
        >
          <b
            class="flex-1 relative leading-[20px] z-[2]"
            style="font-size: 20px; border-radius: 10px"
            >Phổ biến</b
          >
        </div>
      </div>
      <div
        class="flex flex-col items-center self-stretch justify-center text-base text-chocolate"
      >
        <div
          class="self-stretch flex flex-col items-center justify-center pt-[45px] px-[45px] pb-[38px] relative gap-[63px]"
        >
          <div
            class="w-[90px] flex flex-row items-center justify-center py-0 px-2.5 box-border"
          >
            <div
              class="self-stretch flex flex-row items-start justify-start py-0 px-[30px]"
            >
              <div
                class="cursor-pointer [border:none] py-0 px-[25px] bg-gainsboro-100 w-[150px] rounded-31xl flex flex-row items-end justify-start box-border z-[1]"
              >
                <b
                  class="w-[70px] relative text-base flex font-segoe-ui text-chocolate text-center items-center justify-center shrink-0 z-[2]"
                  >10.000</b
                >
                <img
                  class="h-[25px] w-[50px] relative object-cover min-h-[25px] z-[2]"
                  alt=""
                  src="../../assets/imgs/bonussoi.png"
                />
              </div>
            </div>
          </div>
          <b
            class="self-stretch relative text-xl text-black z-[1] mq450:text-base"
            >199.000đ</b
          >
          <div
            class="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-0 px-0 pb-[163px] box-border z-[3] text-center text-5xl text-black font-segoe-ui"
          >
            <b class="relative flex-1 mq450:text-lgi">Gói Hạt Sồi 199k</b>
          </div>
        </div>
        <div
          class="w-[180px] h-10 flex flex-row items-center justify-center py-0 pr-0 pl-[-5px] box-border mt-[-14px] text-lg text-black"
        >
          <div
            class="w-[150px] rounded-31xl bg-gainsboro-100 flex flex-row items-start justify-start whitespace-nowrap z-[1]"
          >
            <div
              class="h-10 w-[150px] relative rounded-31xl bg-gainsboro-100 hidden"
            />
            <b
              class="h-10 flex-1 relative flex items-center justify-center cursor-pointer z-[2]"
              @click="onNpGiTextClick"
              >Nạp gói</b
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    border-color: #898989;
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

  /* Screens - no custom screen sizes defined */
</style>
