<script setup>
<<<<<<< HEAD:src/views/BookDetail/BookDetail.vue
  import { ref, computed } from "vue";
  import "./BookDetail.css";
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
=======
import { ref, computed } from "vue";
import Avatar from "primevue/avatar";

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

const user=ref([
  {
    avatar: ""
  }
]);
>>>>>>> 9fa7e1f23009f1659e541ebaf30546af8a6d8c23:src/views/BookDetail.vue
</script>
<template>
  <!-- NAVBAR -->
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
  <!-- CONTAINER -->
  <div class="container mt-5">
    <div class="flex flex-col">
      <div class="flex flex-row">
        <div class="basis-1/3">
          <div class="flex-col mr-5">
            <img
              class="rounded-[15px]"
              width="359px"
              height="450px"
              :src="queryBook[0].img"
            />
          </div>
          <div class="mt-5 ml-10">
            <Button
              class="mr-5 rounded-full"
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
          <div class="flex justify-center rate">
            <i>{{ value }}.0</i>&nbsp;
            <Rating
              v-model="value"
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
                  {{ queryBook[0].author }}
                </p>
                <p class="mt-2 mb-5">
                  <icon class="pi pi-chevron-circle-right" />&nbsp;<span
                    class="mr-5 font-bold"
                    >Thể loại
                  </span>
                  <icon class="pi pi-hashtag" />
                  {{ queryBook[0].category }}
                </p>
              </div>
              <!-- mô tả -->
              <div class="mx-3 description">
                <p
                  v-if="showFullContent"
                  class="formatted-content"
                >
                  {{ queryBook[0].Description }}
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
      <div class="style">
        <p class="pi pi-list">
          <span style="font-family: Arial, Helvetica, sans-serif">
            Danh Sách Chương</span
          >
        </p>
        <div class="card">
          <Paginator
            :template="{
              '640px': 'PrevPageLink CurrentPageReport NextPageLink',
              '960px':
                'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
              '1300px':
                'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
              default:
                'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput',
            }"
            :rows="5"
            :totalRecords="10"
          >
          </Paginator>
        </div>
<<<<<<< HEAD:src/views/BookDetail/BookDetail.vue
=======
        <div class="style">
          <p class="pi pi-comments">
          <span style="font-family: Arial, Helvetica, sans-serif">
            Bình luận</span
          >
        </p>
        </div>
>>>>>>> 9fa7e1f23009f1659e541ebaf30546af8a6d8c23:src/views/BookDetail.vue
      </div>
    </div>
  </div>
</template>
<style scoped>
.navbar{
    background: linear-gradient(
        90deg,
        rgba(112, 225, 205, 0.06),
        rgba(61, 123, 112, 0.06)
      );
}
.tt-lng{

  font-size: 40px;
  font-weight: 700;
  width: 400px;
  height: 67px;
}
.rate i{
  font-size: 20px;
  font-weight: 700;
}
.descinline{
  display: inline;
}
.descempty{
  display: none;
}
.formatted-content {
  white-space: pre-wrap; 
  font-family: Arial, Helvetica, sans-serif;
}
.info > fieldset{
  border-color:mediumseagreen;

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
.description > a{
  display: flex;
  justify-content: right;
  cursor: pointer;
}
.dsc{
 margin-top: 50px;
}
.style > p{
  font-size: 20px;
  font-weight: bold;
  border-bottom: 3px solid ;
  border-color: aquamarine;
  padding:12px
}
</style>