<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home ',
    label: 'Trang chủ',
    route: '/'
});
const items = ref([
    { label: 'Tết ở làng địa ngục', route: '/inputtext' }
]);
</script>
<template>
    <div class="flex justify-content-center">
        <Breadcrumb :home="home" :model="items" class="card">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" style="color: black;"/>&nbsp;
                        <span style="color:black; font-weight: bold;">{{ item.label }} </span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-color font-bold">{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
   <div class="">
        
    </div>
</template>