<script setup>
  import { ref, onMounted, watch } from "vue";
  import { debounce } from "lodash";
  import getReq from "@/api/get";
  import postReq from "@/api/post";
  import Header from "../../components/admin_ui/Header.vue";
  import Sidebar from "../../components/admin_ui/Sidebar.vue";
  import Footer from "../../components/admin_ui/Footer.vue";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import ConfirmDialog from "primevue/confirmdialog";
  import { useConfirm } from "primevue/useconfirm";
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const confirm = useConfirm();

  const confirm2 = async (Username) => {
    confirm.require({
      message: "Do you want to delete this record?",
      header: "Danger Zone",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Delete",
      rejectClass: "p-button-secondary p-button-outlined",
      acceptClass: "p-button-danger",
      accept: async () => {
        await postReq("/admin/user/remove", { Username });
        await callAPI();

        toast.add({
          severity: "info",
          summary: "Confirmed",
          detail: "Xóa thành công!",
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

  const response = ref(null);
  const isLoading = ref(true);
  const users = ref([]);
  const searchValue = ref("");

  const callAPI = async () => {
    response.value = await getReq("/admin/users");

    users.value = response.value.metadata.users;

    isLoading.value = false;
  };

  const callSearchAPI = async () => {
    response.value = await postReq("/admin/user/search", {
      FullName: searchValue.value,
    });

    users.value = response.value.metadata.users;

    isLoading.value = false;
  };

  const debouncedSearch = debounce(async () => {
    await callSearchAPI();
  }, 500);

  watch(searchValue, async () => {
    await debouncedSearch();
  });

  onMounted(async () => {
    await callAPI();
  });
</script>

<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <Header></Header>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="my-5 top-[80px] flex-grow">
      <div class="card">
        <div class="flex">
          <IconField
            class="float-left"
            iconPosition="left"
          >
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="searchValue"
              placeholder="Tìm kiếm..."
            />
          </IconField>
        </div>
        <p
          v-if="isLoading"
          class="mt-4"
        >
          Loading...
        </p>
        <DataTable
          v-else
          :value="users"
          tableStyle="min-width: 200px"
          scrollable
          scrollWidth="400px"
        >
          <Column
            field="UserID"
            header="UserID"
            class="max-w-[80px]"
          ></Column>
          <Column
            field="Username"
            header="Tên đăng nhập"
          ></Column>
          <Column
            field="FullName"
            header="Họ tên"
          ></Column>
          <Column
            field="Email"
            header="Email"
          ></Column>
          <Column
            field="Gender"
            header="Giới tính"
          ></Column>
          <Column
            field="Birthday"
            header="Ngày sinh"
          ></Column>
          <Column
            field="coins"
            header="Số dư"
          ></Column>
          <Column
            field="Roles"
            header="Vai trò"
          ></Column>
          <Column
            header="Thao tác"
            field="Username"
            class="min-w-[80px]"
          >
            <template #body="{ data }">
              <Button
                @click="confirm2(data.Username)"
                label="Xóa"
                severity="danger"
                outlined
              ></Button>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
