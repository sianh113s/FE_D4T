<template>
    <div
      class="w-[250px] rounded-6xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[18px] px-0 pb-[34px] gap-[40px] text-center text-5xl text-black font-segoe-ui border-[1px] border-solid border-sandybrown mq450:gap-[20px]"
    >
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 px-[15px]"
      >
        <div class="flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div
            class="self-stretch flex flex-row items-start justify-center py-0 px-5"
          >
            <img
              class="h-[70px] w-[70px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="../../src/assets/imgs/bonussoi.png"
            />
          </div>
          <div
            class="self-stretch flex flex-col items-start justify-start gap-[15px]"
          >
            <b class="self-stretch relative z-[1]">
              <p class="m-0">{{giHtSi299k}}</p>
              <p class="m-0 text-lg">Khuyến mãi nạp lần đầu</p>
            </b>
            <div
              class="self-stretch flex flex-row items-start justify-start py-0 px-[35px]"
            >
              <button
                class="cursor-pointer [border:none] py-0 px-[25px] bg-gainsboro-100 flex-1 rounded-31xl flex flex-row items-end justify-start z-[1]"
              >
                <b
                  class="w-[70px] relative text-base flex font-segoe-ui chocolate center items-center justify-center shrink-0 z-[2]"
                  >{{prop}}</b
                >
                <img
                  class="h-[25px] w-[50px] relative object-cover min-h-[25px] z-[2]"
                  alt=""
                  src="../../src/assets/imgs/bonussoi.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[250px] h-[114px] flex flex-col items-start justify-start gap-[12px] text-base text-gray-100"
      >
        <div
          class="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-100"
        />
        <div
          class="w-[200px] h-[101px] flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border"
        >
          <div
            class="h-[101px] w-[150px] flex flex-col items-end justify-start gap-[15px]"
          >
            <div
              class="w-[135px] h-[46px] flex flex-row items-start justify-end py-0 pr-[5px] pl-0 box-border"
            >
              <div class="h-[46px] flex-1 relative">
                <div
                  class="absolute top-[8px] left-[25px] box-border w-[81px] h-px z-[1] border-t-[2px] border-solid border-gray-100"
                />
                <b
                  class="absolute top-[0px] left-[0px] flex items-center w-full h-full z-[2]"
                >
                  <span class="[word-break:anywhere] w-full">
                    <p class="m-0 gainsboro-100">{{prop1}}</p>
                    <p class="m-0 text-lg text-black">{{prop2}}</p>
                  </span>
                </b>
              </div>
            </div>
            <div
              class="self-stretch rounded-31xl bg-gainsboro-100 flex flex-row items-start justify-start whitespace-nowrap z-[1] text-lg text-black"
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
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "ShapeMaker",
      props: {
        rectangle13: { type: String },
        giHtSi299k: { type: String },
        prop: { type: String },
        prop1: { type: String },
        prop2: { type: String },
        //onNpGiTextClick: { type: Function },
      },
      methods:{
        onNpGiTextClick(){
            this.$router.push("/Nap/Payment");
        },
      },
    });
  </script>
  <style scoped>
  /* Colors */
.white {
  color: #fff;
}

.sandybrown {
  color: rgba(255, 199, 120, 0.75);
}
.border-sandybrown{
  border-color: rgba(255, 199, 120, 0.75);
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
.border-gainboro-100{
  border-color: #d9d9d9;
}

.bg-gainsboro-100{
  background-color: #d9d9d9;
}
.gainsboro-200 {
  color: rgba(217, 217, 217, 0.25);
}

.bg-gainsboro-200{
  background-color: rgba(217, 217, 217, 0.25);
}
.gainsboro-300 {
  color: #119663;
}

.aquamarine {
  color: #8bf8c4;
}

.chocolate {
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

.border-gray-100{
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
  font-family: 'Segoe UI';
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