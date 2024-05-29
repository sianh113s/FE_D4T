<script setup>
  import postReq from "@/api/post";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useToast } from "primevue/usetoast";
  import showNotification from "@/utils/showNotification";

  const toast = useToast();
  const router = useRouter();

  const voucherValue = ref("D4T");

  const goTHT = () => {
    router.push("/Nap/Payment/Tim-hieu-them");
  };

  const onSubmit = async () => {
    const res = await postReq("/transaction/add-coins", {
      voucherCode: voucherValue.value,
    });

    if (res.status === 400) {
      showNotification(
        toast,
        "error",
        "Thông báo",
        res?.data?.message || "Mã voucher không hợp lệ hoặc đã hết hạn!",
        2000
      );
      return;
    } else {
      showNotification(
        toast,
        "success",
        "Thông báo",
        "Sử dụng voucher thành công!",
        2000
      );

      return;
    }
  };
</script>

<template>
  <section
    class="w-[100%] flex flex-row items-start justify-end pt-0 px-[51px] pb-[19.9px] box-border max-w-full mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border"
  >
    <div
      class="m-0 flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full shrink-0"
    >
      <div
        class="flex flex-row items-end justify-start gap-[4px] max-w-full mq800:flex-wrap"
      >
        <div
          class="box-border flex flex-col items-start justify-end max-w-full px-0 pt-0 pb-px"
        >
          <div class="flex flex-col items-start gap-3 text-left text-black">
            <p class="text-2xl font-bold">Kích hoạt mã Code</p>
            <p class="text-xl">
              Nhập voucher. Nhận ngay Hạt Sồi vào tài khoản!<span
                class="text-[#10b981] pl-3 cursor-pointer underline decoration-solid underline-offset-1"
                @click="goTHT"
              >
                Voucher code dành cho bạn</span
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Kích hoạt mã Code -->
      <form
        autocomplete="off"
        class="flex gap-4 pt-4"
        @submit.prevent="onSubmit"
      >
        <FloatLabel>
          <InputText
            id="voucher"
            v-model="voucherValue"
          />
          <label for="voucher">Voucher Code</label>
        </FloatLabel>
        <Button
          type="submit"
          class=""
        >
          <b class="relative text-13xl font-segoe-ui text-white text-left z-[1]"
            >Kích hoạt ngay</b
          >
        </Button>
      </form>
    </div>
    <Toast />
  </section>
  <!-- <div v-if="isNotificationVisible" class="notification">
    Thông báo của bạn ở đây!
    <span @click="closeNotification" class="close-button brown">Đóng</span>
  </div> -->
</template>
