<script setup>
  import Header from "../../components/admin_ui/Header.vue";
  import Sidebar from "../../components/admin_ui/Sidebar.vue";
  import Footer from "../../components/admin_ui/Footer.vue";

  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';

  import { ref, onMounted } from 'vue';

  const users = ref([
    {
      UserID: '1000',
      Username: 'Bamboo Watch',
      Password: 'bamboo-watch.jpg',
      Email: 'Accessories',
      Fullname: 'Kinh dị, Đời thường',
      Gender: 65,
      Birthday: 'English',
      Roles: 1234650
    },
    {
      UserID: '100',
      Username: 'Bamboo Watch',
      Password: 'bamboo-watch.jpg',
      Email: 'Accessories',
      Fullname: 'Kinh dị, Đời thường',
      Gender: 65,
      Birthday: 'English',
      Roles: 12350
    },
    {
      UserID: '20',
      Username: 'Bamboo Watch',
      Password: 'bamboo-watch.jpg',
      Email: 'Accessories',
      Fullname: 'Kinh dị, Đời thường',
      Gender: 65,
      Birthday: 'English',
      Roles: 13513513
    },

  ]);

</script>

<template>
  <Header></Header>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="my-5 top-[80px] flex-grow">
      <div class="card">
        <div class="flex">
          <IconField class="float-left" iconPosition="left">
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText  v-model="value3" placeholder="Search..." />
          </IconField>
        </div>
        <DataTable :value="users" tableStyle="min-width: 200px" scrollable scrollWidth="400px">
          <Column field="UserID" header="userID" class="max-w-[80px]"></Column>
          <Column field="Username" header="Tên đăng nhập"></Column>
          <Column field="Password" header="Mật khẩu"></Column>
          <Column field="Email" header="email"></Column>
          <Column field="Fullname" header="Họ tên"></Column>
          <Column field="Gender" header="Giới tính"></Column>
          <Column field="Birthday" header="Ngày sinh"></Column>
          <Column field="Roles" header="Vai trò"></Column>  
          <Column header="Thao tác" class="min-w-[80px]">
            <template #body>
              <RouterLink :to="{name: 'deleteuser' }">
                <label class="cursor-pointer font-medium bg-slate-200 p-1.5 rounded-md">Xóa</label>
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
