<script setup>
  import Comments from "postcss/lib/comment";
  const data = {
    message: "Get all books success!",
    status: 200,
    metadata: {
      books: [
        {
          Title: "7 thói quen để thành đạt",
          title_for_search: "7_thoi_quen_de_thanh_dat",
          Categories: "Kỹ năng sống",
          language: "Tiếng Việt",
          Author: "Stephen Covey",
        },
        {
          Title: "Đắc nhân tâm",
          title_for_search: "dac_nhan_tam",
          Categories: "Kỹ năng sống",
          language: "Tiếng Việt",
          Author: "Dale Carnegie",
        },
        {
          Title: "Chiến thắng con quỷ trong bạn",
          title_for_search: "chien_thang_con_quy_trong_ban",
          Categories: "Tâm lý, Kỹ năng sống",
          language: "Tiếng Việt",
          Author: "Napoleon Hill",
        },
        {
          Title: "Dám nghĩ lớn",
          title_for_search: "dam_nghi_lon",
          Categories: "Tâm lý",
          language: "Tiếng Việt",
          Author: "David J. Schwartz",
        },
        {
          Title: "Magic of thinking",
          title_for_search: "magic_of_thinking",
          Categories: "Tâm lý",
          language: "Tiếng Anh",
          Author: "David J. Schwartz",
        },
        {
          Title: "Nói nhiều không bằng nói đúng",
          title_for_search: "noi_nhieu_khong_bang_noi_dung",
          Categories: "Kỹ năng sống",
          language: "Tiếng Việt",
          Author: "",
        },
        {
          Title: "Outwitting the devil",
          title_for_search: "outwitting_the_devil",
          Categories: "Tâm lý, Kỹ năng sống",
          language: "Tiếng Anh",
          Author: "Napoleon Hill",
        },
        {
          Title: "Phi lý trí",
          title_for_search: "phi_ly_tri",
          Categories: "Kỹ năng sống",
          language: "Tiếng Việt",
          Author: "Dan Ariely",
        },
        {
          Title: "Predictable",
          title_for_search: "predictable",
          Categories: "Kỹ năng sống",
          language: "Tiếng Anh",
          Author: "Dan Ariely",
        },
        {
          Title: "Suy nghĩ và làm giàu",
          title_for_search: "suy_nghi_va_lam_giau",
          Categories: "Kỹ năng sống",
          language: "Tiếng Việt",
          Author: "Napoleon Hill",
        },
        {
          Title: "Predictable",
          title_for_search: "predictable",
          Categories: "Kỹ năng sống",
          language: "Tiếng Anh",
          Author: "Dan Ariely",
        },
        {
          Title: "Magic of thinking",
          title_for_search: "magic_of_thinking",
          Categories: "Tâm lý",
          language: "Tiếng Anh",
          Author: "David J. Schwartz",
        },
      ],
      comments: [
        {
          Title: "7 thói quen để thành đạt",
          Content: "Sách này hay quá đi, nội dung thật thâm thúy",
          CommentDate: "23 phút trước",
        },
        {
          Title: "Đắc nhân tâm",
          Content: "Sau khi đọc cuốn này mình đã giác ngộ triết lí cuộc sống",
          CommentDate: "1 tiếng trước",
        },
        {
          Title: "Chiến thắng con quỷ trong bạn",
          Content:
            "Yeah, mình phải sống kỉ luật ngay sau khi đọc cuốn sách này",
          CommentDate: "5 phút trước",
        },
      ],
    },
  };
</script>

<template>
  <div class="container w-[1300px] h-[900px] mt-[40px]">
    <div
      class="book-title mb-[30px] w-[170px] h-[38px] flex justify-center items-center cursor-pointer relative"
    >
      <span class="i-title mr-1"
        ><i
          class="pi pi-sparkles"
          style="font-size: 1rem"
        ></i
      ></span>
      <span class="text-[15px] mr-1 font-medium">Sách mới cập nhật</span>
      <div class="absolute inline-block left-[170px] bottom-[3px]">
        <span class="text-[25px]">></span>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="flex">
        <div
          class="book-new-left w-[1000px] p-[20px] flex flex-col justify-center items-center"
        >
          <table class="w-[900px]">
            <tr class="book-new-head font-bold">
              <td>Tên sách</td>
              <td>Thể loại</td>
              <td>Ngôn ngữ</td>
              <td>Tác giả</td>
            </tr>
            <tr
              v-for="(book, index) in data.metadata.books"
              :key="index"
            >
              <td class="book-hover font-bold cursor-pointer">
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
            <div class="comment-head font-medium mb-4">
              <span class="mr-1"
                ><i
                  class="pi pi-comment"
                  style="font-size: 1rem"
                ></i
              ></span>
              <span>Bình luận gần đây</span>
            </div>
            <ul class="book-comment">
              <li
                class="relative"
                v-for="(comment, index) in data.metadata.comments"
                :key="index"
              >
                <p class="comment-title cursor-pointer font-bold">
                  {{ comment.Title }}
                </p>
                <p class="text-[14px]">{{ comment.Content }}</p>
                <div class="comment-date">
                  <small class="comment-date">{{ comment.CommentDate }}</small>
                </div>
              </li>
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
