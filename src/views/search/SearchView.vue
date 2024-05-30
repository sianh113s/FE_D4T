<script setup>
  import postReq from "@/api/post";
  import FooterApp from "@/components/default/FooterApp.vue";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import HeaderBeforeLogin from "@/components/default/HeaderBeforeLogin.vue";
  import { useConditionStore } from "@/store";
  import { ref, watch } from "vue";
  import { onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const $route = useRoute();
  const keyword = ref($route.query.keyword);
  const store = useConditionStore();

  const books = ref([]);
  const category = ref("");

  const callAPI = async () => {
    try {
      const res = await postReq("/book/search-name", { title: keyword.value });
      books.value = res.metadata.books || [];
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  const searchAPI = async () => {
    try {
      const res = await postReq("/book/search-category", {
        category: category.value,
      });
      console.log("res :>> ", res);
      books.value = res.metadata.books || [];

      keyword.value = "";
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  onMounted(callAPI);

  watch(
    () => $route.query.keyword,
    (newKeyword) => {
      keyword.value = newKeyword || "";
      callAPI();
    }
  );
</script>

<template>
  <div>
    <div>
      <HeaderBeforeLogin v-if="!store.isLoggedIn" />
      <HeaderAfterLogin v-else />
    </div>

    <!-- MAIN -->
    <div class="main">
      <div class="py-7">
        <h1 class="text-3xl font-bold text-center">Tìm kiếm sách</h1>
      </div>

      <div>
        <div class="border border-[#ccc] py-2 px-4">
          <span class="text-xl text-center">
            Từ khóa:
            <InputText
              v-model="keyword"
              placeholder="Tên sách"
              @focusout="callAPI"
            ></InputText>
          </span>
        </div>
        <div class="border border-[#ccc] py-2 px-4">
          <span class="text-xl text-center">
            Thể loại:
            <InputText
              v-model="category"
              placeholder="Thể loại"
              @focusout="searchAPI"
            ></InputText>
          </span>
        </div>
      </div>

      <!--  -->
      <div class="flex justify-center w-full">
        <div class="p-5 w-[1380px]">
          <p
            v-if="books.length === 0"
            class="pb-[120px] text-lg font-semibold text-center"
          >
            Không tìm thấy sách.
          </p>
          <ul class="flex flex-wrap justify-start gap-6">
            <li
              v-for="(book, index) in books"
              :key="index"
              class="flex flex-col items-center justify-center"
            >
              <router-link
                :to="{
                  name: 'Sach',
                  query: { title_for_search: book.title_for_search },
                }"
              >
                <img
                  class="w-[200px] block border border-[#ccc] rounded-lg"
                  :src="book.CoverURL"
                  alt="img"
                />
                <span class="pt-2 font-bold">{{ book.Title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!--  -->
    </div>

    <!--  -->
    <div>
      <FooterApp />
    </div>
  </div>
</template>

<style scoped>
  /*  */
</style>
