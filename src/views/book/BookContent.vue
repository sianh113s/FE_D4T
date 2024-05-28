<script setup>
  import http from "@/api/http-common";
  import postReq from "@/api/post";
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import SwitchPage from "@/components/book/SwitchPage.vue";
  import CreateComment from "@/components/book/CreateComment.vue";
  import showNotification from "@/utils/showNotification";
  // import SwitchPageHeader from "@/components/book/SwitchPageHeader.vue";
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const $route = useRoute();

  const home = ref({
    icon: "pi pi-home ",
    label: "Trang chủ",
    route: "/",
  });
  const items = ref([{ label: "", route: "/" }]);

  const title_for_search = $route.query.title_for_search;
  const b_page = $route.query.page;

  const resAPIdata = ref({});

  const title = ref("");
  const fileUrl = ref("");
  const page = ref(1);
  const PageNumber = ref(1);

  page.value = b_page ? parseInt(b_page) : 1;

  onMounted(async () => {
    const dataReq = {
      title: title_for_search,
    };

    resAPIdata.value = await postReq("/book/search-tag-name", dataReq);
    title.value = resAPIdata.value.metadata.book.Title;

    PageNumber.value = resAPIdata.value.metadata.book.PageNumber;

    fileUrl.value = `http://localhost:3000/v1/api/read?page=${page.value}&title=${title.value}`;
  });

  //
  const handleNewPage = (p) => {
    page.value = p;

    fileUrl.value = `http://localhost:3000/v1/api/read?page=${page.value}&title=${title.value}`;
  };

  // ICON
  const showIcon = ref(false);

  const clickPositionY = ref(120);
  // Hàm để thay đổi trạng thái của việc hiển thị icon
  const toggleIcon = (event) => {
    showIcon.value = !showIcon.value;
    const imageRect = event.target.getBoundingClientRect();
    clickPositionY.value = event.clientY - imageRect.top;
  };

  const callAPICreateBookmark = async () => {
    const dataReq = {
      title_for_search,
      Username: JSON.parse(localStorage.getItem("Username")),
      PageNumber: page.value,
      clickPositionY: clickPositionY.value,
    };

    // console.log("dataReq :>> ", dataReq);

    if (dataReq.Username === "") {
      showNotification(
        toast,
        "error",
        "Thông báo",
        "Bạn cần đăng nhập để thêm Bookmark!",
        2000
      );

      return;
    }

    const resAPIdata = await postReq("/book/create-bookmark", dataReq);

    // console.log("resAPIdata :>> ", resAPIdata);

    if (resAPIdata.status === 200) {
      showNotification(
        toast,
        "success",
        "Thông báo",
        "Bạn đã đánh dấu trang thành công!",
        2000
      );

      return;
    }
  };

  const handleCreateNewBookmark = async () => {
    const curUsername = JSON.parse(localStorage.getItem("Username")) || "";
    if (curUsername === "") {
      showNotification(
        toast,
        "error",
        "Thông báo",
        "Bạn cần đăng nhập để thêm Bookmark!",
        2000
      );

      return;
    }
    callAPICreateBookmark();
  };
</script>
<template>
  <div>
    <Toast />
    <div>
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
              <span style="color: black; font-weight: bold"
                >{{ item.label }}
              </span>
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
      <!--  -->
    </div>
    <div>
      <div class="flex flex-col">
        <div>
          <b class="flex justify-center mt-10 text-4xl">{{
            resAPIdata.metadata?.book?.Title
          }}</b>
        </div>
        <div class="image-container">
          <img
            class="mx-auto my-[30px] w-[880px] border border-[#ccc]"
            crossorigin="anonymous"
            :src="fileUrl"
            alt="Page Image"
            @click="toggleIcon"
          />

          <span
            v-if="showIcon"
            @click="handleCreateNewBookmark"
            class="text-3xl cursor-pointer icon pi pi-bookmark-fill"
            :style="{ top: clickPositionY + 'px' }"
          ></span>
        </div>
      </div>
      <ScrollTop />
    </div>

    <div class="flex items-center justify-center w-full">
      <SwitchPage
        :page="Number(page)"
        :maxPage="PageNumber"
        @newPage="handleNewPage"
      />
    </div>
    <!-- <div class="flex items-center justify-center w-full">
      <SwitchPageHeader
        :page="Number(page)"
        :maxPage="1000"
        @newPage="handleNewPage"
      />
    </div> -->

    <CreateComment :title_for_search="title_for_search"></CreateComment>
  </div>
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
