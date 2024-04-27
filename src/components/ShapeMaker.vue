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
                  class="w-[70px] relative text-base flex font-segoe-ui text-chocolate text-center items-center justify-center shrink-0 z-[2]"
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
                  class="absolute top-[14px] left-[25px] box-border w-[81px] h-px z-[1] border-t-[1px] border-solid border-gray-100"
                />
                <b
                  class="absolute top-[0px] left-[0px] flex items-center w-full h-full z-[2]"
                >
                  <span class="[line-break:anywhere] w-full">
                    <p class="m-0">{{prop1}}</p>
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
            this.$router.push("/payment");
        },
      },
    });
  </script>