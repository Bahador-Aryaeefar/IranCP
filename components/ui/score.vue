<template>
    <div class="flex gap-2 items-center justify-center">
       <div @click="emit('pick', 0)" class="rounded-full shrink-0 flex items-center justify-center h-10 w-10 border-[0.125rem] text-[#08B3B9]" :class="(state == 0 ? 'border-[#08B3B9] text-[#08B3B9]' : 'border-[#D6D6D6] text-[#D6D6D6]') + (disabled ? '' : ' cursor-pointer hover:border-[#08B3B9]')">0</div>
       <div @click="emit('pick', 1)" class="rounded-full shrink-0 flex items-center justify-center h-10 w-10 border-[0.125rem] text-[#08B3B9]" :class="(state == 1 ? 'border-[#08B3B9] text-[#08B3B9]' : 'border-[#D6D6D6] text-[#D6D6D6]') + (disabled ? '' : ' cursor-pointer hover:border-[#08B3B9]')">1</div>
       <div @click="emit('pick', 2)" class="rounded-full shrink-0 flex items-center justify-center h-10 w-10 border-[0.125rem] text-[#08B3B9]" :class="(state == 2 ? 'border-[#08B3B9] text-[#08B3B9]' : 'border-[#D6D6D6] text-[#D6D6D6]') + (disabled ? '' : ' cursor-pointer hover:border-[#08B3B9]')">2</div>
       <div @click="emit('pick', 3)" class="rounded-full shrink-0 flex items-center justify-center h-10 w-10 border-[0.125rem] text-[#08B3B9]" :class="(state == 3 ? 'border-[#08B3B9] text-[#08B3B9]' : 'border-[#D6D6D6] text-[#D6D6D6]') + (disabled ? '' : ' cursor-pointer hover:border-[#08B3B9]')">3</div>
       <div @click="emit('pick', 4)" class="rounded-full shrink-0 flex items-center justify-center h-10 w-10 border-[0.125rem] text-[#08B3B9]" :class="(state == 4 ? 'border-[#08B3B9] text-[#08B3B9]' : 'border-[#D6D6D6] text-[#D6D6D6]') + (disabled ? '' : ' cursor-pointer hover:border-[#08B3B9]')">4</div>
       <div @click="emit('pick', 5)" class="rounded-full shrink-0 flex items-center justify-center h-10 w-10 border-[0.125rem] text-[#08B3B9]" :class="(state == 5 ? 'border-[#08B3B9] text-[#08B3B9]' : 'border-[#D6D6D6] text-[#D6D6D6]') + (disabled ? '' : ' cursor-pointer hover:border-[#08B3B9]')">5</div>
    </div>
</template>

<script setup>
const emit = defineEmits(['pick'])
const props = defineProps({
    state: Number,
    disabled: {
        default: false,
        type: Boolean
    }
})
</script>

<style scoped>
.FirefoxScroll {
    scrollbar-color: #A8AEB5 transparent;
    scrollbar-width: thin;
}

/* width */
::-webkit-scrollbar {
    width: 0.188rem;
    height: 0;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #A8AEB5;
    border-radius: 300px;
}

::-webkit-scrollbar-button:end:increment {
    height: 0.2rem;
    display: block;
    background: transparent;
}

::-webkit-scrollbar-button:start:increment {
    height: 0.2rem;
    display: block;
    background: transparent;
}
</style>