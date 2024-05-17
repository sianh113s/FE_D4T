<script setup>
  import { storage, storageRef } from "@/api/firebaseConfig";
  import { ref } from "vue";
  import { uploadBytes, getDownloadURL } from "firebase/storage";

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const imageRef = storageRef(storage, `images/${file.name}`);

    try {
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      console.log("Image URL:", url);
      // Use the URL for further processing
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
</script>

<template>
  <input
    type="file"
    @change="handleFileUpload"
  />
</template>

<style scoped>
  /* Your styles here */
</style>
