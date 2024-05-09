<script setup>
  import { onMounted, ref } from "vue";
  import postReq from "../../api/post.js";
  import getReq from "../../api/get.js";

  let data = ref({});

  const getData = async () => {
    const res = await getReq("/book/free");
    data.value = res;
  };

  onMounted(getData);
</script>

<template>
  <div class="w-[1300px] mt-[40px]">
    <div
      class="book-title mb-[30px] w-[100px] h-[38px] flex justify-center items-center cursor-pointer relative"
    >
      <span class="mr-1 i-title"
        ><i
          class="pi pi-trophy"
          style="font-size: 1rem"
        ></i
      ></span>
      <span class="mr-1 font-medium">Miễn phí</span>
      <div class="absolute inline-block left-[100px] bottom-[3px]">
        <span class="text-[25px]">></span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="relative flex items-center justify-center book-hot">
        <div class="grid grid-cols-6">
          <ul
            v-for="(book, index) in data?.metadata?.books"
            :key="index"
            class="flex items-center justify-center book-item"
          >
            <li class="w-[190px] h-[340px]">
              <img
                class="w-[190px] h-[249px] mb-4 cursor-pointer"
                :src="book.CoverURL"
                alt="Book Cover"
              />
              <p class="font-bold cursor-pointer book-name">{{ book.Title }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="hr-hot w-[1200px] mt-[30px]"></div>
    </div>
  </div>
</template>

<style scoped>
  img {
    transition: transform 0.3s ease;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  img:hover {
    transform: scale(1.1);
  }

  .book-item:hover p {
    color: rgb(127, 7, 7); /* Change to your preferred color */
  }

  .book-title {
    border-radius: 20px;
    color: #0c835b;
  }

  .book-title:hover {
    color: rgb(127, 7, 7);
  }

  .i-title {
    color: #0c835b;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-gap: 20px;
  }

  .book-hot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .book-hot-btn {
    background-color: rgba(42, 225, 164, 0.4);
    margin-top: 20px;
    color: #117554;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    transform: translateY(-2px);
  }
  .book-hot-btn:hover {
    background-color: rgba(21, 145, 104, 0.4);
    transition: 0.2s ease;
    color: #117554;
    font-weight: 600;
    transform: translateY(1px);
  }
  .hr-hot {
    border: 0.1px solid #f0f0f0;
  }
</style>
