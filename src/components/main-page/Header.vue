<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import carousel1 from '/images/carousell1.webp'
import carousel2 from '/images/carousell2.webp'
import carousel3 from '/images/carousell3.webp'
import {Menu} from 'lucide-vue-next'

const photo1 = carousel1;
const photo2 = carousel2;
const photo3 = carousel3;

const carouselphotos = [photo1, photo2, photo3];

carouselphotos.forEach(src => {
  const img = new Image();
  img.src = src;
});

const currentIndex = ref(0);

let interval;
onMounted(() => {
     interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % carouselphotos.length}, 4000)
    })

onUnmounted(() => clearInterval(interval));

const showMenu = ref(false);
</script>

<template>
    <div class="h-[70vh]">
        <!--Menu bar-->
        <div class="fixed z-50 w-screen h-[65px] bg-slate-600/20 flex flex-row justify-between items-center backdrop-blur-sm">
            <img src="/images/logo.png" alt="logo" class="w-[70px] h-[60px] opacity-[100%] mx-[30px]"></img>
           <router-link to="/mobile-menu"><Menu class="mr-[30px] text-[#ffffff]" /></router-link>
        </div>
         <transition name="fade" mode="out-in">
        <img :src="carouselphotos[currentIndex]" alt="carousel image" loading ="lazy" class="w-full h-full  object-cover transition-opacity duration-700"></img>
        </transition>
    </div>
        
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>
