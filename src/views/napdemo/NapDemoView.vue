<script setup>
  import { onMounted, ref } from "vue";
  import Checkbox from "primevue/checkbox";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import Banner from "@/components/nap_demo/Banner.vue";
  import OrderCard from "@/components/nap_demo/OrderCard.vue";
  import router from "@/router";
  import postReq from "@/api/post";
  import showNotification from "@/utils/showNotification";
  import { useRoute } from "vue-router";

  const $route = useRoute();
  const checked = ref(true);
  // const valueName = ref("Goi 1");
  const valueSoSoi = ref(0);
  const valueTotal = ref(0);

  const handleTotal = (ss, tt) => {
    valueSoSoi.value += ss;
    valueTotal.value += tt;

    if (valueSoSoi.value < 0) valueSoSoi.value = 0;
    if (valueTotal.value < 0) valueTotal.value = 0;
  };

  const callAPICreateOrder = async (quantity, amount) => {
    const res = await postReq("/order/create", {
      description: "GD NAP SOI",
      returnUrl: "http://localhost:5173/nap-demo",
      cancelUrl: "http://localhost:5173/nap-demo",
      amount,
      items: [
        {
          name: "Sồi",
          quantity,
          price: amount,
        },
      ],
    });

    if (res?.metadata?.data?.checkoutUrl) {
      localStorage.setItem("numberOfCoins", quantity);
      window.open(res.metadata.data.checkoutUrl, "_blank");
    } else {
      // showNotification();
      console.error("Lỗi :>> ");
    }
  };

  const onSubmit = async () => {
    await callAPICreateOrder(valueSoSoi.value, valueTotal.value);
  };

  onMounted(async () => {
    const status = $route.query.status;
    const orderCode = $route.query.orderCode;
    if (status && status == "PAID") {
      // console.log(
      //   'localStorage.getItem("numberOfCoins") :>> ',
      //   Number(localStorage.getItem("numberOfCoins"))
      // );
      const res = await postReq(`/order/${orderCode}`, {
        Username: JSON.parse(localStorage.getItem("Username")),
        numberOfCoins: localStorage.getItem("numberOfCoins"),
      });

      // console.log("res :>> ", res);

      router.push({ path: "/nap-demo" });
    }
  });
</script>

<template>
  <div>
    <HeaderAfterLogin></HeaderAfterLogin>
    <Banner></Banner>
    <div class="flex flex-wrap justify-around gap-5 p-8 inner">
      <!-- L -->
      <div class="left">
        <p class="text-3xl font-bold">Gói sồi dành cho bạn</p>
        <OrderCard
          tenGoi="Gói Nạp lần đầu"
          soLuongSoi="999"
          giaTien="2000"
          :handle="handleTotal"
        ></OrderCard>
        <OrderCard
          tenGoi="Gói Ưu đãi"
          soLuongSoi="1999"
          giaTien="3000"
          :handle="handleTotal"
        ></OrderCard>
      </div>

      <!-- R -->
      <form
        class="right"
        autocomplete="off"
        @submit.prevent="onSubmit"
      >
        <p class="text-3xl font-bold">Tóm tắt đơn hàng</p>
        <hr />
        <!--  -->
        <!-- <div class="flex items-center justify-between gap-4 py-2">
          <label
            class="font-bold"
            for="name"
            >Tên gói</label
          >
          <InputText
            id="name"
            type="text"
            disabled
            v-model="valueName"
          />
        </div> -->
        <!--  -->
        <!--  -->
        <div class="flex items-center justify-between gap-4 py-2">
          <label
            class="font-bold"
            for="soi"
            >Số sồi</label
          >
          <InputText
            id="soi"
            type="text"
            disabled
            v-model="valueSoSoi"
          />
        </div>
        <!--  -->
        <!--  -->
        <div class="flex items-center justify-between gap-4 py-2">
          <label
            class="font-bold"
            for="total"
            >Tổng tiền</label
          >
          <InputText
            id="total"
            type="text"
            disabled
            v-model="valueTotal"
          />
        </div>
        <!--  -->

        <div class="flex items-center gap-1">
          <Checkbox
            v-model="checked"
            :binary="true"
          />Tôi đồng ý với Điều khoản và Chính sách quy định bởi D4T Bookshop
        </div>

        <div class="flex justify-end w-full pt-6">
          <Button type="submit">Thanh toán với VietQR Pro</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  /*  */
</style>
