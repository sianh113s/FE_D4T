<script setup>
  import Comments from "postcss/lib/comment";

  import { onMounted, ref } from "vue";
  import getReq from "../../api/get.js";

  let data = ref({});

  const getData = async () => {
    const res = await getReq("/book/top-six-new");
    data.value = res;
  };

  onMounted(getData);
</script>

<template>
  <div class="w-[1300px] my-[40px]">
    <div
      class="book-title mb-[30px] w-[170px] h-[38px] flex justify-center items-center cursor-pointer relative"
    >
      <span class="mr-1 i-title"
        ><i
          class="pi pi-sparkles"
          style="font-size: 1rem"
        ></i
      ></span>
      <span
        id="sachmoinhat"
        class="text-[15px] mr-1 font-medium"
      >
        Sách mới cập nhật
      </span>
      <div class="absolute inline-block left-[170px] bottom-[3px]">
        <span class="text-[25px]">></span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex">
        <div
          class="book-new-left w-[1000px] p-[20px] flex flex-col justify-center items-center"
        >
          <table class="w-[900px]">
            <tr class="font-bold book-new-head">
              <td>Tên sách</td>
              <td>Thể loại</td>
              <td>Ngôn ngữ</td>
              <td>Tác giả</td>
            </tr>
            <tr
              v-for="(book, index) in data?.metadata?.books"
              :key="index"
            >
              <td class="font-bold cursor-pointer book-hover">
                {{ book.Title }}
              </td>
              <td class="cate-hover text-[14px] cursor-pointer">
                {{ book.Categories }}
              </td>
              <td class="font-extralight text-[14px]">{{ book.language }}</td>
              <td class="font-extralight text-[14px]">{{ book.Author }}</td>
            </tr>
          </table>
        </div>
        <div class="book-new-right w-[300px] h-[430px]">
          <div class="p-[24px]">
            <div class="mb-4 font-medium comment-head">
              <span class="mr-1"
                ><i
                  class="pi pi-comment"
                  style="font-size: 1rem"
                ></i
              ></span>
              <span>Bình luận gần đây</span>
            </div>
            <ul class="book-comment">
              <!-- <li
                class="relative"
                v-for="(comment, index) in data.metadata.comments"
                :key="index"
              >
                <p class="font-bold cursor-pointer comment-title">
                  {{ comment.Title }}
                </p>
                <p class="text-[14px]">{{ comment.Content }}</p>
                <div class="comment-date">
                  <small class="comment-date">{{ comment.CommentDate }}</small>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .comment-date {
    text-align: right;
    color: #0c835b;
  }
  .comment-head {
    color: #0c835b;
  }

  .comment-title:hover {
    color: rgb(144, 17, 17);
  }

  .book-new-right {
    background-color: #f0f0f0;
    border-radius: 20px;
    border: 1px solid #0c835b42;
  }

  .book-comment li {
    border-bottom: 1px solid #0c835b46;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .book-comment li:last-child {
    border-bottom: none;
  }

  td.cate-hover:hover {
    transition: ease 0.2s;
    color: #15ac7a;
  }

  td.book-hover:hover {
    transition: ease 0.2s;
    color: #c42626;
  }

  .book-new-head {
    color: #0da371;
  }

  td {
    line-height: 50px;
    border-top: 1px solid #f0f0f0;
    /* border-bottom: 1px solid #f0f0f0; */
  }

  .book-title {
    border-radius: 20px;
    color: #0c835b;
  }

  .book-title:hover {
    color: rgb(144, 17, 17);
  }

  .i-title {
    color: #0c835b;
  }

  .hr-hot {
    border: 0.1px solid #f0f0f0;
  }
</style>
