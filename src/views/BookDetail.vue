<script setup>
import { ref, computed, watch } from "vue";

const value = ref(0.0);
const home = ref({
  icon: "pi pi-home ",
  label: "Trang chủ",
  route: "/",
});
const items = ref([{ label: "Tết ở làng địa ngục", route: "/sach" }]);
const queryBook = ref([
  {
    title: `Tết ở làng Địa Ngục`,
    img: "https://i.pinimg.com/736x/fc/3f/b3/fc3fb338840cb246352cce4de11f2267.jpg",
    author: "Thảo Trang",
    category: "Trinh thám - Kinh dị",
    Description: ` Năm đó, tại một ngôi làng xa xôi trên một ngọn núi hoang vu, người ta đón Tết trong sự kinh hãi tột độ, hoài nghi đau đáu và giận dữ khôn cùng trước sự ập tới của những bi kich tàn khốc.Ngôi làng ấy vốn dĩ không có tên, nhưng những người nơi đây mặc định chốn này là địa ngục. Dân trong làng không ai dám tự ý băng rừng thoát khỏi làng, càng không biết thế giới bên ngoài rộng lớn như thế nào, bởi lẽ họ sợ người khác sẽ biết rằng bản thân mình vốn là hậu duệ của băng cướp khét tiếng ở truông nhà Hồ dưới thời chúa Nguyễn ở Đàng Trong.\nVào một đêm cuối năm rét buốt, ông Thập – người duy nhất có thể ra khỏi làng – được báo mộng bởi một âm hồn mặc quan phục màu đỏ rực. Làng Địa Ngục sắp gặp họa lớn!Thành danh bằng những tác phẩm văn học kinh dị đậm chất Việt Nam được phát hành qua mạng, lần này tác giả Thảo Trang tiếp tục mang đến một câu chuyện hấp dẫn, mở ra một thế giới huyền bí với những sinh vật, thế lực siêu linh mà người đọc không bao giờ hết hứng thú, để lại những dư âm không phai khi gấp sách lại.Tết ở làng Địa Ngục  là một trong những tác phẩm kinh dị siêu linh đậm chất Việt Nam vô cùng ăn khách của tác giả Thảo Trang. \nTác phẩm đưa người đọc về một thời xa xưa, với bối cảnh là một ngôi làng xa xôi trên ngọn núi hoang vu. Ở đó, người ta đón tết trong sự kinh hãi tột độ, hoài nghi đau đáu và giận dữ khôn cùng trước sự ập tới của những bi kịch tàn khốc.`,
  },
]);
const showFullContent = ref(false);
const limitedContent = computed(() => {
  const maxLength = 500;
  const content = queryBook.value[0]?.Description;
  if (content && content.length > maxLength) {
    return content.slice(0, maxLength) + "...";
  }
  return content; // Return full content if within or equal to 150 characters
});

const user = ref([
  {
    avatar:
      "https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg",
  },
]);
const chapters = ref([
  { id: 1, title: "Chương 1" },
  { id: 2, title: "Chương 2" },
  { id: 3, title: "Chương 3" },
  { id: 4, title: "Chương 4" },
  { id: 5, title: "Chương 5" },
  { id: 6, title: "Chương 6" },
  { id: 7, title: "Chương 7" },
  { id: 8, title: "Chương 8" },
  { id: 9, title: "Chương 9" },
  { id: 10, title: "Chương 10" },
  { id: 11, title: "Chương 11" },
  { id: 12, title: "Chương 12" },
  { id: 13, title: "Chương 13" },
  { id: 14, title: "Chương 14" },
  { id: 15, title: "Chương 15" },
  { id: 16, title: "Chương 16" },
  { id: 17, title: "Chương 17" },
  { id: 18, title: "Chương 18" },
  { id: 19, title: "Chương 19" },
  { id: 20, title: "Chương 20" },
  { id: 21, title: "Chương 21" },
  { id: 22, title: "Chương 22" },
  { id: 23, title: "Chương 23" },
  { id: 24, title: "Chương 24" },
  { id: 25, title: "Chương 25" },
  { id: 26, title: "Chương 26" },
  { id: 27, title: "Chương 27" },
  { id: 28, title: "Chương 28" },
  { id: 29, title: "Chương 29" },
  { id: 30, title: "Chương 30" },
  { id: 31, title: "Chương 31" },
  { id: 32, title: "Chương 32" },
  { id: 33, title: "Chương 33" },
  { id: 34, title: "Chương 34" },
  { id: 35, title: "Chương 35" },
  { id: 36, title: "Chương 36" },
  { id: 37, title: "Chương 37" },
  { id: 38, title: "Chương 38" },
  { id: 39, title: "Chương 39" },
  { id: 40, title: "Chương 40" },
  { id: 41, title: "Chương 41" },
]);

const rows = ref(10); // số lượng chương mỗi trang
const currentPage = ref(1); // Trang hiện tại

// Tính tổng số chương
const totalRecords = computed(() => chapters.value.length);

// Hàm tính toán danh sách chương theo từng cột
const getColumnChapters = (columnIndex) => {
  const startIndex =
    (currentPage.value - 1) * rows.value * 2 + columnIndex * rows.value;
  const endIndex = Math.min(startIndex + rows.value, totalRecords.value);
  return chapters.value.slice(startIndex, endIndex);
};

const firstColumnChapters = computed(() => getColumnChapters(0));
const secondColumnChapters = computed(() => getColumnChapters(1));

// Hàm xử lý khi người dùng chuyển trang
const onPageChange = (event) => {
  currentPage.value = event.page + 1;
};

//Tính toán thời điểm cmt
var commentTime = new Date("2022-05-07T12:30:00"); // Thời điểm bình luận (ví dụ)

// Thời điểm hiện tại
var currentTime = new Date();

// Tính thời gian đã trôi qua từ khi người dùng đã bình luận đến thời điểm hiện tại (dưới dạng số giây)
var elapsedTimeInSeconds = Math.floor((currentTime - commentTime) / 1000);

// Chuyển đổi số giây thành định dạng thời gian phù hợp (ví dụ: giờ, phút, giây)
var hours = Math.floor(elapsedTimeInSeconds / 3600);
var minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
var seconds = elapsedTimeInSeconds % 60;
var months = Math.floor(hours / 24 / 30);
var years = Math.floor(months / 12);
</script>

<template>
  <!-- NAVBAR -->
  <Breadcrumb :home="home" :model="items" class="navbar">
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" style="color: black" />&nbsp;
          <span style="color: black; font-weight: bold">{{ item.label }} </span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span class="text-color font-bold">{{ item.label }}</span>
      </a>
    </template>
  </Breadcrumb>

  <!-- CONTAINER -->
  <div class="container mt-5">
    <div class="flex flex-col">
      <div class="flex flex-row">
        <div class="basis-1/3">
          <div class="mr-5 flex-col">
            <img
              class="rounded-[15px]"
              width="359px"
              height="450px"
              :src="queryBook[0].img"
            />
          </div>
          <div class="ml-10 mt-5">
            <Button
              class="rounded-full mr-5"
              icon="pi pi-play-circle"
              label="Đọc sách"
            ></Button>
            <Button
              class="rounded-full"
              icon="pi pi-heart"
              label="Yêu thích"
            ></Button>
          </div>
        </div>
        <div class="flex flex-col basis-2/3">
          <div class="flex justify-center">
            <i class="tt-lng">{{ queryBook[0].title }}</i>
          </div>
          <div class="rate flex justify-center">
            <i>{{ value }}.0</i>&nbsp;
            <Rating v-model="value" :cancel="false">
              <template #onicon>
                <icon class="pi pi-star-fill" style="color: gold"></icon>
              </template>
              <template #officon>
                <icon class="pi pi-star" style="color: gold"></icon>
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
                    class="font-bold mr-5"
                    >Tác giả:
                  </span>
                  <icon class="pi pi-user" />
                  {{ queryBook[0].author }}
                </p>

                <p class="mt-2 mb-5">
                  <icon class="pi pi-chevron-circle-right" />&nbsp;<span
                    class="font-bold mr-5"
                    >Thể loại
                  </span>
                  <icon class="pi pi-hashtag" />
                  {{ queryBook[0].category }}
                </p>
              </div>

              <!-- mô tả -->
              <div class="description mx-3">
                <p v-if="showFullContent" class="formatted-content">
                  {{ queryBook[0].Description }}
                </p>
                <pre v-else class="formatted-content">{{ limitedContent }}</pre>
                <a @click="showFullContent = !showFullContent">
                  {{ showFullContent ? "Rút gọn " : "Xem thêm" }}
                  <i
                    v-if="showFullContent"
                    class="pi pi-chevron-up mt-1 ml-2"
                  ></i>
                  <i v-else class="pi pi-chevron-down mt-1 ml-2"></i>
                </a>
              </div>
            </Fieldset>
          </div>
        </div>
      </div>
      <div class="style mt-10">
        <p class="pi pi-list">
          <span style="font-family: Arial, Helvetica, sans-serif">
            Danh Sách Chương</span
          >
        </p>

        <!-- Displaying chapters in two columns -->
        <div class="chapter-list mt-5">
          <!-- First column -->
          <div class="column">
            <ul>
              <li v-for="chapter in firstColumnChapters" :key="chapter.id">
                <icon class="pi pi-play-circle mt-4"></icon>&nbsp;{{
                  chapter.title
                }}
                <br />
              </li>
            </ul>
          </div>

          <!-- Second column -->
          <div class="column">
            <ul>
              <li v-for="chapter in secondColumnChapters" :key="chapter.id">
                <icon class="pi pi-play-circle mt-4"></icon>&nbsp;{{
                  chapter.title
                }}
                <br />
              </li>
            </ul>
          </div>
        </div>

        <!-- Paginator -->
        <Paginator
          :rows="rows * 2"
          :totalRecords="totalRecords"
          @page="onPageChange"
        ></Paginator>
      </div>
      <div class="style">
        <p class="pi pi-comments">
          <span style="font-family: Arial, Helvetica, sans-serif">
            Bình luận</span
          >
        </p>

        <div class="flex flex-row mt-5">
          <div class="w-16">
            <img
              :src="user[0].avatar"
              class="rounded-full"
              width="40px"
              height="40px"
            />
          </div>
          <div class="rounded-3xl bg-zinc-100 h-40 w-full">
            <p class="m-5 pl-3 border-b-2 w-32 text-lg text-gray-500 font-extralight ">
              <template v-if="elapsedTimeInSeconds >= 60">
                <template v-if="years > 0"> {{ years }} Năm </template>
                <template v-else-if="months > 0"> {{ months }} Tháng </template>
                <template v-else-if="hours >= 24">
                  {{ Math.floor(hours / 24) }} Ngày
                </template>
                <template v-else-if="hours > 0"> {{ hours }} Giờ </template>
                <template v-else-if="minutes > 0">
                  {{ minutes }} Phút
                </template>
                <template v-else> {{ seconds }} Giây </template>
              </template>
              <template v-else> {{ elapsedTimeInSeconds }} Giây </template>
              trước
            </p>
          </div>
        </div>
      </div>
    </div>
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
  width: 400px;
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
