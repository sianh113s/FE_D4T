<script setup>

</script>

<template>
    <div class="registration-login relative flex justify-center items-center h-screen w-screen-">
        <div class="img-login relative">
            <img class="w-screen h-screen bg-cover" src="../../assets/imgs/imgLogin.png" alt="ảnh trang login">
        </div>
        <form action="" method="post"
            class="form-login w-[552px] h-[800px] absolute opacity-60 bg-black p-[50px] flex flex-col justify-around rounded-2xl shadow-xl">
            <div class="heading heading-login text-[45px] font-[600] flex flex-col items-center text-center mb-[30px]">
                <p>Đăng ký</p>
                <div class="hr border w-[160px] mt-[10px]"></div>
            </div>
            <div class="input input-login flex flex-col justify-center items-center">
                <div>
                    <label for="email" class="block my-2 text-[18px] font-medium  dark:text-white">Email</label>
                    <input type="email" name="email" id="email"
                        class="w-[400px] h-[60px] text-[18px] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                        placeholder="name@company.com" required="">
                </div>
                <div>
                    <label for="fullname" class="block my-2 text-[18px] font-medium  dark:text-white">Họ và tên</label>
                    <input type="text" name="fullname" id="fullname"
                        class="w-[400px] h-[60px] text-[18px] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                        placeholder="Nguyễn Văn A" required="">
                </div>
                <div>
                    <label for="password" class="block my-2 text-[18px] font-medium  dark:text-white">Mật khẩu</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="w-[400px] h-[60px] text-[18px] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5"
                        required="">
                </div>

                <button type="button"
                    class="btn-color w-[260px] h-[60px] mt-11 rounded-2xl font-[500] text-[18px] tracking-wide shadow-xl"><router-link
                        to="/">TẠO TẢI KHOẢN</router-link></button>
            </div>
            <div class="sub-title flex justify-between items-center p-[25px]">
                <div class="sub-title-left flex flex-col justify-between h-[120px]">
                    <p>Hoặc</p>
                    <div class="icon-login text-[]">
                        <i class="pi pi-google mr-5 " style="font-size: 1.5rem"></i>
                        <i class="pi pi-facebook" style="font-size: 1.5rem"></i>
                    </div>
                    <p><router-link to="/signin">Đi đến trang đăng nhập</router-link></p>
                    <p>Cần trợ giúp</p>
                </div>
                <div class="sub-title-right w-[110px] h-[110px]">
                    <img src="../../assets/imgs/logo-tron.png" alt="">
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.registration-login {
    color: white
}

.btn-color {
    background-color: #ec7200;
    transform: translateY(-2px)
}

.btn-color:hover {
    background-color: #7f4108;
    transform: translateY(1px);
}

.pi-google {
    color: red;
}

.pi-facebook {
    color: blue;
}
</style>
