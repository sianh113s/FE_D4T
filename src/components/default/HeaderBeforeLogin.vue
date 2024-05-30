<script setup>
  import { ref } from "vue";
  const searchValue = ref("");
  const isKindBookVisible = ref(false);
  const isOverlayVisible = ref(false); // New ref
  import router from "@/router";

  const showKindBook = () => {
    isKindBookVisible.value = true;
    isOverlayVisible.value = true; // Show overlay when mega menu is focused
  };

  const hideKindBook = () => {
    isKindBookVisible.value = false;
    isOverlayVisible.value = false; // Hide overlay when mega menu is not focused
  };

  const searchFn = () => {
    if (searchValue.value !== "")
      router.push({
        path: "/search",
        query: {
          keyword: searchValue.value,
        },
      });
    else return;
  };
</script>

<template>
  <div>
    <header class="w-screen">
      <div class="h-[80px] flex justify-between px-6 header__inner relative">
        <div class="left">
          <RouterLink :to="{ name: 'home' }">
            <img
              class="w-[167px] h-[48px]"
              src="../../assets/imgs/logo-dai.png"
              alt="Logo"
            />
          </RouterLink>
        </div>
        <div class="middle">
          <ul class="flex gap-[50px] items-center">
            <li
              class="p-4 cursor-pointer kind"
              @mouseenter="showKindBook"
              @mouseleave="hideKindBook"
            >
              <span class="mr-1">Thể loại</span>
              <span
                ><i
                  class="font-thin pi pi-chevron-down"
                  style="color: black"
                ></i
              ></span>
              <div
                class="kind-book absolute z-40 border top-[80px] h-[310px] flex flex-col gap-[30px]"
                v-show="isKindBookVisible"
              >
                <div
                  class="kind-book-row w-[870px] relative flex justify-around gap-[50]"
                >
                  <div class="kind-book-row-item w-[200px]">
                    <router-link to="/">
                      <span class="title text-[18px] font-medium">Văn học</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li>
                        <router-link to="/">
                          <p>Tiểu thuyết</p>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/">
                          <p>Ngôn tình</p>
                        </router-link>
                      </li>
                      <p class="kind-link">
                        <router-link to="/">Xem tất cả</router-link>
                      </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link to="/">
                      <span class="title text-[18px] font-medium">Kinh tế</span>
                    </router-link>
                    <ul class="subKindBook">
                      <li>
                        <router-link to="/">
                          <p>Quản Trị - Lãnh Đạo</p>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/">
                          <p>Marketing bán hàng</p>
                        </router-link>
                      </li>
                      <p class="kind-link">
                        <router-link to="/">Xem tất cả</router-link>
                      </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link to="/">
                      <span class="title text-[18px] font-medium"
                        >Tâm lý - Kỹ năng sống</span
                      >
                    </router-link>
                    <ul class="subKindBook">
                      <li>
                        <router-link to="/">
                          <p>Tâm lý</p>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/">
                          <p>Kỹ năng sống</p>
                        </router-link>
                      </li>
                      <p class="kind-link">
                        <router-link to="/">Xem tất cả</router-link>
                      </p>
                    </ul>
                  </div>
                </div>
                <div
                  class="kind-book-row w-[870px] relative flex justify-around gap-[50]"
                >
                  <div class="kind-book-row-item w-[200px]">
                    <router-link to="/">
                      <span class="title text-[18px] font-medium"
                        >Sách thiếu nhi</span
                      >
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link to="/">Manga - Comic</router-link></li>
                      <li>
                        <router-link to="/">Kiến thức bách khoa</router-link>
                      </li>
                      <p class="kind-link">
                        <router-link to="/">Xem tất cả</router-link>
                      </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link to="/">
                      <span class="title text-[18px] font-medium"
                        >Tiêu sử hồi ký</span
                      >
                    </router-link>
                    <ul class="subKindBook">
                      <li>
                        <router-link to="/">Câu chuyện cuộc đời</router-link>
                      </li>
                      <li>
                        <router-link to="/">Nghệ thuật - Giải trí</router-link>
                      </li>
                      <p class="kind-link">
                        <router-link to="/">Xem tất cả</router-link>
                      </p>
                    </ul>
                  </div>
                  <div class="kind-book-row-item w-[200px]">
                    <router-link to="/">
                      <span class="title text-[18px] font-medium"
                        >Sách học ngoại ngữ</span
                      >
                    </router-link>
                    <ul class="subKindBook">
                      <li><router-link to="/">Tiếng Anh</router-link></li>
                      <li><router-link to="/">Tiếng Nhật</router-link></li>
                      <p class="kind-link">
                        <router-link to="/">Xem tất cả</router-link>
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="p-4 cursor-pointer">
              <a href="#sachmoinhat"> Sách mới nhất </a>
            </li>
            <li class="p-4 cursor-pointer menu-hover">
              <a href="#sachhot"> Hot </a>
            </li>
            <li class="p-4 cursor-pointer menu-hover">Nạp sồi</li>

            <li>
              <div class="flex flex-wrap gap-3 card justify-content-center">
                <IconField iconPosition="left">
                  <InputIcon class="pi pi-search"> </InputIcon>
                  <InputText
                    class="rounded-[50px]"
                    v-model="searchValue"
                    placeholder="Search"
                    @focusout="searchFn"
                  />
                </IconField>
              </div>
            </li>
          </ul>
        </div>

        <div class="items-center gap-3 right">
          <router-link to="/signup">
            <Button
              class="rounded-[50px] cursor-pointer"
              label="Đăng ký"
              severity="secondary"
              outlined
            />
          </router-link>

          <router-link to="/signin">
            <Button
              class="rounded-[50px] cursor-pointer"
              label="Đăng nhập"
              outlined
            />
          </router-link>
        </div>
      </div>
    </header>
    <div
      v-show="isOverlayVisible"
      class="overlay"
    ></div>
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

  .kind > span:hover {
    color: #117554;
    transition: 0.3s ease;
  }

  .kind > span:nth-child(1) {
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

  .subKindBook > li:hover {
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
</style>
