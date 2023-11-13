<template>
    <div @click.stop="isOpen = !isOpen" @focusout="blurInput"
        class="text-center text-xl flex justify-between items-center relative cursor-pointer group" tabindex="0">
        <input @click.stop="isOpen = true" @blur="blurInput" v-model="selectInput" @input.prevent="inputValue"
            :placeholder="placeHolder" :disabled="!isInput"
            class="shadow-md text-center h-14 bg-white focus:outline-none w-full placeholder:text-[#707070] text-[#000000] border-[0.125rem] rounded-full px-6"
            :class="((isInput) ? '' : 'pointer-events-none') + ((isOpen) ? ' border-[#57C5C6]' : ((error) ? ' border-[#EE0035]' : ' border-[#E1E2E4] group-hover:border-[#57C5C6]')) + ' ' + inputBorder"
            type="text">

        <img class="absolute left-4 transition-all duration-[250ms] pointer-events-none w-6 mt-1"
            :class="(isOpen) ? 'rotate-180' : ''" src="/icons/ui/down.svg" alt="down">
        <ul v-if="isOpen && options[0]" tabindex="0" @click.stop=""
            class="shadow-md select z-[2] max-h-[21rem] rounded-[1rem] overflow-auto overflow-x-hidden bg-white FirefoxScroll absolute top-[4rem] left-0 w-full border-[#E1E2E4] border-[0.125rem]">
            <template v-for="(item, index) in options">
                <hr v-if="index" class="border-0 border-t-[0.125rem] border-[#E1E2E4] mx-2">
                <li @click="pick(item)"
                    class="py-3 hover:bg-[#FAFAFA] rounded-[1rem] px-4 text-[#1C0E07] cursor-pointer">{{ item }}
                </li>
            </template>
        </ul>
    </div>
</template>

<script setup>
const emit = defineEmits(['pick'])

const props = defineProps({
    value: [Number, String],
    items: Object,
    title: String,
    placeHolder: String,
    isInput: Boolean,
    error: Boolean,
    strict: Boolean,
    inputBorder: {
        type: String,
        default: 'rounded-[0.5rem] px-4'
    }
})

const selectInput = ref(props.value)
const isOpen = ref(false)
const options = computed(() => ((props.isInput) ? props.items.filter((x) => String(x).toLowerCase().includes(String(selectInput.value).toLowerCase())) : props.items))
const picked = ref(props.value)

const pick = (item) => {
    selectInput.value = item
    picked.value = item
    isOpen.value = false
    emit('pick', item)
}

const inputValue = () => {
    if (props.strict) return
    emit('pick', selectInput.value)
}

const blurInput = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.classList.contains('select')) {
        isOpen.value = false;
        if (props.strict) pick(picked.value)
    }
}

watch(() => props.value, (newvalue, oldvalue) => {
    selectInput.value = props.value
    picked.value = props.value
    // emit('pick', props.value)
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