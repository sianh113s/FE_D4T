<script setup>

</script>

<template>
    <div class="registration-login relative flex justify-center items-center h-screen w-screen-">
        <div class="img-login relative">
            <img class="w-screen h-screen bg-cover" src="../../assets/imgs/imgLogin.png" alt="ảnh trang login">
        </div>
        <form action="" method="post"
            class="form-login w-[440px] h-[640px] absolute opacity-60 bg-black p-[40px] flex flex-col justify-around rounded-2xl shadow-xl">
            <div class="heading heading-login text-[30px] font-[600] flex flex-col items-center text-center mb-[13px]">
                <p>Đăng ký</p>
                <div class="hr border w-[105px] mt-[5px]"></div>
            </div>
            <div class="input input-login flex flex-col justify-center items-center">
                <div>
                    <label for="email" class="block my-2 text-[15] font-medium  dark:text-white">Email</label>
                    <input type="email" name="email" id="email"
                        class="w-[340px] h-[47px] text-[18] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-3.5 font-medium"
                        placeholder="name@company.com" required="">
                </div>
                <div>
                    <label for="fullname" class="block my-2 text-[15] font-medium  dark:text-white">Họ và tên</label>
                    <input type="text" name="fullname" id="fullname"
                        class="w-[340px] h-[47px] text-[18] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-3.5 font-medium"
                        placeholder="Nguyễn Văn A" required="">
                </div>
                <div>
                    <label for="password" class="block my-2 text-[15] font-medium  dark:text-white">Mật khẩu</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="w-[340px] h-[47px] text-[18] leading-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-3.5 font-medium"
                        required="">
                </div>

                <button type="button"
                    class="btn-color w-[220px] h-[50px] mt-10 rounded-2xl font-[500] text-[15px] tracking-wide shadow-xl"><router-link
                        to="/">TẠO TẢI KHOẢN</router-link></button>
            </div>
            <div class="sub-title flex justify-between items-center p-[10px]">
                <div class="sub-title-left flex flex-col justify-between h-[110px]">
                    <p>Hoặc</p>
                    <div class="icon-login text-[]">
                        <i class="pi pi-google mr-5 " style="font-size: 1.5rem"></i>
                        <i class="pi pi-facebook" style="font-size: 1.5rem"></i>
                    </div>
                    <p><router-link to="/signin">Đi đến trang đăng nhập</router-link></p>
                    <p>Cần trợ giúp</p>
                </div>
                <div class="sub-title-right w-[100px] h-[100px]">
                    <img src="../../assets/imgs/logo-tron.png" alt="">
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped> .registration-login {
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

 .sub-title-left p {
     font-size: 13px;
 }
</style>
