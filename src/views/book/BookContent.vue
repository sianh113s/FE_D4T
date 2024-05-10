<script setup>
import { ref } from "vue";
const home = ref({
  icon: "pi pi-home ",
  label: "Trang chủ",
  route: "/",
});

const items = ref([{ label: "Tết ở làng địa ngục", route: "/sach" }]);
const queryBook = ref([
  {
    title: `Tết ở làng Địa Ngục`,
    content:
      "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/dac_nhan_tam%2Fdac_nhan_tam-021.png?alt=media&token=92de9925-2c36-4f3a-b299-f9f8a8299e2b",
  },
]);
// Thêm biến để lưu trữ trạng thái của việc hiển thị icon
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
        <span class="font-bold text-color">{{ item.label }}</span>
      </a>
    </template>
  </Breadcrumb>
  <div class="flex flex-col">
    <div>
    <b class="flex text-4xl justify-center mt-10">{{ queryBook[0].title }}</b>
  </div>
  <div class="image-container">
  <img class="mx-auto" :src="queryBook[0].content" @click="toggleIcon" />
  <span v-if="showIcon" class="icon pi pi-bookmark-fill" :style="{ top: clickPositionY + 'px' }"></span>
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
