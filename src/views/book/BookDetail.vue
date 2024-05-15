<script setup>
  import { ref, computed, onMounted } from "vue";
  import Avatar from "primevue/avatar";
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import postReq from "@/api/post";
  import showNotification from "@/utils/showNotification";
  import { useToast } from "primevue/usetoast";
  import router from "@/router";
  import { useRoute } from "vue-router";
  const toast = useToast();
  const $route = useRoute();

  // Reactive variables
  const value = ref(4); // Example value
  const home = ref({
    icon: "pi pi-home ",
    label: "Trang chủ",
    route: "/",
  });

  const title_for_search = $route.query.title_for_search;

  // Example home object
  const showFullContent = ref(false); // Boolean flag
  const items = ref([{ label: "Tết ở làng địa ngục", route: "/sach" }]); // Example list of items
  const user = ref([
    {
      avatar:
        "https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg",
    },
  ]); // Example user data
  const chapters = ref([]);
  const commentList = ref([]);

  // API
  let resAPIdata = ref({});
  const callAPI = async () => {
    const dataReq = {
      title: title_for_search,
    };
    const dataReq2 = {
      title_for_search,
    };
    const dataRequestGetComments = {
      title_for_search,
    };
    // console.log("dataReq2 :>> ", dataReq2);
    const responseBookmarks = await postReq("/book/bookmarks", dataReq2);

    resAPIdata.value = await postReq("/book/search-tag-name", dataReq);
    commentList.value = await postReq("/comment/list", dataRequestGetComments);

    // console.log("comments.value :>> ", commentList.value);

    chapters.value = responseBookmarks.metadata.bookmarks;
    value.value = resAPIdata.value?.metadata?.book?.star;
  };

  onMounted(callAPI);

  // Example chapters data
  const rows = ref(10); // Number of chapters per page
  const currentPage = ref(1); // Current page

  // Computed properties
  const limitedContent = computed(() => {
    const maxLength = 500;
    const content = resAPIdata.value?.metadata?.book?.Description;
    if (content && content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    }
    return content; // Return full content if within or equal to 500 characters
  });

  const totalRecords = computed(() => chapters.value.length);
  const firstColumnChapters = computed(() => getColumnChapters(0));
  const secondColumnChapters = computed(() => getColumnChapters(1));

  // Functions
  const getColumnChapters = (columnIndex) => {
    const startIndex =
      (currentPage.value - 1) * rows.value * 2 + columnIndex * rows.value;
    const endIndex = Math.min(startIndex + rows.value, totalRecords.value);
    return chapters.value.slice(startIndex, endIndex);
  };

  // Event handler for page change
  const onPageChange = (event) => {
    currentPage.value = event.page + 1;
  };

  // Time calculations
  var commentTime = new Date("2022-05-07T12:30:00");
  var currentTime = new Date();

  // Calculate elapsed time
  var elapsedTimeInSeconds = Math.floor((currentTime - commentTime) / 1000);
  var hours = Math.floor(elapsedTimeInSeconds / 3600);
  var minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
  var seconds = elapsedTimeInSeconds % 60;
  var months = Math.floor(hours / 24 / 30);
  var years = Math.floor(months / 12);

  // handleLoved
  const loved = ref(false);

  const handleLoved = async () => {
    const dataReq = {
      title_for_search,
    };

    if (!loved.value) {
      await postReq("/read/tracking/loved", dataReq);
      loved.value = !loved.value;
      showNotification(
        toast,
        "success",
        "Thông báo",
        "Đã thêm vào danh sách yêu thích",
        1000
      );
    } else {
      await postReq("/read/tracking/loved/remove", dataReq);
      loved.value = !loved.value;
      showNotification(
        toast,
        "error",
        "Thông báo",
        "Đã xóa khỏi danh sách yêu thích",
        1000
      );
    }
  };
</script>

<template>
  <div>
    <Toast />
    <!-- NAVBAR -->
    <HeaderAfterLogin></HeaderAfterLogin>
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

    <!-- CONTAINER -->
    <div class="container mt-5">
      <div class="flex flex-col w-[1160px]">
        <div class="flex flex-row">
          <div class="basis-1/3">
            <div class="flex-col mr-5">
              <img
                class="rounded-[15px] border border-[#ccc]"
                width="359px"
                height="450px"
                :src="resAPIdata.metadata?.book?.CoverURL"
              />
            </div>
            <div class="mt-5 ml-10">
              <Button class="mr-5 rounded-full">
                <RouterLink
                  :to="{
                    path: '/sach/bookContent',
                    query: { title_for_search: title_for_search },
                  }"
                >
                  <i class="pi pi-play-circle"></i> Đọc sách
                </RouterLink>
              </Button>
              <Button
                @click="handleLoved"
                class="rounded-full"
                :icon="loved ? 'pi pi-heart-fill' : 'pi pi-heart'"
                label="Yêu thích"
              ></Button>
            </div>
          </div>
          <div class="flex flex-col basis-2/3">
            <div class="flex justify-center">
              <i class="tt-lng">{{ resAPIdata?.metadata?.book?.Title }}</i>
            </div>
            <div class="flex justify-center rate">
              <i>{{ value }}.0</i>&nbsp;
              <Rating
                v-model="value"
                readonly
                :cancel="false"
              >
                <template #onicon>
                  <icon
                    class="pi pi-star-fill"
                    style="color: gold"
                  ></icon>
                </template>
                <template #officon>
                  <icon
                    class="pi pi-star"
                    style="color: gold"
                  ></icon>
                </template>
              </Rating>
            </div>

            <div class="info">
              <Fieldset>
                <template #legend>
                  <div class="flex align-items-center">
                    <span class="text-xl">THÔNG TIN</span>
                  </div>
                </template>
                <div>
                  <p class="mt-3">
                    <icon class="pi pi-chevron-circle-right" />&nbsp;<span
                      class="mr-5 font-bold"
                      >Tác giả:
                    </span>
                    <icon class="pi pi-user" />
                    {{ resAPIdata.metadata?.book?.Author }}
                  </p>

                  <p class="mt-2 mb-5">
                    <icon class="pi pi-chevron-circle-right" />&nbsp;<span
                      class="mr-5 font-bold"
                      >Thể loại
                    </span>
                    <icon class="pi pi-hashtag" />
                    {{ resAPIdata.metadata?.book?.Categories }}
                  </p>
                </div>

                <!-- mô tả -->
                <div class="mx-3 description">
                  <p
                    v-if="showFullContent"
                    class="formatted-content"
                  >
                    {{ resAPIdata.metadata?.book?.Description }}
                  </p>
                  <pre
                    v-else
                    class="formatted-content"
                    >{{ limitedContent }}</pre
                  >
                  <a @click="showFullContent = !showFullContent">
                    {{ showFullContent ? "Rút gọn " : "Xem thêm" }}
                    <i
                      v-if="showFullContent"
                      class="mt-1 ml-2 pi pi-chevron-up"
                    ></i>
                    <i
                      v-else
                      class="mt-1 ml-2 pi pi-chevron-down"
                    ></i>
                  </a>
                </div>
              </Fieldset>
            </div>
          </div>
        </div>
        <div class="mt-10 style">
          <p class="pi pi-list">
            <span style="font-family: Arial, Helvetica, sans-serif">
              Danh sách Bookmark</span
            >
          </p>

          <!-- Displaying chapters in two columns -->
          <div class="mt-5 chapter-list">
            <!-- First column -->
            <div class="column">
              <ul>
                <li
                  v-for="chapter in firstColumnChapters"
                  :key="chapter.id"
                >
                  <icon class="mt-4 pi pi-play-circle"></icon>&nbsp;

                  <router-link
                    :to="{
                      name: 'Content',
                      query: {
                        title_for_search: chapter.title_for_search,
                        page: chapter.PageNumber,
                      },
                    }"
                  >
                    {{ "Trang " + chapter.PageNumber }}
                  </router-link>

                  <br />
                </li>
              </ul>
            </div>

            <!-- Second column -->
            <div class="column">
              <ul>
                <li
                  v-for="chapter in secondColumnChapters"
                  :key="chapter.id"
                >
                  <icon class="mt-4 pi pi-play-circle"></icon>&nbsp;{{
                    chapter.title
                  }}
                  <br />
                </li>
              </ul>
            </div>
          </div>

          <!-- Paginator -->
        </div>
        <div class="my-7 style">
          <p class="pi pi-comments">
            <span style="font-family: Arial, Helvetica, sans-serif">
              Bình luận</span
            >
          </p>

          <div
            class="flex flex-row mt-5"
            v-for="(item, index) in commentList?.metadata?.comments"
            :key="index"
          >
            <div class="w-16">
              <img
                :src="user[0].avatar"
                class="rounded-full"
                width="40px"
                height="40px"
              />
            </div>
            <div class="w-full rounded-3xl bg-zinc-100">
              <p
                class="pl-3 m-5 text-lg text-gray-500 border-b-2 font-extralight"
              >
                {{ item?.Username }}
              </p>

              <!-- Noi dung cmt -->
              <span class="block pb-5 pl-7">
                {{ item?.Content }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterApp></FooterApp>
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
  .tt-lng {
    font-size: 40px;
    font-weight: 700;
    /* width: 400px; */
    height: 67px;
  }
  .rate i {
    font-size: 20px;
    font-weight: 700;
  }
  .descinline {
    display: inline;
  }
  .descempty {
    display: none;
  }
  .formatted-content {
    white-space: pre-wrap;
    font-family: Arial, Helvetica, sans-serif;
  }
  .info > fieldset {
    border-color: mediumseagreen;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Canh giữa theo chiều ngang */
    align-items: flex-start; /* Canh đỉnh theo chiều dọc */
    margin: 0 auto; /* Canh giữa theo chiều ngang */
    max-width: 1200px; /* Giới hạn chiều rộng tối đa của container */
    padding: 0 20px; /* Khoảng cách lề bên trong container */
    margin-top: 20px;
  }
  .description > a {
    display: flex;
    justify-content: right;
    cursor: pointer;
  }
  .dsc {
    margin-top: 50px;
  }
  .style > p {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 3px solid;
    border-color: aquamarine;
    padding: 12px;
  }
  .chapter-list {
    display: flex;
  }
  .column {
    flex: 1;
    margin: 0 10px;
  }
</style>
