import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

//! import UI
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PrimeVue, { ripple: true }, { inputStyle: "filled" }); //! Use Prime UI
app.use(ToastService);

app.component("IconField", IconField);
app.component("InputIcon", InputIcon);
app.component("Toast", Toast);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("Calendar", Calendar);
app.component("Textarea", Textarea);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);

//
app.mount("#app");
