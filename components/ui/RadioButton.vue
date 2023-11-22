<template>
    <div class="flex gap-3 items-center text-lg font-medium cursor-pointer">
        <div v-if="!isSelected" class="w-5 h-5 rounded-full bg-[#E8E8E8]">
        </div>
        <div v-if="isSelected" class="w-5 h-5 rounded-full bg-[#E8E8E8] border-[0.125em] border-[#08B3B9] flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-[#08B3B9]"></div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(["isSelected"])

</script>