<template>
    <div dir="rtl" class="font-Yekan">
        <MainNavbar></MainNavbar>
        <div class="h-16"></div>
        <div class="flex">
            <MainSidebar></MainSidebar>
            <div class="w-[20rem] shrink-0"></div>
            <div class="grow z-[1] overflow-hidden pb-20">
                <slot />
            </div>
        </div>

        <div v-if="toast.showError.value"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="toast.clearError">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6 pt-10 pb-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/fail.svg" alt="fail">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p v-for="(item, index) in toast.errors.value" :key="index"
                        class="text-center text-lg text-crs-black-1">
                        {{ item }}</p>
                </div>
                <button @click="toast.clearError"
                    class="h-12 px-8 rounded-[0.5rem] bg-[#57C5C6] text-white mt-10 mx-auto block">
                    Underestand
                </button>
            </div>
        </div>

        <div v-if="toast.showWarning.value && !toast.showError.value"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="toast.clearWarning">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6 pt-10 pb-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/orange-warning.svg" alt="fail">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p v-for="(item, index) in toast.warnings.value" :key="index"
                        class="text-center text-lg text-crs-black-1">
                        {{ item }}</p>
                </div>
                <button @click="toast.clearWarning"
                    class="h-12 px-8 rounded-[0.5rem] bg-[#57C5C6] text-white mt-10 mx-auto block">
                    Underestand
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'bg-[#F5F6FA]'
    }
})

const toast = useToast()
</script>

<style>
body {
    position: relative;
    min-height: 100vh;
    margin: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

@media screen and (max-width: 1000px) {
    html {
        font-size: 14px;
    }
}

@media screen and (max-width: 800px) {
    html {
        font-size: 12px;
    }
}

@media screen and (max-width: 400px) {
    html {
        font-size: 10px;
    }
}
</style>