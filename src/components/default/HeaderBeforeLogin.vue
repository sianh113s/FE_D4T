<script setup>
import { ref } from 'vue';

const isKindBookVisible = ref(false);

const showKindBook = () => {
  isKindBookVisible.value = true;
};

const hideKindBook = () => {
  isKindBookVisible.value = false;
};
</script>

<template>
  <div>
    <header class="">
      <div class="h-[80px] flex justify-between px-6 header__inner relative">
        <div class="left">
          <img class="w-[167px] h-[48px]" src="../../assets/imgs/logo-dai.png" alt="Logo" />
        </div>
        <div class="middle">
          <ul class="flex gap-[50px] items-center">
            <li class="kind p-4 cursor-pointer" @mouseenter="showKindBook" @mouseleave="hideKindBook">
              <span>Thể loại</span>
              <span><i class="font-thin pi pi-chevron-down" style="color: black"></i></span>
              <div class="kind-book absolute  border top-[80px] h-[400px] flex flex-col gap-[30px]" v-show="isKindBookVisible">
                <div class="kind-book-row w-[870px] relative flex justify-around gap-[50]">
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[21px] font-medium">Văn học</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>
                          <p>Tiểu thuyết</p>
                        </router-link> </li>
                      <li><router-link>
                          <p>Ngôn tình</p>
                        </router-link> </li>
                      <li><router-link>Xem tất cả</router-link> </li>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[21px] font-medium">Kinh tế</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>
                          <p>Quản Trị - Lãnh Đạo</p>
                        </router-link> </li>
                      <li><router-link>
                          <p>Marketing bán hàng</p>
                        </router-link> </li>
                      <li><router-link> Xem tất cả</router-link> </li>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[21px] font-medium">Tâm lý - Kỹ năng sống</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>
                          <p>Tâm lý</p>
                        </router-link> </li>
                      <li><router-link>
                          <p>Kỹ năng sống</p>
                        </router-link> </li>
                      <li><router-link>Xem tất cả</router-link> </li>
                    </ul>
                  </div>
                </div>
                <div class="kind-book-row w-[870px] relative flex justify-around gap-[50]">
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[21px] font-medium">Sách thiếu nhi</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>Manga - Comic</router-link> </li>
                      <li><router-link>Kiến thức bách khoa</router-link> </li>
                      <li><router-link>Xem tất cả</router-link> </li>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[21px] font-medium">Tiêu sử hồi ký</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>Câu chuyện cuộc đời</router-link> </li>
                      <li><router-link>Nghệ thuật - Giải trí</router-link> </li>
                      <li><router-link>Xem tất cả</router-link> </li>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link>
                      <span class="title text-[21px] font-medium">Sách học ngoại ngữ</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link>Tiếng Anh</router-link> </li>
                      <li><router-link>Tiếng Nhật</router-link> </li>
                      <li><router-link>Xem tất cả</router-link> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="p-4 cursor-pointer">Sách mới nhất</li>
            <li class="p-4 cursor-pointer">Hot</li>
            <li class="p-4 cursor-pointer">Nạp sồi</li>

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
        <div class="items-center gap-3 right">
          <router-link to="/signup">
            <Button class="rounded-[50px] cursor-pointer" label="Đăng ký" severity="secondary" outlined />
          </router-link>

          <router-link to="/signin">
            <Button class="rounded-[50px] cursor-pointer" label="Đăng nhập" outlined />
          </router-link>

        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.kind-book {
  visibility: hidden;
  padding: 24px 15px 20px;
  border-radius: 15px;
  background-color: #fff;
  transition: visibility 0.2s;
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

.subKindBook {
  font-weight: 310;
}

.subKindBook>li:nth-child(3) {
  color: #2489F4;
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
</style>
