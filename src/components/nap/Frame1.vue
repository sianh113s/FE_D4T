
<template>
  <div
    class="w-[250px] rounded-6xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-8 px-0 pb-[34px] gap-[26px] text-center text-lg text-black font-segoe-ui border-[1px] border-solid border-aquamarine"
  >
    <div
      class="w-[230px] h-[140px] flex flex-row items-start justify-end pt-[-5] pb-3.5 pr-2.5 pl-0 box-border text-5xl"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[13px] pt-[-5]"
        style="margin-top: -15px"
      >
        <div
          class="self-stretch flex flex-row items-start justify-center py-[-10px] pr-[30px] pl-5"
        >
          <img
            class="h-[70px] w-[70px] relative object-cover z-[1]"
            alt=""
            src="../../assets/imgs/bonussoi.png"
          />
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[25px] pt-[-10px]"
          style="margin-top: -10px"
        >
          <b class="self-stretch relative z-[1] mq450:text-lgi">{{
            giHtSi79k
          }}</b>
          <div
            class="self-stretch flex flex-row items-start justify-start py-0 px-[30px]"
          >
            <div
              class="cursor-pointer [border:none] py-0 px-[25px] bg-gainsboro-100 w-[150px] rounded-31xl flex flex-row items-end justify-start box-border z-[1]"
            >
              <b
                class="w-[70px] relative text-base flex font-segoe-ui text-chocolate text-center items-center justify-center shrink-0 z-[2]"
                >{{ prop }}</b
              >
              <img
                class="h-[25px] w-[50px] relative object-cover min-h-[25px] z-[2]"
                alt=""
                src="../../assets/imgs/bonussoi.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[250px] h-12 flex flex-col items-end justify-start gap-[23px]"
    >
      <div
        class="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-100"
      />
      <div
        class="w-[185px] h-6 flex flex-row items-start justify-end py-0 pr-[55px] pl-0 box-border"
      >
        <b
          class="w-[130px] relative flex items-center justify-center shrink-0 z-[1]"
          >{{ prop1 }}</b
        >
      </div>
    </div>
    <div
      class="w-[200px] h-10 flex flex-row items-start justify-end py-0 pr-[50px] pl-0 box-border"
    >
      <div
        class="flex-1 rounded-31xl bg-gainsboro-100 flex flex-row items-start justify-start whitespace-nowrap z-[1]"
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
</template>
<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  giHtSi79k: String,
  prop: String,
  prop1: String,
});

const router = useRouter();

const onNpGiTextClick = () => {
  router.push("/Nap/Payment");
};
</script>
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
  .text-black {
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
  .border-aquamarine {
    border-color: #8bf8c4;
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
