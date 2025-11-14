<script setup>
import { User } from 'lucide-vue-next'
import { MoveUpRight } from 'lucide-vue-next'
</script>

<template>
    <div class="mt-[100px] px-[40px]">
        <div>
            <img src="/images/pozaabbel.webp" class="rounded-[5px]"></img>
        </div>

        <div class="flex flex-row items-center mt-[30px] border-l-2">
            <User class="w-[22px] h-[22px] ml-[3px]" />
            <p class="text-[22px] ml-[3px]">Who Am I?</p>
        </div>

        <div class="mt-[20px]">
            <p class="text-[15px] text-[#666666]">Hello! My name is Guriță Eduard Abbel. I work in construction, but my
                passion is photography. I especially enjoy photographing people in nature.</p>
            <p class="text-[15px] mt-[10px] text-[#666666]">I also take photos at weddings, baptisms, and other special
                events in people's lives.</p>
            <p class="text-[15px] mt-[10px] text-[#666666]">I am currently based in Brussels, but I also travel to
                Romania during holidays.</p>
        </div>

        <div class="mt-[20px] flex items-center flex-row gap-1">
            <p class="text-[15px] font-medium">More</p>
            <router-link to="/mobile-menu" class="flex flex-row items-center">
            <p class="text-[15px] font-medium text-[#F9C74F]"> ABOUT ME</p>
            <MoveUpRight class="w-[15px] h-[15px] font-medium ml-[2px]"/>
            </router-link>
        </div>
    </div>
</template>