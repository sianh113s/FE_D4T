<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import Sidebar from "@/components/default/Sidebar.vue";
  import FloatLabel from "primevue/floatlabel";
  import TabMenu from "primevue/tabmenu";
  import FileUpload from "primevue/fileupload";
  import { useToast } from "primevue/usetoast";
  import { ref } from "vue";

  const toast = useToast();

  const onUpload = () => {
    toast.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
      life: 2000,
    });
  };
  const selectedTab = ref(1);

  const check = ref(0);

  const items = ref([
    { label: "Thông tin cá nhân", icon: "pi pi-address-book", number: 1 },
    {
      label: "Tài khoản và bảo mật",
      icon: "pi pi-shield",
      number: 2,
    },
  ]);

  const user = ref({
    username: 'thanhtruc123',
    fullname: 'vi thi thanh truc',
    birthdate: '30/5/2000',
    gender: 'nữ',
    email: 'tructhanh@gmail.com',
    pass: '123',
    phone: '0382055453',
  });

  const update = () => {
    console.log(user);
  };

  const save = () => {

  };


</script>

<template>
  <HeaderAfterLogin></HeaderAfterLogin>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="m-[12px] top-[80px] flex-grow">
      <div>
        <p class="text-2xl font-semibold m-[18px]">Quản lý thông tin</p>
        <TabMenu :model="items">
          <template #item="{ item, props }">
            <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="selectedTab = item.number"
            >
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ item.label }}</span>
            </a>
          </template>
        </TabMenu>
      </div>
      <!-- Thông tin cá nhân -->
      <template v-if="selectedTab === 1">
        <div class="flex gap-4 content_profile">
          <form
            class="flex justify-between gap-14"
            autocomplete="off"
            @submit.prevent="update"
          >
            <div class="grid gap-6 mt-8">
              <div class="flex justify-content-center">
                <FloatLabel>
                  <InputText
                    class="rounded-[10px] w-[458px] h-[50px]"
                    id="username"
                    v-model="user.username"
                  />
                  <label for="username">Tên đăng nhập</label>
                </FloatLabel>
              </div>

              <div class="flex justify-content-center">
                <FloatLabel>
                  <InputText
                    class="rounded-[10px] w-[458px] h-[50px]"
                    id="fullname"
                    v-model="user.fullname"
                  />
                  <label for="fullname">Họ và tên</label>
                </FloatLabel>
              </div>

              <div class="flex justify-content-center">
                <FloatLabel>
                  <Calendar
                    class="rounded-[10px] w-[210px] h-[50px]"
                    id="birthdate"
                    dateFormat="dd/mm/yy"
                    v-model="user.birthdate"
                    showIcon :showOnFocus="false"
                  />
                  <label for="birthdate">Ngày sinh</label>
                </FloatLabel>

                <FloatLabel class="mx-[38px]">
                  <InputText
                    class="rounded-[10px] w-[210px] h-[50px]"
                    id="gender"
                    v-model="user.gender"
                  />
                  <label for="gender">Giới tính</label>
                </FloatLabel>
              </div>

              <div class="flex flex-wrap gap-3 justify-content-center">
                <Button
                  class="rounded-[20px] btn_update"
                  label="Cập nhật"
                  type="submit"
                />
                <Button
                  class="rounded-[20px] btn_cancel"
                  label="Hủy"
                  severity="contrast"
                  type="reset"
                />
              </div>
            </div>

            <!-- form-right -->
            <div class="flex flex-col items-center justify-center gap-4">
              <img
                src="@/assets/imgs/avatar_demo.png"
                alt=""
                width="150px"
              />
              <div class="flex card justify-content-center">
                <Toast />
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="image/*"
                  :maxFileSize="1000000"
                  @upload="onUpload"
                />
              </div>
              <!-- <Button
                class="rounded-[20px]"
                label="Thay ảnh"
                severity="secondary"
              /> -->
            </div>
          </form>
        </div>
      </template>
      <!-- Tài khoản và bảo mật -->
      <template v-else-if="selectedTab === 2">
        <form @submit="save" autocomplete="off">
          <div class="content_security">
            <div class="grid gap-6 mt-6">
              <div class="flex justify-content-center">
                <FloatLabel>
                  <InputText
                    class="rounded-[10px] w-[458px] h-[50px]"
                    id="useremail"
                    v-model="user.email"
                    disabled
                  />
                  <label for="useremail">Email</label>
                </FloatLabel>
              </div>

              <div class="flex justify-content-center">
                <FloatLabel>
                  <InputText
                    class="rounded-[10px] w-[458px] h-[50px]"
                    id="pass"
                    v-model="user.pass"
                    :feedback="false"
                  />
                  <label for="pass">Mật khẩu</label>
                </FloatLabel>
              </div>

              <div class="flex justify-content-center">
                <FloatLabel>
                  <InputText
                    class="rounded-[10px] w-[458px] h-[50px]"
                    id="phone"
                    v-model="user.phone"
                  />
                  <label for="phone">Số điện thoại</label>
                </FloatLabel>
              </div>

              <div class="flex flex-wrap gap-3 justify-content-center">
                <Button
                  class="rounded-[20px] btn_save"
                  label="Lưu"
                  type="submit"
                />
                <Button
                  class="rounded-[20px] btn_cancel"
                  label="Hủy"
                  severity="contrast"
                  type="reset"
                />
              </div>

              <div class="h-[calc(100vh-480px)] border-t">
                <a class="font-semibold"
                  >Bạn không có như cầu sử dụng tài khoản nữa?
                  <span
                    class="cursor-pointer text-emerald-500"
                    @click="(check = 1), (selectedTab = 3)"
                    >Xóa tài khoản</span
                  >
                </a>
              </div>
            </div>
          </div>
        </form>
      </template>
      <template v-else>
        <div class="mx-3 my-5">
          <p class="text-xl font-semibold">Bạn có chắc chắn muốn xóa?</p>
          <p class="text-base leading-relaxed">
            Tài khoản của bạn sẽ bị xóa vĩnh viễn, đồng thời các nội dung sở hữu
            như: trang cá nhân, tài khoản, bình luận, đánh giá sách, tủ sách cá
            nhân, sồi cũng sẽ bị mất vĩnh viễn khi tài khoản của bạn được xóa.
            <br />Hãy chắc chắn rằng bạn muốn xóa tài khoản.
          </p>
        </div>
        <hr />
        <div class="flex flex-wrap gap-3 mt-5 justify-content-center">
          <Button
            class="rounded-[20px] btn_canceldel"
            label="Hủy"
            severity="secondary"
          />
          <Button
            class="rounded-[20px] btn_del"
            label="Xóa"
          />
        </div>
      </template>
    </div>
  </div>

  <FooterApp></FooterApp>
</template>

<style scoped></style>
