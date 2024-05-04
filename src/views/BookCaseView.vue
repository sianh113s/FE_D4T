<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import Sidebar from "@/components/default/Sidebar.vue";
  import TabMenu from 'primevue/tabmenu';
  import { ref } from "vue";

  const selectedTab = ref(1);

  const items = ref([
      { label: 'Đang đọc', icon: 'pi pi-book', number: 1},
      {
          label: 'Yêu thích',
          icon: 'pi pi-heart',
          number: 2
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
        
      </template>
      <!-- Sách yêu thích -->
      <template v-else-if="selectedTab === 2">
        
      </template>
    </div>
  </div>
  
  <FooterApp></FooterApp>
</template>

<style scoped></style>
