<template>
    <!-- <div
      class="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[23px] leading-[normal] tracking-[normal]"
    > -->
      <section
        class="self-stretch flex flex-col items-end justify-start py-0 px-[27px] box-border gap-[10.1px] max-w-full text-left text-13xl text-black font-segoe-ui"
      >
      <div
        class="mr-[0px] w-full h-px relative box-border max-w-[100%] shrink-0 border-t-[2px] border-solid border-gray-100"
      />
        <div
        style="padding: 20px;"
          class="w-full flex flex-row items-start justify-start gap-[12px] max-w-full mq1350:flex-wrap"
        >
          <div
            class="flex-1 flex flex-col items-start justify-start gap-[73px] min-w-[520px] max-w-full mq800:gap-[36px] mq800:min-w-full mq450:gap-[18px]" 
          >
            <div
              class="w-[789px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full"
            >
              <b
                class="flex-1 relative inline-block max-w-full mq800:text-7xl mq450:text-lgi"
                >Chọn phương thức thanh toán</b
              >
            </div>
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full"
            >
              <div
                class="self-stretch rounded-6xl bg-white box-border border-[0.25px] flex-1 flex items-end justify-start py-0 px-[19px] relative gap-[17px] max-w-full mq800:flex-wrap"
                :class="{'selected-option': selectedOption==='Quét QR CODE'}"
                @click="onOptionSelect('Quét QR CODE')"
              >
                <div
                  class="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-white box-border border-[0.25px] border-solid border-gray-100"
                />
                <div
                  class="flex flex-col items-start justify-start pt-2.5 px-0 pb-0"
                >
                  <img
                    class="w-[103px] h-[105px] relative rounded-6xl object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="../../assets/imgs/AnhQR.jpg"
                  />
                </div>
                <b
                  class="h-[125px] flex-1 relative flex items-center min-w-[175px] max-w-full z-[1] mq800:text-7xl mq450:text-lgi"
                  >Quét QR CODE</b
                >
                <i v-if="selectedOption === 'Quét QR CODE'" class="fas fa-check text-green-500"></i>
              </div>
              <div
                class="self-stretch rounded-6xl bg-white box-border border-[0.25px] flex-1 flex items-end justify-start py-0 px-[19px] relative gap-[17px] max-w-full mq800:flex-wrap"
                :class="{'selected-option': selectedOption==='Ví điện tử'}"
                @click="onOptionSelect('Ví điện tử')"
              >
                <div
                  class="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-white box-border border-[0.25px] border-solid border-gray-100"
                />
                <div
                  class="flex flex-col items-start justify-start pt-2 px-0 pb-0"
                >
                  <img
                    class="w-[103px] h-[108px] relative rounded-6xl object-cover z-[1]"
                    alt=""
                    src="../../assets/imgs/AnhVi.png"
                  />
                </div>
                <div
                  class="h-[125px] flex-1 relative flex items-center min-w-[416px] max-w-full z-[1] mq800:min-w-full mq450:text-3xl"
                >
                  <span>
                    <p class="m-0">
                      <b>Ví điện tử</b>
                    </p>
                    <p class="m-0 text-xl">
                      MoMo, Viettel Money, Zalo Pay, Shopee Pay
                    </p>
                  </span>
                  <i v-if="selectedOption === 'Ví điện tử'" class="fas fa-check text-green-500"></i>
                </div>
              </div>



              <div
                class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[635px] box-border max-w-full mq800:pb-[413px] mq800:box-border"
                
              >
                <div
                  class="self-stretch rounded-6xl bg-white box-border border-[0.25px] flex-1 flex items-end justify-start py-0 px-[19px] relative gap-[17px] max-w-full mq800:flex-wrap"
                  :class="{'selected-option': selectedOption==='Thẻ ATM có Internet Banking'}"
                @click="onOptionSelect('Thẻ ATM có Internet Banking')"
                >
                  <div
                    class="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-white box-border border-[0.25px] border-solid border-gray-100"
                  />
                  <div
                    class="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]"
                  >
                    <img
                      class="w-[103px] h-[103px] relative rounded-6xl object-cover z-[1]"
                      alt=""
                      src="../../assets/imgs/AnhATM.png"
                    />
                  </div>
                  <div
                    class="h-[125px] flex-1 relative flex items-center min-w-[350px] max-w-full z-[1] mq800:min-w-full mq450:text-3xl"
                  >
                    <span>
                      <p class="m-0">
                        <b>Thẻ ATM có Internet Banking</b>
                      </p>
                      <p class="m-0 text-xl">Thẻ ngân hàng nội địa</p>
                    </span>
                    <i v-if="selectedOption === 'Thẻ ATM có Internet Banking'" class="fas fa-check text-green-500"></i>
                  </div>
                </div>
                <div
                  class="w-[800px] hidden flex-row flex-wrap items-start justify-start gap-[20px] min-h-[595px] max-w-full"
                >
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-contain"
                    alt=""
                    src="../../assets/nganhang/ACB.png"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/AGB.jpg"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/BIDV.jpg"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/MB.jpg"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-contain"
                    alt=""
                    src="../../assets/nganhang/SHB.png"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/TCB.png"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-contain"
                    alt=""
                    src="../../assets/nganhang/TPB.jpg"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/VIB.png"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/VietB.png"
                  />
                  <img
                    class="h-[185px] w-[185px] relative rounded-8xs object-cover"
                    alt=""
                    src="../../assets/nganhang/VPB.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-[563px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[563px] max-w-full text-center text-5xl mq800:min-w-full mq1350:flex-1"
          >
            <div
              class="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full"
            >
              <div
                class="flex-1 bg-white box-border flex flex-col items-start justify-start pt-[21px] px-0 pb-[84px] relative gap-[19px] max-w-full text-left text-9xl border-[1px] border-solid border-cornsilk mq800:pt-5 mq800:pb-[55px] mq800:box-border"
              >
                <div
                  class="self-stretch h-[650px] relative bg-white box-border hidden z-[0] border-[1px] border-solid border-cornsilk"
                />
                <div
                  class="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-[7px] box-border max-w-full text-13xl"
                >
                  <b
                    class="flex-1 relative inline-block max-w-full z-[1] mq800:text-7xl mq450:text-lgi"
                    >Thông tin thanh toán</b
                  >
                </div>
                <div
                  class="self-stretch h-[385px] relative bg-white hidden z-[2]"
                />
                <div
                  class="w-[556px] h-px absolute !m-[0] right-[-1px] bottom-[274px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray-100 box-border z-[2] border-t-[2px] border-solid border-gray-100"
                />
                <div class="self-stretch flex flex-col items-end justify-start max-w-full text-center text-gray-200 font-inter">
  <div class="w-[318px] flex flex-row items-start justify-end py-0 px-[30px] box-border">
    <div class="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[324px] z-[4] mq450:pb-[211px] mq450:box-border">
      <div class="flex-1 rounded-8xs flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[27px] border-[2px] border-solid border-gray-100 mq450:flex-wrap mq450:pl-px mq450:pt-px mq450:pb-px mq450:box-border">
        <div class="h-10 text-11xl text-black  flex-1 relative font-semibold flex items-center justify-center min-w-[117px] mq450:text-3xl">
          {{ selectedPackageInfo.tenGoiHatSoi  || 'Gói Hạt Sồi'}}
        </div>
        <div class="flex flex-col items-start justify-start pt-2.5 px-1 pb-0">
          <i class="pi pi-chevron-down" style="color: gray" @click="toggleDropdown"></i>
          <!-- Dropdown Box -->
          <div class="dropdown-container">
            <div class="dropdown-box" :class="{ 'hidden': !showDropdown }">
              <!-- Dropdown list -->
              <div class="w-[214px] text-11xl flex-col items-start justify-start text-left text-black font-segoe-ui">
                <div v-for="(packages, index) in packages" :key="index" class="self-stretch h-[54px] rounded-8xs bg-gainsboro flex flex-row items-center justify-center py-2.5 px-2 box-border whitespace-nowrap package-item" @click="onPackageSelect(packages.name)">
                  <div class="h-[37px] flex-1 relative tracking-[-0.04px] font-semibold inline-block package-name">
                    {{ packages.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                  <div
                    class="self-stretch flex flex-row items-start justify-start relative max-w-full mt-[-44px] text-left text-7xl text-black font-segoe-ui"
                  >
                    <div
                      class="h-[408px] w-[300px] absolute !m-[0] top-[-320px] left-[48px] inline-block z-[2] mq450:text-[21px]"
                    >
                      <p class="m-0 mb-4">Sản phẩm: </p>
                      <p class="m-0 mb-4">Tạm tính: {{ selectedPackageInfo.gia }} </p>
                      <p class="m-0 ">Hình thức thanh toán:</p>
                      <p class="w-[400px] mb-4">{{ selectedOption }}</p>
                      <p class="m-0 mb-4">Sồi theo gói: {{ selectedPackageInfo.soi }}</p>
                    </div>
                    <div
                      class="flex-1 flex flex-col items-start justify-start pt-7 px-3 pb-0 box-border gap-[30px] max-w-full z-[3] text-13xl"
                    >
                      <div
                        class="w-[563px] h-[187px] relative bg-white hidden max-w-full"
                      />
                      <div
                        class="w-[300px] relative flex items-center z-[1] mq800:text-7xl mq450:text-lgi"
                      >
                        Tổng:     {{ selectedPackageInfo.gia }}
                      </div>
                      <div
                        class="w-[347px] h-[45px] relative bg-white hidden max-w-full"
                      />
                      <div
                        class="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-1 box-border max-w-full text-center text-11xl text-white"
                      >
                        <div
                          class="flex-1 rounded-6xl bg-mediumgreen-100 flex flex-row items-start justify-start pt-[13px] px-0 pb-[31px] box-border max-w-full z-[1]"
                        >
                          <div
                            class="h-[85px] w-[525px] relative rounded-6xl bg-mediumgreen-100 hidden max-w-full " style="margin-top: 2px;"
                          />
                          <div
                            class="text-13xl flex-1 relative font-semibold inline-block max-w-full cursor-pointer z-[2] mq800:text-5xl mq450:text-lg" style="margin-top: 10px;"
                            @click="onThanhToanTextClick"
                          >
                            Thanh toán
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
      </section>
    <!-- </div> -->
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const selectedOption = ref(null);
  const selectedGoiHatSoi = ref(null);
  const selectedPackageInfo = ref({
    tenGoiHatSoi: "",
    gia: "",
    soi: ""
  });
  const showDropdown = ref(false);
  const packages = ref([
    { id: 1, name: "Gói Hạt Sồi 79k", gia: "79.000 VNĐ", soi: "4.000 sồi" },
    { id: 2, name: "Gói Hạt Sồi 99k", gia: "99.000 VNĐ", soi: "5.000 sồi" },
    { id: 3, name: "Gói Hạt Sồi 199k", gia: "199.000 VNĐ", soi: "10.000 sồi" },
    { id: 4, name: "Gói Hạt Sồi 299k", gia: "299.000 VNĐ", soi: "15.000 sồi" },
    { id: 5, name: "Gói Hạt Sồi 399k", gia: "399.000 VNĐ", soi: "20.000 sồi" },
    { id: 6, name: "Gói Hạt Sồi 499k", gia: "499.000 VNĐ", soi: "25.000 sồi" },
  ]);
  
  const onOptionSelect = (option) => {
    selectedOption.value = option;
  };
  
  const onThanhToanTextClick = () => {
    const route = useRoute();
    route.push("/Nap/Payment/Bill");
  };
  
  const onGoiHatSoiSelect = (giaTriGoi) => {
    selectedGoiHatSoi.value = giaTriGoi;
    const selectedPackage = packages.value.find(pkg => pkg.name.includes(giaTriGoi));
  
    selectedPackageInfo.value = {
      tenGoiHatSoi: selectedPackage.name,
      gia: selectedPackage.gia,
      soi: selectedPackage.soi
    };
  };
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  
  const onPackageSelect = (pkgName) => {
    const selectedPackage = packages.value.find(pkg => pkg.name === pkgName);
    selectedPackageInfo.value = {
      tenGoiHatSoi: selectedPackage.name,
      gia: selectedPackage.gia,
      soi: selectedPackage.soi
    };
    showDropdown.value = false;
  };
  </script>

<style scoped>
.dropdown-container {
  position: relative;
}

.dropdown-box {
  position: absolute;
  top: 100%;  
  z-index: 10; 
  border: 2px solid #898989;
  background-color: #d9d9d9;
  padding: 10px;
  width: 250px;
  box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  border-radius: 10px;
  left: -235px;
}

.package-item{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -15px;
  position: relative;
  z-index: 4;
}
.package-item:hover{
  background-color: #898989;
  cursor: pointer;
  width: 248px;
  left: 4px;
}
.package-name{
  text-align: left;
}
.mb-4{
  margin-bottom: 40px;
}
.mt-4{
  margin-top: 20px;
  width: 400px;
}
.selected-option{
  border-color: #4caf50;
  border-width: 2px;
}
.selected-option i{
  display: inline-block;
  margin-right: 10px;
  color: #4caf50;
}
.text-left{
  z-index: 1;
}
.text-green-500{
  color:#4caf50
}
  /* Colors */
.white {
  color: #fff;
}

.sandybrown {
  color: rgba(255, 199, 120, 0.75);
}
.border-sandybrown{
  border-color: rgba(255, 199, 120, 0.75);
}
.bg-sandybrown{
  background-color: rgba(255, 199, 120, 0.75);
}
.text-black {
  color: #000;
}

.cornsilk {
  color: #faf4d4;
}

.brown {
  color: #9f2d2d;
}

.green {
  color: #119663;
}

.gainsboro-100 {
  color: #d9d9d9;
}
.border-gainboro-100{
  border-color: #d9d9d9;
}

.bg-gainsboro-100{
  background-color: #d9d9d9;
}
.gainsboro-200 {
  color: rgba(217, 217, 217, 0.25);
}

.bg-gainsboro-200{
  background-color: rgba(217, 217, 217, 0.25);
}
.gainsboro-300 {
  color: #119663;
}

.aquamarine {
  color: #8bf8c4;
}

.text-chocolate {
  color: #c17011;
}

.bg-mediumgreen-100 {
  background-color: #10b981;
}

.bg-mediumgreen-200 {
  background-color: #00a169;
}

.gray-100 {
  color: #898989;
}

.border-gray-100{
border-color: #d9d9d9;
}
.bg-gray-100{
background-color: #d9d9d9;
}
.text-gray-200 {
  color: rgba(0, 0, 0, 0.4);
}

.whitesmoke {
  color: #efefef;
}

/* Spacing - no custom spacing defined */

/* Font Family */
.roboto {
  font-family: Roboto;
}

.segoe-ui {
  font-family: 'Segoe UI';
}

/* Border Radius */
.rounded-6xl {
  border-radius: 25px;
}

.rounded-31xl {
  border-radius: 50px;
}

.rounded-30xl {
  border-radius: 45px;
}

.rounded-8xs {
  border-radius: 5px;
}

/* Font Size */
.text-lg {
  font-size: 18px;
}

.text-xl {
  font-size: 20px;
}

.text-11xl {
  font-size: 22px;
}
.text-base {
  font-size: 16px;
}

.text-5xl {
  font-size: 24px;
}

.text-lgi {
  font-size: 19px;
}

.text-13xl {
  font-size: 32px;
}

.text-14xl {
  font-size: 30px;
}

.text-7xl {
  font-size: 26px;
}

.text-45xl {
  font-size: 64px;
}

.text-xs {
  font-size: 12px;
}

.text-inherit {
  font-size: inherit;
}

</style>