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

  const toast = useToast();
  const confirm = useConfirm();

  const books = ref([]);
  const isLoading = ref(true);
  const searchValue = ref("");

  const callAPI = async () => {
    const res = await getReq("/admin/book/list");

    books.value = res.metadata.books;
    // console.log("books.value :>> ", books.value);

    isLoading.value = false;
  };

  // Khai báo filter
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };

  // Khai báo computed property
  const truncatedBooks = computed(() => {
    return books.value.map((book) => ({
      ...book,
      Description: truncateDescription(book.Description, 100), // Giới hạn 100 ký tự
    }));
  });

  const confirm2 = async (title_for_search) => {
    confirm.require({
      message: "Do you want to delete this record?",
      header: "Danger Zone",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Delete",
      rejectClass: "p-button-secondary p-button-outlined",
      acceptClass: "p-button-danger",
      accept: async () => {
        await postReq("admin/book/toogle", { title_for_search });
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

  const callSearchAPI = async () => {
    const response = await postReq("/admin/book/search", {
      BookID: searchValue.value,
    });

    books.value = response.metadata.books;

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
              placeholder="Tìm tên sách..."
            />
          </IconField>
          <RouterLink :to="{ name: 'createbook' }">
            <Button
              class="float-right mr-4"
              label="Thêm sách"
            />
          </RouterLink>
        </div>
        <p
          v-if="isLoading"
          class="mt-4"
        >
          Loading...
        </p>
        <DataTable
          v-else
          :value="truncatedBooks"
          style="min-width: 200px"
          scrollable
        >
          <Column
            field="BookID"
            header="Mã sách"
            class="max-w-[80px]"
          ></Column>
          <Column
            field="Title"
            header="Tên sách"
          ></Column>
          <Column
            header="Ảnh bìa"
            field="CoverURL"
            class="max-w-[80px]"
          >
            <template #body="{ data }">
              <img
                :src="data.CoverURL"
                :alt="'anhbia'"
                class="max-w-[60px]"
              />
            </template>
          </Column>
          <Column
            field="Author"
            header="Tác giả"
          ></Column>
          <Column
            field="Categories"
            header="Thể loại"
            class="max-w-[100px]"
          ></Column>
          <Column
            field="Price"
            header="Giá"
          ></Column>
          <Column
            field="language"
            header="Ngôn ngữ"
            class="min-w-[100px]"
          ></Column>
          <Column
            field="Views"
            header="Lượt xem"
            class="min-w-[100px]"
          ></Column>
          <Column
            field="Description"
            header="Mô tả"
            class="max-w-60 min-w-40"
          ></Column>
          <Column
            field="star"
            header="Sao"
            class="min-w-[100px]"
          >
            <template #body="slotProps">
              <Rating
                v-model="slotProps.data.star"
                readonly
                :cancel="false"
              />
            </template>
          </Column>
          <Column
            header="Thao tác"
            class="min-w-[140px]"
          >
            <template #body="{ data }">
              <div class="flex">
                <router-link
                  :to="{
                    name: 'editbook',
                    query: { title_for_search: data.title_for_search },
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
                  @click="confirm2(data.title_for_search)"
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
</template>

<style scoped></style>
