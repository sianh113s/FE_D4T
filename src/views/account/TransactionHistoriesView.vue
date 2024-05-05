<script setup>
  import HeaderAfterLogin from "@/components/default/HeaderAfterLogin.vue";
  import FooterApp from "@/components/default/FooterApp.vue";
  import Sidebar from "@/components/default/Sidebar.vue";

  import { ref } from "vue";

  import { filter } from "@/store/account.js";

  const s = filter(); 

  const num = ref(0);

  const transactions = ref([
    {
      transaction_type: '-1',
      amount: '-7000',
      date: '19/03/2024 11:12',
    },
    {
      transaction_type: '1',
      amount: '+5000',
      date: '19/03/2024 11:12',
    },
  ]);

  const transaction_usage = ref([
    {
      amount: '-7000',
      date: '19/03/2024 11:12',
    },
    {
      amount: '-5000',
      date: '19/03/2024 11:12',
    },
    {
      amount: '-8000',
      date: '19/03/2024 11:12',
    },
  ]);

  const transaction_topup= [
  {
      amount: '+7000',
      date: '19/03/2024 11:12',
    },
    {
      amount: '+5000',
      date: '19/03/2024 11:12',
    },
    {
      amount: '+8000',
      date: '19/03/2024 11:12',
    },
  ];


</script>

<template>
  <HeaderAfterLogin></HeaderAfterLogin>
  <div class="flex">
    <Sidebar></Sidebar>
    <div class="m-[12px] top-[80px] flex-grow">
      <div class="border-b p-5">
        <label class="text-2xl font-semibold">Lịch sử giao dịch</label>
        <div
          @click="s.toggleIsHiddenFilter"
          class="relative float-right py-5 px-3 pb-[24px] cursor-pointer flex items-center gap-1"
        >
          <i
            class="pi pi-filter"
            style="color: black"
          ></i>
        </div>

        <div
          :class="{ hidden: s.isHiddenFilter }"
          class="absolute top-[165px] right-0 z-40"
        >
          <div class="tool-menu rounded-md w-[200px] bg-gray-50">
            <div class="p-[15px]">
              <ul>
                <li class="flex items-center gap-3">
                  <Button
                    class="w-full text-left"
                    label="Lọc mới nhất"
                    severity="secondary"
                    text
                    @click="num = 0"
                  />
                </li>
                <li class="flex items-center gap-3">
                  <Button
                    class="w-full text-left"
                    label="Lọc nạp sồi"
                    severity="secondary"
                    text
                    @click="num = 1"
                  />
                </li>
                <li class="flex items-center gap-3">
                  <Button
                    class="w-full text-left"
                    label="Lọc sử dụng sồi"
                    severity="secondary"
                    text
                    @click="num = 2"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Lọc mới nhất -->
      <template v-if="num == 0">
        <div
          class="h-[90px] w-[540px] self-stretch rounded-[20px] bg-gray-100 
          flex flex-row items-end justify-between m-5 px-4 py-1.5 gap-[20px] z-[1]"
          v-for="transaction in transactions"
        >
          <div class="flex flex-col items-start justify-start gap-[6px]">
            <div class="flex flex-row items-end justify-start gap-[10px] pb-[8px]">
              <img
                class="h-[30px] w-[30px] object-cover z-[1]"
                alt=""
                src="@/assets/imgs/bonussoi.png"
              />
              <p class="font-semibold text-lg z-[1]">
                {{transaction.transaction_type}}
              </p>
            </div>
            <div class="z-[1]">
              <p class="mr-[10px] mb-[8px]">{{transaction.date}}</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-end pb-6 text-right text-xl"
          >
            <div class="flex flex-row items-end justify-start gap-[10px]">
              <p
                class="font-semibold inline-block z-[1]"
              >
                {{transaction.amount}}
              </p>
              <img
                class="h-[30px] w-[30px] object-cover z-[1]"
                alt=""
                src="@/assets/imgs/bonussoi.png"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- Lọc nạp sồi -->
      <template v-else-if="num == 1">
        <div
          class="h-[90px] w-[540px] self-stretch rounded-[20px] bg-gray-100 
          flex flex-row items-end justify-between m-5 px-4 py-1.5 gap-[20px] z-[1]"
          v-for="ttransaction in transaction_topup"
        >
          <div class="flex flex-col items-start justify-start gap-[6px]">
            <div class="flex flex-row items-end justify-start gap-[10px] pb-[8px]">
              <img
                class="h-[30px] w-[30px] object-cover z-[1]"
                alt=""
                src="@/assets/imgs/bonussoi.png"
              />
              <p class="font-semibold text-lg z-[1]">
                Nạp sồi vào tài khoản
              </p>
            </div>
            <div class="z-[1]">
              <p class="mr-[10px] mb-[8px]">{{ttransaction.date}}</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-end pb-6 text-right text-xl text-emerald-500"
          >
            <div class="flex flex-row items-end justify-start gap-[10px]">
              <p
                class="font-semibold inline-block z-[1]"
              >
                {{ttransaction.amount}}
              </p>
              <img
                class="h-[30px] w-[30px] object-cover z-[1]"
                alt=""
                src="@/assets/imgs/bonussoi.png"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- Lọc sử dụng sồi -->
      <template v-else-if="num == 2">
        <div
          class="h-[90px] w-[540px] self-stretch rounded-[20px] bg-gray-100 
          flex flex-row items-end justify-between m-5 px-4 py-1.5 gap-[20px] z-[1]"
          v-for="utransaction in transaction_usage"
        >
          <div class="flex flex-col items-start justify-start gap-[6px]">
            <div class="flex flex-row items-end justify-start gap-[10px] pb-[8px]">
              <img
                class="h-[30px] w-[30px] object-cover z-[1]"
                alt=""
                src="@/assets/imgs/bonussoi.png"
              />
              <p class="font-semibold text-lg z-[1]">
                Sử dụng sồi
              </p>
            </div>
            <div class="z-[1]">
              <p class="mr-[10px] mb-[8px]">{{utransaction.date}}</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-end pb-6 text-right text-xl text-rose-500"
          >
            <div class="flex flex-row items-end justify-start gap-[10px]">
              <p
                class="font-semibold inline-block z-[1]"
              >
                {{utransaction.amount}}
              </p>
              <img
                class="h-[30px] w-[30px] object-cover z-[1]"
                alt=""
                src="@/assets/imgs/bonussoi.png"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  
  <FooterApp></FooterApp>
</template>

<style scoped></style>
