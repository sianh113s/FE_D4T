<script setup>
  import Header from "../../components/admin_ui/Header.vue";
  import Sidebar from "../../components/admin_ui/Sidebar.vue";
  import Footer from "../../components/admin_ui/Footer.vue";

  import DataTable from "primevue/datatable";
  import Column from "primevue/column";

  import { ref, onMounted } from "vue";

  const books = ref([
    {
      BookID: "1000",
      Title: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      Author: "Accessories",
      Categories: "Kinh dị, Đời thường",
      Price: 65,
      language: "English",
      Views: 1234650,
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam.",
      star: 5,
    },
    {
      BookID: "100",
      Title: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      Author: "Accessories",
      Categories: "Kinh dị, Đời thường",
      Price: 65,
      language: "English",
      Views: 12350,
      Description:
        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam.",
      star: 3,
    },
    {
      BookID: "20",
      Title: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      Author: "Accessories",
      Categories: "Kinh dị, Đời thường",
      Price: 65,
      language: "English",
      Views: 13513513,
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae et leo duis ut diam.",
      star: 4,
    },
  ]);
</script>

<template>
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
              v-model="value2"
              placeholder="Search..."
            />
          </IconField>
          <RouterLink :to="{ name: 'createbook' }">
            <Button
              class="float-right mr-4"
              label="Thêm sách"
            />
          </RouterLink>
        </div>
        <DataTable
          :value="books"
          tableStyle="min-width: 200px"
          scrollable
          scrollWidth="400px"
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
            class="max-w-[80px]"
          >
            <template #body="">
              <img
                src="../../assets/imgs/book_demo.jpg"
                :alt="anhbia"
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
            <template #body>
              <RouterLink :to="{ name: 'editbook' }">
                <label
                  class="cursor-pointer font-medium bg-slate-200 p-1.5 rounded-md"
                  >Sửa</label
                >
              </RouterLink>
              &nbsp;
              <RouterLink :to="{ name: 'deletebook' }">
                <label
                  class="cursor-pointer font-medium bg-slate-200 p-1.5 rounded-md"
                  >Xóa</label
                >
              </RouterLink>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
