<script setup>
  import Header from "../../components/admin_ui/Header.vue";
  import Sidebar from "../../components/admin_ui/Sidebar.vue";
  import Footer from "../../components/admin_ui/Footer.vue";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import { ref, onMounted, watch } from "vue";
  import { debounce } from "lodash";
  import getReq from "@/api/get";
  import postReq from "@/api/post";
  import ConfirmDialog from "primevue/confirmdialog";
  import { useConfirm } from "primevue/useconfirm";
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const confirm = useConfirm();
  const confirm2 = async (ID) => {
    confirm.require({
      message: "Do you want to delete this record?",
      header: "Danger Zone",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Delete",
      rejectClass: "p-button-secondary p-button-outlined",
      acceptClass: "p-button-danger",
      accept: async () => {
        await postReq("/admin/comment/remove", { ID });
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

  const users = ref([]);
  const isLoading = ref(true);
  const searchValue = ref("");

  const callAPI = async () => {
    const res = await getReq("/admin/comment/list");

    users.value = res.metadata.comments;
    isLoading.value = false;
  };

  const callSearchAPI = async () => {
    const response = await postReq("/admin/comment/search", {
      Username: searchValue.value,
    });

    users.value = response.metadata.comments;

    isLoading.value = false;
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
              placeholder="Tên đăng nhập..."
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
          style="min-width: 200px"
          scrollable
        >
          <Column
            field="ID"
            header="ID"
            class="max-w-[80px]"
          ></Column>
          <Column
            field="Username"
            header="Tên đăng nhập"
          ></Column>

          <Column
            field="title_for_search"
            header="title_for_search"
          ></Column>
          <Column
            field="Content"
            header="Content"
          ></Column>
          <Column
            field="CommentDate"
            header="CommentDate"
          ></Column>

          <Column
            header="Thao tác"
            class="min-w-[80px]"
          >
            <template #body="{ data }">
              <Button
                @click="confirm2(data.ID)"
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
