<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import carousel1 from '/images/carousell1.jpg'
import carousel2 from '/images/carousell2.jpg'
import carousel3 from '/images/carousell3.jpg'
import MobileMenu from './MobileMenu.vue';


const photo1 = carousel1;
const photo2 = carousel2;
const photo3 = carousel3;

const carouselphotos = [photo1, photo2, photo3];

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
    <div v-if="!showMenu" class="h-[70vh]">
        <!--Menu bar-->
        <div class="fixed z-50 w-screen h-[65px] bg-[#ffffff]/[10%] flex flex-row justify-between items-center">
            <img src="/images/logo.png" alt="logo" class="w-[70px] h-[60px] opacity-[100%] mx-[40px]"></img>
            <i @click="showMenu = true" class="bi bi-list text-white text-[30px] mx-[15px]"></i>
        </div>
         <transition name="fade" mode="out-in">
        <img :src="carouselphotos[currentIndex]" alt="carousel image" class="w-full h-full  object-cover transition-all duration-700"></img>
        </transition>
    </div>

    <MobileMenu :show="showMenu" @close="showMenu = false" />
        
</template>

<style scoped>

</style>
