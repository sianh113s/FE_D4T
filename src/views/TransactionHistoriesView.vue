<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import Sidebar from "@/components/default/Sidebar.vue";

  import { ref } from "vue";
  import SplitButton from 'primevue/splitbutton';


  const num = ref(0)

  const items = ref([
    {
      label: 'Lọc mới nhất',
      number: 0,
    },
    {
      label: 'Lọc nạp sồi',
      number: 1,
    },
    {
      label: 'Lọc sử dụng sồi',
      number: 2,
    },
  ]);

</script>

<template>
  <HeaderAfterLogin></HeaderAfterLogin>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="m-[12px] top-[80px] flex-grow">
      <div class="border-b p-5">
        <label class="text-2xl font-semibold">Lịch sử giao dịch</label>
        <SplitButton class="float-right"
          severity="secondary"
          menuButtonIcon="pi pi-filter"
          text
          @click="num = item.number" 
          :model="items"
        />
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
