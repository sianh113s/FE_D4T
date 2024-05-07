<script setup>
import { RouterLink } from "vue-router";
import { useConditionStore } from "@/store";
import { ref } from 'vue';

const isKindBookVisible = ref(false);
const isOverlayVisible = ref(false); // New ref

const showKindBook = () => {
  isKindBookVisible.value = true;
  isOverlayVisible.value = true; // Show overlay when mega menu is focused
};

const hideKindBook = () => {
  isKindBookVisible.value = false;
  isOverlayVisible.value = false; // Hide overlay when mega menu is not focused
};

const store = useConditionStore();
</script>

<template>
  <div>
    <header class="">
      <div class="h-[80px] flex justify-between px-6 header__inner">
        <div class="left">
          <img class="w-[167px] h-[48px]" src="../../assets/imgs/logo-dai.png" alt="Logo" />
        </div>
        <div class="middle">
          <ul class="flex gap-[50px] items-center">
            <li class=" kind p-4 cursor-pointer shadow-inner" @mouseenter="showKindBook" @mouseleave="hideKindBook">
              <span class="mr-1">Thể loại</span>
              <span><i class="font-thin pi pi-chevron-down" style="color: black"></i></span>
              <div class="kind-book absolute z-40 border top-[80px] h-[310px] flex flex-col gap-[30px]"
                v-show="isKindBookVisible">
                <div class="kind-book-row w-[870px] relative flex justify-around gap-[50]">
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[18px] font-medium">Văn học</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>
                          <p>Tiểu thuyết</p>
                        </router-link> </li>
                      <li><router-link>
                          <p>Ngôn tình</p>
                        </router-link> </li>
                      <p class="kind-link"><router-link>Xem tất cả</router-link> </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[18px] font-medium">Kinh tế</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>
                          <p>Quản Trị - Lãnh Đạo</p>
                        </router-link> </li>
                      <li><router-link>
                          <p>Marketing bán hàng</p>
                        </router-link> </li>
                      <p class="kind-link"><router-link>Xem tất cả</router-link> </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[18px] font-medium">Tâm lý - Kỹ năng sống</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>
                          <p>Tâm lý</p>
                        </router-link> </li>
                      <li><router-link>
                          <p>Kỹ năng sống</p>
                        </router-link> </li>
                      <p class="kind-link"><router-link>Xem tất cả</router-link> </p>
                    </ul>
                  </div>
                </div>
                <div class="kind-book-row w-[870px] relative flex justify-around gap-[50]">
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[18px] font-medium">Sách thiếu nhi</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>Manga - Comic</router-link> </li>
                      <li><router-link>Kiến thức bách khoa</router-link> </li>
                      <p class="kind-link"><router-link>Xem tất cả</router-link> </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[18px] font-medium">Tiêu sử hồi ký</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>Câu chuyện cuộc đời</router-link> </li>
                      <li><router-link>Nghệ thuật - Giải trí</router-link> </li>
                      <p class="kind-link"><router-link>Xem tất cả</router-link> </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[18px] font-medium">Sách học ngoại ngữ</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>Tiếng Anh</router-link> </li>
                      <li><router-link>Tiếng Nhật</router-link> </li>
                      <p class="kind-link"><router-link>Xem tất cả</router-link> </p>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="menu-hover p-4 cursor-pointer">Sách mới nhất</li>
            <li class="menu-hover p-4 cursor-pointer">Hot</li>
            <li class="menu-hover p-4 cursor-pointer">Nạp sồi</li>

            <li>
              <div class="flex flex-wrap gap-3 card justify-content-center">
                <IconField iconPosition="left">
                  <InputIcon class="pi pi-search"> </InputIcon>
                  <InputText class="rounded-[50px]" v-model="value1" placeholder="Search" />
                </IconField>
              </div>
            </li>
          </ul>
        </div>

        <!-- RIGHT -->
        <div class="relative items-center gap-4 right">
          <div class="px-3 py-5 cursor-pointer">
            <i class="text-[28px] pi pi-bell" style="color: black"></i>
          </div>
          <div @click="store.toggleIsHiddenHeaderDropdown" class="py-5 px-3 pb-[24px] cursor-pointer flex items-center gap-1">
            <!-- <img
              class="w-[30px] h-[30px]"
              src="../assets/svg/circle-user-regular.svg"
              alt=""
            /> -->
            <img class="w-[40px] h-[40px] rounded-[50px]" src="../../assets/imgs/avatar_demo.png" alt="" />
            <i class="pi pi-chevron-down" style="color: black"></i>
          </div>

          <div :class="{ hidden: store.isHiddenHeaderDropdown }" class="absolute top-[80px] right-0 z-40">
            <div class="tool-menu rounded-md pt-3 w-[254px] bg-[#fff]">
              <div class="flex items-center tooltip-top p-[15px] justify-between">
                <div class="flex flex-col t-left">
                  <span class="text-xl font-bold text-[#334155]">Dương Dũng</span>
                  <div class="flex items-center gap-3 pt-2">
                    <i class="pi pi-credit-card" style="color: #f3c201"></i><span
                      class="text-[#f3c201] font-semibold">10000</span>
                  </div>
                </div>
                <div class="t-right">
                  <img class="w-[50px] h-[50px] rounded-[50px]" src="../../assets/imgs/avatar_demo.png"
                    alt="circle-user-regular" />
                </div>
              </div>
              <div class="tooltip-middle">
                <div class="px-[15px] flex items-center justify-center">
                  <Button class="rounded-[50px] w-full" label="Nạp thêm sồi" />
                </div>
              </div>
              <div class="tooltip-bottom">
                <div class="p-[15px]">
                  <ul>
                    <li class="flex items-center gap-3">
                      <Button class="w-full" label="Quản lý tài khoản" severity="secondary" icon="pi pi-user-edit" text />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button class="w-full" label="Tủ sách cá nhân" severity="secondary" icon="pi pi-book" text />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button class="w-full" label="Hỗ trợ khách hàng" severity="secondary" icon="pi pi-headphones" text />
                    </li>
                    <li class="flex items-center gap-3">
                      <Button class="w-full" label="Đăng xuất" severity="secondary" icon="pi pi-sign-out" text />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div v-show="isOverlayVisible" class="overlay"></div>
  </div>
</template>

<style scoped>
header.kind:hover,
.mega-menu:hover {
  background-color: #fff;
}

.overlay {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

header {
  position: relative;
  z-index: 20;
}

.menu-hover:hover {
  color: #117554;
  transition: 0.3s ease;
}

.kind-book {
  visibility: hidden;
  padding: 24px 15px 20px;
  border-radius: 15px;
  background-color: #fff;
  transition: visibility 0.2s;
}

.kind {
  padding-top: 0px;
  padding-bottom: 0px;
}

.kind>span:hover {
  color: #117554;
  transition: 0.3s ease;
}

.kind>span:nth-child(1) {
  line-height: 80px;
}

.kind:hover .kind-book {
  visibility: visible;
  transition: visibility 0.2s linear;
}

.kind:not(:hover) .kind-book {
  visibility: hidden;
  transition: visibility 0.2s linear;
}

.kind-link {
  font-size: 13px;
  color: #0da371;
}

.subKindBook {
  font-weight: 310;
  font-size: 15px;
}

.subKindBook>li:hover {
  color: rgb(174, 12, 12);
}

.left,
.middle,
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__inner {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}

.tool-menu {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
