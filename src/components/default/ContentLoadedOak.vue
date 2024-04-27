<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[25px] leading-[normal] tracking-[normal]"
  >
    <FrameComponent />
    <section
      class="w-[1439px] h-[90px] absolute !m-[0] top-[820px] left-[-1px] font-bold font-segoe-ui text-black text-left flex items-center text-lg"
    >
      <span class="w-full">
        <span class="whitespace-pre-wrap"> </span>
        <span class="text-13xl">Chọn gói sồi muốn nạp</span>
      </span>
    </section>
    <section
      class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[63px] box-border gap-[26px] max-w-full text-left text-13xl text-black font-segoe-ui mq800:pb-[27px] mq800:box-border mq1350:pb-[41px] mq1350:box-border"
    >
      <h2
        class="m-0 self-stretch relative text-inherit font-bold font-inherit whitespace-pre-wrap mq450:text-lgi mq800:text-7xl"
      >
        Nạp lần đầu
      </h2>
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 pr-[72px] pl-[65px] box-border max-w-full text-center text-xl text-white mq800:pl-8 mq800:pr-9 mq800:box-border"
      >
        <div
          class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap"
        >
          <div
            class="w-[601px] flex flex-col items-end justify-start gap-[103.5px] max-w-full mq450:gap-[26px] mq800:gap-[52px]"
          >
            <div
              class="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-[7px] box-border max-w-full"
            >
              <div
                class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap"
              >
                <ShapeMaker
                  rectangle13="/rectangle-13.svg"
                  giHtSi299k="Gói Hạt Sồi 299k"
                  prop="17.500"
                  prop1="350.000đ"
                  prop2="299.000đ"
                  :onNpGiTextClick="onNpGiTextClick"
                /><ShapeMaker
                  rectangle13="/rectangle-131.svg"
                  giHtSi299k="Gói Hạt Sồi 499k"
                  prop="27.500"
                  prop1="550.000đ"
                  prop2="499.000đ"
                  :onNpGiTextClick="onNpGiText1Click"
                />
              </div>
            </div>
            <div
              class="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap"
            >
              <div
                class="w-[250px] rounded-6xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-16 pr-[9px] pl-[19px] relative gap-[59px] z-[1] border-[1px] border-solid border-sandybrown mq450:pb-[42px] mq450:box-border"
              >
                <img
                  class="w-[250px] h-[380px] relative rounded-6xl hidden z-[0]"
                  alt=""
                  src="/rectangle-132.svg"
                />
                <img
                  class="w-[30px] h-[30px] absolute !m-[0] top-[49px] left-[calc(50%_-_15px)] object-cover z-[1]"
                  alt=""
                  src="/almond@2x.png"
                />
                <div
                  class="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[179px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro-100"
                />
                <div
                  class="w-[202px] flex flex-row items-start justify-start py-0 px-[45px] box-border"
                >
                  <div
                    class="flex-1 bg-sandybrown flex flex-row items-start justify-start pt-0 pb-[11px] pr-0.5 pl-0 whitespace-nowrap z-[1]"
                  >
                    <img
                      class="h-[33px] w-[110px] relative hidden"
                      alt=""
                      src="/rectangle-18.svg"
                    />
                    <b class="flex-1 relative leading-[22px] z-[2]">Phổ biến</b>
                  </div>
                </div>
                <div
                  class="self-stretch flex flex-col items-start justify-start text-base text-chocolate"
                >
                  <div
                    class="self-stretch flex flex-col items-start justify-start pt-[45px] px-[45px] pb-[38px] relative gap-[63px]"
                  >
                    <div
                      class="w-[90px] flex flex-row items-start justify-start py-0 px-2.5 box-border"
                    >
                      <div
                        class="flex-1 flex flex-row items-start justify-start relative"
                      >
                        <b class="flex-1 relative z-[2]">10.000</b>
                        <div
                          class="h-[25px] w-[150px] absolute !m-[0] top-[-2px] right-[-55px]"
                        >
                          <img
                            class="absolute top-[0px] left-[0px] rounded-31xl w-full h-full z-[1]"
                            alt=""
                            src="/rectangle-16.svg"
                          />
                          <img
                            class="absolute top-[0px] left-[95px] w-[25px] h-[25px] object-cover z-[2]"
                            alt=""
                            src="/almond-5@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <b
                      class="self-stretch relative text-xl text-black z-[1] mq450:text-base"
                      >199.000đ</b
                    ><GiHtSi199k />
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-0 px-[30px] mt-[-14px] text-lg text-black"
                  >
                    <div
                      class="w-[150px] rounded-31xl bg-gainsboro-100 flex flex-row items-start justify-start whitespace-nowrap z-[1]"
                    >
                      <div
                        class="h-10 w-[150px] relative rounded-31xl bg-gainsboro-100 hidden"
                      />
                      <b
                        class="h-10 flex-1 relative flex items-center justify-center cursor-pointer z-[2]"
                        @click="onNpGiText2Click"
                        >Nạp gói</b
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-[250px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border text-lg text-black"
              >
                <div
                  class="self-stretch rounded-6xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-8 pb-[34px] pr-[9px] pl-[19px] relative gap-[1px] border-[1px] border-solid border-aquamarine"
                >
                  <img
                    class="w-[250px] h-[350px] relative rounded-6xl hidden z-[0]"
                    alt=""
                    src="/rectangle-133.svg"
                  />
                  <div
                    class="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[149px] left-[0px] box-border z-[2] border-t-[1px] border-solid border-gainsboro-100"
                  />
                  <div
                    class="self-stretch flex flex-col items-start justify-start gap-[13px]"
                  >
                    <div
                      class="self-stretch flex flex-row items-start justify-center py-0 pr-[30px] pl-5"
                    >
                      <img
                        class="h-[30px] w-[30px] relative object-cover z-[1]"
                        alt=""
                        src="/almond@2x.png"
                      />
                    </div>
                    <div
                      class="self-stretch flex flex-col items-end justify-start pt-[58px] pb-[25px] pr-10 pl-[30px] relative gap-[64px]"
                    >
                      <GiHtSi299k />
                      <button
                        class="cursor-pointer [border:none] py-0 px-[25px] bg-gainsboro-100 self-stretch rounded-31xl flex flex-row items-end justify-start z-[2]"
                      >
                        <img
                          class="self-stretch w-[150px] relative rounded-31xl max-h-full hidden min-h-[25px]"
                          alt=""
                          src="/rectangle-16.svg"
                        />
                        <b
                          class="w-[70px] relative text-base flex font-segoe-ui text-chocolate text-center items-center justify-center shrink-0 z-[3]"
                          >15.000</b
                        >
                        <img
                          class="h-[25px] w-[25px] relative object-cover min-h-[25px] z-[3]"
                          alt=""
                          src="/almond-7@2x.png"
                        />
                      </button>
                      <div
                        class="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-[15px]"
                      >
                        <b class="flex-1 relative z-[2]">299.000đ</b>
                      </div>
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-0 px-[30px]"
                  >
                    <div
                      class="w-[150px] rounded-31xl bg-gainsboro-100 flex flex-row items-start justify-start whitespace-nowrap z-[1]"
                    >
                      <div
                        class="h-10 w-[150px] relative rounded-31xl bg-gainsboro-100 hidden"
                      />
                      <b
                        class="h-10 flex-1 relative flex items-center justify-center cursor-pointer z-[2]"
                        @click="onNpGiText3Click"
                        >Nạp gói</b
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap"
            >
              <Frame1
                giHtSi79k="Gói Hạt Sồi 79k"
                prop="4.000"
                almond1="/almond-9@2x.png"
                prop1="79.000đ"
                :onNpGiText6Click="onNpGiText6Click"
              /><Frame1
                giHtSi79k="Gói Hạt Sồi 99k"
                prop="5.000"
                almond1="/almond-11@2x.png"
                prop1="99.000đ"
                :onNpGiText6Click="onNpGiText7Click"
              />
            </div>
          </div>
          <frame
            giHtSi399k="Gói Hạt Sồi 399k"
            prop="20.000"
            almond1="/almond-13@2x.png"
            prop1="399.000đ"
            :onNpGiText4Click="onNpGiText4Click"
          /><frame
            giHtSi399k="Gói Hạt Sồi 499k"
            prop="25.000"
            almond1="/almond-15@2x.png"
            prop1="499.000đ"
            :onNpGiText4Click="onNpGiText5Click"
          />
        </div>
      </div>
    </section>
    <Bgfooter />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import ShapeMaker from "../components/ShapeMaker.vue";
  import GiHtSi199k from "../components/GiHtSi199k.vue";
  import GiHtSi299k from "../components/GiHtSi299k.vue";
  import Frame1 from "../components/Frame1.vue";
  import Frame from "../components/Frame.vue";
  import Bgfooter from "../components/Bgfooter.vue";

  export default defineComponent({
    name: "NpSi",
    components: {
      FrameComponent,
      ShapeMaker,
      GiHtSi199k,
      GiHtSi299k,
      Frame1,
      Frame,
      Bgfooter,
    },
    methods: {
      onNpGiTextClick() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText1Click() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText6Click() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText7Click() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText4Click() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText5Click() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText2Click() {
        // Please sync "Thanh toán" to the project
      },
      onNpGiText3Click() {
        // Please sync "Thanh toán" to the project