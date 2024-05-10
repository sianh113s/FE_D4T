<script setup>
  import http from "@/api/http-common";
  import postReq from "@/api/post";
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  const $route = useRoute();

  const home = ref({
    icon: "pi pi-home ",
    label: "Trang chủ",
    route: "/",
  });
  const items = ref([{ label: "", route: "/" }]);

  const title_for_search = $route.query.title_for_search;

  const resAPIdata = ref({});

  const title = ref("");
  const fileUrl = ref("");
  const page = ref("120");

  onMounted(async () => {
    const dataReq = {
      title: title_for_search,
    };

    resAPIdata.value = await postReq("/book/search-tag-name", dataReq);
    title.value = resAPIdata.value.metadata.book.Title;

    fileUrl.value = `http://localhost:3000/v1/api/read?page=${page.value}&title=${title.value}`;
  });

  const showIcon = ref(false);

  const clickPositionY = ref(120);
  // Hàm để thay đổi trạng thái của việc hiển thị icon
  const toggleIcon = (event) => {
    showIcon.value = !showIcon.value;
    // Tính toán vị trí y của icon dựa trên vị trí click và kích thước của hình ảnh
    const imageRect = event.target.getBoundingClientRect();
    clickPositionY.value = event.clientY - imageRect.top;
  };
</script>
<template>
  <Breadcrumb
    :home="home"
    :model="items"
    class="navbar"
  >
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a
          :href="href"
          v-bind="props.action"
          @click="navigate"
        >
          <span
            :class="[item.icon, 'text-color']"
            style="color: black"
          />&nbsp;
          <span style="color: black; font-weight: bold">{{ item.label }} </span>
        </a>
      </router-link>
      <a
        v-else
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span class="font-bold text-color">{{ item.label }}</span>
      </a>
    </template>
  </Breadcrumb>
  <div class="flex flex-col">
    <div>
      <b class="flex justify-center mt-10 text-4xl">{{
        resAPIdata.metadata?.book?.Title
      }}</b>
    </div>
    <div class="image-container">
      <img
        class="mx-auto my-[30px] w-[1024px] border border-[#ccc]"
        crossorigin="anonymous"
        :src="fileUrl"
        alt="Page Image"
        @click="toggleIcon"
      />

      <span
        v-if="showIcon"
        class="icon pi pi-bookmark-fill"
        :style="{ top: clickPositionY + 'px' }"
      ></span>
    </div>
  </div>
  <ScrollTop />
</template>
<style scoped>
  .navbar {
    background: linear-gradient(
      90deg,
      rgba(112, 225, 205, 0.06),
      rgba(61, 123, 112, 0.06)
    );
  }
  .image-container {
    position: relative;
    display: inline-block;
  }

  .icon {
    position: absolute;
    top: 0;
    left: auto;
    right: 300px;
  }
</style>
