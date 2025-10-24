<script setup>
import {ref} from 'vue'
import Header from './Header.vue';
defineProps({
    show: Boolean
});

const emit = defineEmits(['close']);

</script>

<template>
    <!--Menu POP-->
    <div v-if="show" class="fixed inset-0 bg-[#f5f5f5] flex flex-col px-[30px] py-[20px]">
        <i @click="$emit('close')" class="bi bi-x text-[35px] flex justify-end"></i>
        <div class="flex flex-col mx-[30px]">
            <p class="text-[20px] border-b">Menu</p>
            <ol>
                <li>About me</li>
                <li>Most recent photos</li>
                <li>Reviews</li>
                <li>Contacts</li>
            </ol>
        </div>
    </div>



</template>

<style scoped>
li {
    margin-top: 20px;
    border-bottom: 1px solid black;
    font-size: 20px;
    font-weight: 400;
}
</style>
