<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
   import Kinhhoat from "@/components/Kinhhoat.vue";
   import Hinhthuc from "@/components/Hinhthuc.vue";
//   import { useRouter } from "vue-router";

// const router = useRouter();

// // Các phương thức xử lý sự kiện khi nhấn nút "Nạp sồi"
// const onNpGiTextClick = () => {
//   // Điều hướng sang trang thanh toán
//   router.push("/payment"); // Thay đổi '/payment' bằng đường dẫn của trang thanh toán thực tế
// };
</script>
<template>
    <HeaderAfterLogin></HeaderAfterLogin>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full mt-[-10px]"
    >
      <div class="flex-1 flex flex-row items-start justify-start max-w-full">
        <div
          class="mr-4 h-[285px] flex-1 [filter:blur(0px)] bg-white box-border overflow-hidden flex flex-col items-start justify-start relative gap-[10px] max-w-full border-[1px] border-solid border-white"
        >
          <b
            class="w-full h-full absolute !m-[0] top-[0px] left-[0px] flex items-center z-[1] mq800:text-7xl mq450:text-lgi"
          >
            <span class="w-full">
              <p class="m-0 text-45xl">
                <span>
                  <span class="text-white whitespace-pre-wrap"> </span>
                </span>
                <span>
                  <span>Chọn hình thức thanh toán</span>
                </span>
              </p>
              <p class="m-0 text-13xl">
                <span>
                  <span class="whitespace-pre-wrap">
                    An toàn - Nhanh chóng - Bảo mật</span
                  >
                </span>
              </p>
            </span>
          </b>
          <div
            class="w-[1440px] h-px absolute !m-[0] top-[285px] left-[-2px] box-border z-[2] border-t-[1px] border-solid border-gray-100"
          />
        </div>
      </div>
    </div>
    <Kinhhoat></Kinhhoat>
    <Hinhthuc></Hinhthuc>

    <FooterApp></FooterApp>
</template>
<style scoped>
.text-white{
  color: white;
}
.mr-5{
  margin-right: 120px;
}
.mr-1{
  margin-left: 60px;
}
.mr-2{
  margin-right: 100px;
}
.mr-3{
  margin-top: 20px;
}
.mr-4{
  margin-left: 40px;
}
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
.bg-sandybrown{
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

.border-gray-100{
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
