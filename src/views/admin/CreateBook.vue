<script setup>
  import { ref, reactive } from "vue";
  import { useRouter } from "vue-router";
  import InputText from "primevue/inputtext";
  import Button from "primevue/button";
  import Dropdown from "primevue/dropdown";
  import Textarea from "primevue/textarea";
  import FileUpload from "primevue/fileupload";
  import { useToast } from "primevue/usetoast";
  import postReq from "@/api/post";
  import { storage, storageRef } from "@/api/firebaseConfig";
  import { uploadBytes, getDownloadURL } from "firebase/storage";

  const router = useRouter();
  const toast = useToast();

  const bookForm = ref({
    Title: "S1",
    CoverURL: "",
    Author: "D",
    Description: "123",
    Categories: "",
    Price: "1000",
    PageNumber: "191",
    language: "",
  });

  const languages = [
    { label: "English", value: "Tiếng Anh" },
    { label: "Vietnamese", value: "Tiếng Việt" },
  ];

  const categories = [
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

  const onFileSelect = (event) => {
    const file = event.files[0];
    bookForm.cover = file;
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const imageRef = storageRef(storage, `images/${file.name}`);

    try {
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      console.log("Image URL:", url);

      bookForm.value.CoverURL = url;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const submitForm = async () => {
    for (const key in bookForm.value) {
      if (Object.hasOwnProperty.call(bookForm.value, key)) {
        const element = bookForm.value[key];
        if (element === "") {
          toast.add({
            severity: "error",
            summary: "Lỗi",
            detail: `Vui lòng nhập ${key}`,
            life: 3000,
          });
          return;
        }
      }
    }
    try {
      await postReq("/admin/book/add", bookForm.value);

      toast.add({
        severity: "success",
        summary: "Thành công",
        detail: "Thêm sách thành công!",
        life: 3000,
      });

      router.push({ name: "admin_book" });
    } catch (error) {
      console.log("error :>> ", error);
      toast.add({
        severity: "error",
        summary: "Lỗi",
        detail: "Đã xảy ra lỗi khi thêm sách!",
        life: 3000,
      });
    }
  };
</script>

<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <div class="py-[10px] p-card">
    <div class="p-card-header">
      <h2 class="font-bold uppercase">Thêm Sách Mới</h2>
    </div>
    <div class="p-card-body">
      <div class="grid p-fluid formgrid">
        <div class="field col-12">
          <label for="title">Tên sách</label>
          <InputText
            v-model="bookForm.Title"
            id="title"
          />
        </div>
        <div class="field col-12">
          <label for="author">Tác giả</label>
          <InputText
            v-model="bookForm.Author"
            id="author"
          />
        </div>
        <div class="field col-12">
          <label for="categories">Thể loại</label>
          <Dropdown
            v-model="bookForm.Categories"
            id="categories"
            :options="categories"
            optionLabel="label"
            optionValue="value"
            multiple
            placeholder="Chọn thể loại"
          />
        </div>
        <div class="field col-12">
          <label for="price">Giá</label>
          <InputText
            v-model="bookForm.Price"
            id="price"
          />
        </div>
        <div class="field col-12">
          <label for="page">Số trang</label>
          <InputText
            v-model="bookForm.PageNumber"
            id="page"
          />
        </div>
        <div class="field col-12">
          <label for="language">Ngôn ngữ</label>
          <Dropdown
            v-model="bookForm.language"
            id="language"
            :options="languages"
            optionLabel="label"
            optionValue="value"
            placeholder="Chọn ngôn ngữ"
          />
        </div>
        <div class="field col-12">
          <label for="cover">Ảnh bìa</label>
          <input
            type="file"
            @change="handleFileUpload"
          />
        </div>
        <div class="field col-12">
          <label for="description">Mô tả</label>
          <Textarea
            v-model="bookForm.Description"
            id="description"
            rows="5"
          />
        </div>
        <div class="field col-12">
          <Button
            label="Thêm sách"
            @click="submitForm"
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
