<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import carousel1 from 'public/images/carousell1.jpg'
import carousel2 from 'public/images/carousell2.jpg'
import carousel3 from 'public/images/carousell3.jpg'

const photo1 = carousel1;
const photo2 = carousel2;
const photo3 = carousel3;

const carouselphotos = [photo1, photo2, photo3];

const currentIndex = ref(0);

onMounted(() => {
    const interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % carouselphotos.length}, 4000)

    })
onUnmounted(() => clearInterval(interval));
</script>

<template>
    <div class="h-[70vh]">
        <!--Menu bar-->
        <div class="fixed z-50 w-screen h-[65px] bg-white/10 flex flex-row justify-between items-center">
            <img src="public/images/logo.png" alt="logo" class="w-[70px] h-[60px] opacity-[100%] mx-[15px]"></img>
            <i class="bi bi-list text-white text-[30px] mx-[15px]"></i>
        </div>
         <transition name="fade" mode="out-in">
        <img :src="carouselphotos[currentIndex]" alt="carousel image" class="w-full h-full  object-cover transition-all duration-700"></img>
        </transition>
    </div>
</template>

<style scoped></style>
