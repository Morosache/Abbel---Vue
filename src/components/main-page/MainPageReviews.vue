<script setup>
import { UserStar } from 'lucide-vue-next'
import ReviewCard from './ReviewCard.vue';



</script>

<template>
    <div class=" pt-[50px] bg-[#f5f5f5] p-[30px]">
        <div class="flex flex-row items-center gap-1 border-l-2">
            <UserStar class="ml-[4px] w-[19px] h-[20px]" />
            <p class="text-[15px]">Clients</p>
            <p class="text-[15px] text-[#F9C74F]">REVIEWS</p>
        </div>
        <div class="flex justify-center items-center">
        <ReviewCard reviewName="Elisei Morosan" reviewTitle="Super fain" reviewDescription="Cel mai bun fotograf de pe zona Sucevei si de pe zona Bruxelles! Recomand cu incredere!"/>
        </div>
    </div>

</template>

<style scoped>
.review-card {
    box-shadow: 3px 3px 15px rgb(162, 162, 162);
}
</style>