<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import { useRoute, useRouter } from "vue-router";
  import InputText from "primevue/inputtext";
  import Button from "primevue/button";
  import Dropdown from "primevue/dropdown";
  import Textarea from "primevue/textarea";
  import postReq from "@/api/post";

  const router = useRouter();
  const $route = useRoute();

  const title_for_search = $route.query.title_for_search;

  const book = ref({});

  const callAPI = async () => {
    const res = await postReq("/book/search-tag-name", {
      title: title_for_search,
    });

    book.value = res.metadata.book;
    console.log("res :>> ", book.value.Categories);
  };

  onMounted(callAPI);
  const languages = [
    { label: "English", value: "Tiếng Anh" },
    { label: "Vietnamese", value: "Tiếng Việt" },
  ];

  const categories = [
    { label: "Lối sống", value: "Lối sống" },
    { label: "Viễn tưởng", value: "Viễn tưởng" },
    { label: "Kinh dị", value: "Kinh dị" },
    { label: "Hài hước", value: "Hài hước" },
    { label: "Tình cảm", value: "Tình cảm" },
    { label: "Hành động", value: "Hành động" },
    { label: "Phiêu lưu", value: "Phiêu lưu" },
    { label: "Lịch sử", value: "Lịch sử" },
    { label: "Trinh thám", value: "Trinh thám" },
    { label: "Khoa học viễn tưởng", value: "Khoa học viễn tưởng" },
    { label: "Chính kịch", value: "Chính kịch" },
    { label: "Học đường", value: "Học đường" },
    { label: "Gia đình", value: "Gia đình" },
  ];

  const updateBook = async () => {
    try {
      const res = await postReq("/admin/book/update", book.value);
      // console.log("res :>> ", res);
      router.push({ name: "admin_book" });
    } catch (error) {
      console.error("Error updating book:", error);
      // Handle error
    }
  };
</script>

<template>
  <div class="pt-5 p-card">
    <div class="p-card-header">
      <h2 class="font-bold uppercase">Sửa Thông Tin Sách</h2>
    </div>
    <div class="p-card-body">
      <div class="grid p-fluid formgrid">
        <div class="field col-12">
          <label for="title">Title</label>
          <InputText
            v-model="book.Title"
            id="title"
          />
        </div>
        <div class="field col-12">
          <label for="author">Author</label>
          <InputText
            v-model="book.Author"
            id="author"
          />
        </div>
        <div class="field col-12">
          <label for="categories">Categories</label>
          <Dropdown
            v-model="book.Categories"
            id="categories"
            :options="categories"
            optionLabel="label"
            optionValue="value"
            multiple
            placeholder="Select Categories"
          />
        </div>
        <div class="field col-12">
          <label for="price">Price</label>
          <InputText
            v-model="book.Price"
            id="price"
          />
        </div>
        <div class="field col-12">
          <label for="page">Page Number</label>
          <InputText
            v-model="book.PageNumber"
            id="page"
          />
        </div>
        <div class="field col-12">
          <label for="language">Language</label>
          <Dropdown
            v-model="book.language"
            id="language"
            :options="languages"
            optionLabel="label"
            optionValue="value"
            placeholder="Select Language"
          />
        </div>
        <div class="field col-12">
          <label for="description">Description</label>
          <Textarea
            v-model="book.Description"
            id="description"
            rows="5"
          />
        </div>
        <div class="field col-12">
          <Button
            label="Update Book"
            @click="updateBook"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .p-card {
    max-width: 600px;
    margin: auto;
  }
  .p-card-header {
    text-align: center;
  }
</style>
