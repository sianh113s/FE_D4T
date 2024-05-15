<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import Sidebar from "@/components/default/Sidebar.vue";
  import TabMenu from "primevue/tabmenu";
  import { onMounted, ref } from "vue";
  import http from "@/api/http-common";

  const tracking_books = ref([]);
  const loved_books = ref([]);
  onMounted(async () => {
    try {
      const response = await http.get("/read/tracking/list");
      const response2 = await http.get("/read/tracking/list/loved");

      tracking_books.value = response.data?.metadata.trackedList;
      loved_books.value = response2.data?.metadata.trackedList;
    } catch (error) {
      console.log("error :>> ", error);
    }
  });

  const selectedTab = ref(1);

  const items = ref([
    { label: "Đang đọc", icon: "pi pi-book", number: 1 },
    {
      label: "Yêu thích",
      icon: "pi pi-heart",
      number: 2,
    },
  ]);
</script>

<template>
  <HeaderAfterLogin></HeaderAfterLogin>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="m-[12px] top-[80px] flex-grow">
      <div>
        <p class="text-2xl font-semibold m-[18px]">Tủ sách cá nhân</p>
        <TabMenu :model="items">
          <template #item="{ item, props }">
            <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="selectedTab = item.number"
            >
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ item.label }}</span>
            </a>
          </template>
        </TabMenu>
      </div>
      <!-- Sách đang đọc -->
      <template v-if="selectedTab === 1">
        <div class="grid grid-cols-4 gap-4 lg:grid-cols-6">
          <div
            class="mx-1.5 my-4 self-stretch"
            v-for="(cbook, index) in tracking_books"
            :key="index"
          >
            <router-link
              :to="{
                name: 'Sach',
                query: { title_for_search: cbook.title_for_search },
              }"
            >
              <img
                class="w-[165px] h-[240px]"
                alt=""
                :src="cbook.CoverURL"
              />
              <p class="font-medium text-sm max-w-[165px] h-[40px]">
                {{ cbook.Title }}
              </p>
            </router-link>
          </div>
        </div>
      </template>
      <!-- Sách yêu thích -->
      <template v-else-if="selectedTab === 2">
        <div class="grid grid-cols-6 gap-4">
          <div
            class="mx-1.5 my-4 self-stretch"
            v-for="(fbook, index) in loved_books"
            :key="index"
          >
            <router-link
              :to="{
                name: 'Sach',
                query: { title_for_search: fbook.title_for_search },
              }"
            >
              <img
                class="w-[165px] h-[240px]"
                alt=""
                v-bind:src="fbook.CoverURL"
              />
              <p class="font-medium text-sm max-w-[165px] h-[40px]">
                {{ fbook.Title }}
              </p>
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>

  <FooterApp></FooterApp>
</template>

<style scoped></style>
