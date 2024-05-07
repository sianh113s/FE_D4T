<script setup>
import { ref, onMounted } from 'vue';

let currentSlide = ref(0);
let slides = ref([
    'src/assets/imgs/banner4.png',
    'src/assets/imgs/banner3.png',
    'src/assets/imgs/banner1.png',
]);
let dots = ref([0, 1, 2]);

onMounted(() => {
    setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    }, 4000); // Change slide every 4 seconds
});

let nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

let prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<template>
    <div class="relative z-0 top-0 left-0  h-[500px]">
        <div class="absolute images shadow-xl" v-for="(slide, index) in slides" :key="index"
            :class="{ 'active': currentSlide === index }">
            <img class="h-[500px] object-cover" :src="slide">
        </div>

        <!-- Previous and Next Buttons -->
        <div class="absolute top-[40%]">
            <button class="previous" @click="prevSlide">❮</button>
        </div>
        <div class="absolute right-0 top-[40%]">
            <button class="next" @click="nextSlide">❯</button>
        </div>

        <!-- Navigation Dots-->
        <div class="absolute z-0 right-6 bottom-5" style="text-align:center">
            <span class="navigation-dot" v-for="(dot, index) in dots" :key="index" :class="{ 'active': currentSlide === index }"
                @click="currentSlide = index"></span>
        </div>
    </div>
</template>
<style scoped>
.images {
    /* position:; */
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.images.active {
    opacity: 1;
}

img {
    vertical-align: middle;
    width: 100vw;
    background-size: cover;
}

/* Slideshow container */
.carousel-container {
    /* max-width: 100vw; */
    margin: auto;
}

/* Next & previous buttons */
.previous,
.next {
    cursor: pointer;
    /* position:; */
    /* top: 60%; */
    /* transform: translateY(-10%); */
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: rgba(148, 148, 148, 0.566);
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* Position the "previous button" to the left */
.previous {
    left: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit seethrough */
.previous:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}


/* The dots/bullets/indicators */
.navigation-dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active,
.navigation-dot:hover {
    background-color: #717171;
}
</style>