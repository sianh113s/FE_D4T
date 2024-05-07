<script setup>
const data = {
    message: "Get all books success!",
    status: 200,
    metadata: {
        books: [
            {
                Title: "7 thói quen để thành đạt",
                title_for_search: "7_thoi_quen_de_thanh_dat",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2F7_thoi_quen_de_thanh_dat-001.png?alt=media&token=0e30ede3-45e1-4089-bf74-e45619eb3e11",
            },
            {
                Title: "Đắc nhân tâm",
                title_for_search: "dac_nhan_tam",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fdac_nhan_tam-001.png?alt=media&token=575f7544-32c8-40c3-91e3-5893f8fa14b3",
            },
            {
                Title: "Chiến thắng con quỷ trong bạn",
                title_for_search: "chien_thang_con_quy_trong_ban",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fchien_thang_con_quy_trong_ban-001.png?alt=media&token=9da7b0a5-4b1f-420a-9138-8ee0a76c8d11",
            },
            {
                Title: "Dám nghĩ lớn",
                title_for_search: "dam_nghi_lon",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fdam_nghi_lon-001.png?alt=media&token=45118485-4c1d-48f7-a67f-6a54ace990f2",
            },
            {
                Title: "Magic of thinking",
                title_for_search: "magic_of_thinking",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fmagic_of_thinking-001.png?alt=media&token=bb98bdab-e67a-4c7a-a3c8-21f2babe9b6a",
            },
            {
                Title: "Nói nhiều không bằng nói đúng",
                title_for_search: "noi_nhieu_khong_bang_noi_dung",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fnoi_nhieu_khong_bang_noi_dung-001.png?alt=media&token=f9f0251a-4911-4462-81a5-aa330b19b0bf",
            },
            {
                Title: "Outwitting the devil",
                title_for_search: "outwitting_the_devil",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Foutwitting_the_devil-001.png?alt=media&token=979e73d9-02dd-4acc-ac95-55a2567a0a2c",
            },
            {
                Title: "Phi lý trí",
                title_for_search: "phi_ly_tri",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fphi_ly_tri-001.png?alt=media&token=9c35dcc9-58b8-4994-840c-b325516176f5",
            },
            {
                Title: "Predictable",
                title_for_search: "predictable",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fpredictable-001.png?alt=media&token=aa77039f-ebe1-42c5-8850-55fd3d7cfd56",
            },
            {
                Title: "Suy nghĩ và làm giàu",
                title_for_search: "suy_nghi_va_lam_giau",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fsuy_nghi_va_lam_giau-001.png?alt=media&token=0ae9db30-8865-4872-9022-6b86e116a70a",
            },
            {
                Title: "Predictable",
                title_for_search: "predictable",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fpredictable-001.png?alt=media&token=aa77039f-ebe1-42c5-8850-55fd3d7cfd56",
            },
            {
                Title: "Magic of thinking",
                title_for_search: "magic_of_thinking",
                CoverURL:
                    "https://firebasestorage.googleapis.com/v0/b/d4t-project.appspot.com/o/books_cover%2Fmagic_of_thinking-001.png?alt=media&token=bb98bdab-e67a-4c7a-a3c8-21f2babe9b6a",
            },
        ],
    },
};

</script>

<template>
    <div class="container w-[1300px] h-[870px] mt-[40px] ">
        <div class="book-title mb-[30px] w-[100px] h-[38px] flex justify-center items-center cursor-pointer relative">
            <span class="i-title mr-1"><i class="pi pi-trophy" style="font-size: 1rem"></i></span>
            <span class="text-[15px] mr-1 font-medium">Sách hot</span>
            <div class="absolute inline-block left-[100px] bottom-[3px]">
                <span class="text-[25px]">></span>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="book-hot relative flex justify-center items-center">
                <div class="grid grid-cols-6">
                    <ul v-for="(book, index) in data.metadata.books" :key="index"
                        class="book-item flex justify-center items-center">
                        <li class="w-[190px] h-[340px]">
                            <img class="w-[190px] h-[249px] mb-4 cursor-pointer" :src="book.CoverURL" alt="Book Cover" />
                            <p class="book-name font-bold cursor-pointer">{{ book.Title }}</p>
                        </li>
                    </ul>
                </div>
                <div class="book-hot-btn w-[395px] h-[45px] flex justify-center items-center font-medium">
                    <button>Xem Thêm</button>
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
    transform: translateY(-2px)
}
.book-hot-btn:hover{
    background-color: rgba(21, 145, 104, 0.4);
    transition: 0.2s ease;
    color: #117554;
    font-weight:600;
    transform: translateY(1px);
}
.hr-hot {
    border: 0.1px solid #f0f0f0;
}
</style>
