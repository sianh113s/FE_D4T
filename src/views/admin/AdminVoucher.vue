<script setup>
  import Header from "../../components/admin_ui/Header.vue";
  import Sidebar from "../../components/admin_ui/Sidebar.vue";
  import Footer from "../../components/admin_ui/Footer.vue";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import { ref, onMounted, watch, computed } from "vue";
  import getReq from "@/api/get";
  import ConfirmDialog from "primevue/confirmdialog";
  import { useConfirm } from "primevue/useconfirm";
  import { useToast } from "primevue/usetoast";
  import { debounce } from "lodash";
  import postReq from "@/api/post";
  import showNotification from "@/utils/showNotification";

  const toast = useToast();
  const confirm = useConfirm();

  const visible = ref(false);
  const vouchers = ref([]);
  const isLoading = ref(true);
  const searchValue = ref("");
  const Code = ref("1");
  const Amount = ref("1");
  const ExpiryTime = ref("1");

  const callAPI = async () => {
    const res = await getReq("/admin/vouchers/list");

    vouchers.value = res.metadata.vouchers;

    isLoading.value = false;
  };

  const confirm2 = async (VoucherID) => {
    confirm.require({
      message: `Bạn muốn xóa voucher ${VoucherID}?`,
      header: "Danger Zone",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Delete",
      rejectClass: "p-button-secondary p-button-outlined",
      acceptClass: "p-button-danger",
      accept: async () => {
        await postReq("admin/voucher/delete", { VoucherID });
        await callAPI();

        toast.add({
          severity: "info",
          summary: "Confirmed",
          detail: "Xóa voucher thành công!",
          life: 2000,
        });
      },
      reject: () => {
        toast.add({
          severity: "error",
          summary: "Rejected",
          detail: "Thao tác bị hủy!",
          life: 1000,
        });
      },
    });
  };

  const callSearchAPI = async () => {
    const response = await postReq("/admin/voucher/search", {
      Code: searchValue.value,
    });

    // console.log("response :>> ", response);

    vouchers.value = response.metadata.vouchers;

    isLoading.value = false;
  };

  const callCreateAPI = async () => {
    const response = await postReq("/admin/voucher/create", {
      Code: Code.value,
      Amount: Amount.value,
      ExpiryTime: ExpiryTime.value,
    });

    console.log("response :>> ", response);

    vouchers.value = response.metadata.vouchers;

    visible.value = false;

    await callAPI();

    showNotification(
      toast,
      "success",
      "Thông báo",
      "Tạo Voucher thành công!",
      1500
    );
  };

  const debouncedSearch = debounce(async () => {
    await callSearchAPI();
  }, 500);

  watch(searchValue, async () => {
    await debouncedSearch();
  });

  onMounted(callAPI);
</script>

<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <!--  -->
  <Header></Header>

  <!--  -->
  <div class="flex">
    <!--  -->
    <Sidebar></Sidebar>
    <div class="my-5 top-[80px] flex-grow">
      <div class="card">
        <div class="overflow-hidden">
          <IconField
            class="float-left"
            iconPosition="left"
          >
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="searchValue"
              placeholder="Tìm voucher..."
            />
          </IconField>
          <!-- <RouterLink :to="{ name: 'createbook' }"> -->
          <Button
            @click="visible = true"
            class="float-right mr-4"
            label="Thêm voucher"
          />
          <!-- </RouterLink> -->
        </div>
        <p
          v-if="isLoading"
          class="mt-4"
        >
          Loading...
        </p>
        <DataTable
          v-else
          :value="vouchers"
          style="min-width: 200px"
          scrollable
        >
          <Column
            field="VoucherID"
            header="Mã Voucher"
            class="max-w-[80px]"
          ></Column>
          <Column
            field="Code"
            header="Code"
          ></Column>
          <Column
            header="Giá trị"
            field="Amount"
          >
          </Column>
          <Column
            field="ExpiryTime"
            header="Thời gian hết hạn"
          ></Column>

          <Column
            header="Thao tác"
            class="min-w-[140px]"
          >
            <template #body="{ data }">
              <div class="flex">
                <router-link
                  :to="{
                    name: 'editvoucher',
                    query: { VoucherID: data.VoucherID },
                  }"
                >
                  <Button
                    label="Sửa"
                    severity="info"
                    outlined
                  ></Button>
                </router-link>

                &nbsp;

                <Button
                  @click="confirm2(data.VoucherID)"
                  label="Xóa"
                  severity="danger"
                  outlined
                ></Button>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
  <Footer></Footer>

  <!--  -->
  <div class="">
    <Dialog
      v-model:visible="visible"
      modal
      header="Thêm voucher"
      :style="{ width: '25rem' }"
    >
      <span class="block mb-5 p-text-secondary"></span>
      <div class="flex gap-3 mb-3 align-items-center">
        <label
          for="code"
          class="font-semibold w-6rem"
          >Code</label
        >
        <InputText
          v-model="Code"
          id="code"
          class="flex-auto"
          autocomplete="off"
        />
      </div>

      <!--  -->
      <div class="flex items-center justify-center gap-3 mb-5">
        <label
          for="amount"
          class="font-semibold w-6rem"
          >Amount</label
        >
        <InputText
          v-model="Amount"
          id="amount"
          class="flex-auto"
          autocomplete="off"
          type="number"
        />
      </div>

      <!--  -->
      <div class="flex gap-3 mb-5 align-items-center">
        <label
          for="ExpiryTime"
          class="font-semibold w-6rem"
          >ExpiryTime</label
        >
        <InputText
          v-model="ExpiryTime"
          id="ExpiryTime"
          class="flex-auto"
          autocomplete="off"
          placeholder="Hết hạn sau ... giờ"
        />
      </div>

      <!-- TT -->
      <div class="flex gap-2 justify-content-end">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button
          type="button"
          label="Save"
          @click="callCreateAPI"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
