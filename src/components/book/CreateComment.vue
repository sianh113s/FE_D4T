<script setup>
  import { onMounted, ref } from "vue";
  import Fieldset from "primevue/fieldset";
  import { useConditionStore } from "@/store";
  import postReq from "@/api/post";
  import showNotification from "@/utils/showNotification";
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const store = useConditionStore();

  const contentValue = ref("");
  const commentList = ref([]);
  const commentTotal = ref(0);

  const props = defineProps({
    title_for_search: String,
  });

  const callAPI = async () => {
    try {
      const response = await postReq("/comment/list", {
        title_for_search: props.title_for_search,
      });

      commentList.value = response.metadata.comments;
      commentTotal.value = response.metadata.total;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const onSubmit = async () => {
    if (contentValue.value.trim() === "") {
      showNotification(
        toast,
        "error",
        "Thông báo",
        "Nội dung bình luận không được để trống!",
        2000
      );

      return;
    }

    try {
      await postReq("/comment/add", {
        title_for_search: props.title_for_search,
        Content: contentValue.value,
      });

      await callAPI();
      contentValue.value = "";
      showNotification(
        toast,
        "success",
        "Thông báo",
        "Thêm bình luận thành công!",
        1500
      );
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(callAPI);
</script>

<template>
  <Toast />
  <div>
    <div class="p-5 w-[1280px] inner m-auto">
      <div
        class="h-[40px] bg-[#f4f5f6] border-b border-[#ccc] flex items-center"
      >
        <span class="font-bold px-7">Bình luận ({{ commentTotal }})</span>
      </div>

      <div
        v-if="store.isLoggedIn"
        class="bg-[#fdfdfb] pt-[30px]"
      >
        <div class="flex items-center justify-center">
          <form
            @submit.prevent="onSubmit"
            class="flex flex-col items-end gap-4"
          >
            <Textarea
              class="resize-none"
              v-model="contentValue"
              rows="4"
              cols="90"
              placeholder="Nhập nội dung bình luận..."
            />

            <div class="bg-[#e6f5f1] flex justify-end">
              <Button
                type="submit"
                class="w-[150px]"
                label="Đăng bình luận"
              />
            </div>
          </form>
        </div>
      </div>

      <div
        v-else
        class="bg-[#fdfdfb] pt-[30px]"
      >
        <p class="px-[30px]">
          Bạn cần
          <router-link to="/signin"
            ><span class="text-blue-400 cursor-pointer"
              >đăng nhập
            </span> </router-link
          >để bình luận
        </p>
      </div>

      <!-- Hien thi binh luan -->
      <div class="bg-[#fdfdfb] p-[30px] flex flex-col gap-[15px]">
        <div
          v-for="(cmt, index) in commentList"
          :key="index"
        >
          <Fieldset>
            <template #legend>
              <div class="flex pl-2 align-items-center">
                <Avatar
                  image="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
                  shape="circle"
                />
                <span class="font-bold">{{ cmt.Username }}</span>
              </div>
            </template>
            <p class="m-0">{{ cmt.Content }}</p>
          </Fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*  */
</style>
