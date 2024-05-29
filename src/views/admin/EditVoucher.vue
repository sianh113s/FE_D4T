<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import InputText from "primevue/inputtext";
  import Button from "primevue/button";
  import Dropdown from "primevue/dropdown";
  import Textarea from "primevue/textarea";
  import postReq from "@/api/post";

  const router = useRouter();
  const $route = useRoute();

  const VoucherID = $route.query.VoucherID;

  const voucher = ref({});

  const callAPI = async () => {
    const res = await postReq("/admin/voucher/search/id", {
      VoucherID,
    });

    voucher.value = res.metadata.voucher;
  };

  onMounted(callAPI);

  const updateVoucher = async () => {
    try {
      await postReq("/admin/voucher/update", voucher.value);

      router.push({ name: "admin_voucher" });
    } catch (error) {
      console.error("Error updating voucher:", error);
      // Handle error
    }
  };
</script>

<template>
  <div class="pt-5 p-card">
    <div class="p-card-header">
      <h2 class="font-bold uppercase">Sửa Thông Tin Voucher</h2>
    </div>
    <div class="p-card-body">
      <div class="grid p-fluid formgrid">
        <div class="field col-12">
          <label for="VoucherID">VoucherID</label>
          <InputText
            v-model="voucher.VoucherID"
            id="VoucherID"
            disabled
          />
        </div>
        <div class="field col-12">
          <label for="code">Code</label>
          <InputText
            v-model="voucher.Code"
            id="code"
            disabled
          />
        </div>
        <div class="field col-12">
          <label for="Amount">Amount</label>
          <InputText
            v-model="voucher.Amount"
            id="Amount"
          />
        </div>

        <div class="pt-5 field col-12">
          <Button
            label="Update Voucher"
            @click="updateVoucher"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .p-card {
    max-width: 600px;
    margin: auto;
  }
  .p-card-header {
    text-align: center;
  }
</style>
