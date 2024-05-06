<template>
    <div dir="rtl" class="font-Yekan">
        <MainNavbar></MainNavbar>
        <div class="h-16"></div>
        <div class="flex">
            <MainSidebar></MainSidebar>
            <div class="w-[20rem] shrink-0 mobile:hidden"></div>
            <div class="grow z-[1] overflow-hidden pb-20">
                <slot />
            </div>
        </div>

        <div v-if="isLogo"
            class="overflow-hidden z-[10] fixed px-4 py-6 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] flex items-center justify-center break-words"
            @click="isLogo = false">
            <div class="w-[80rem] mobile:w-[30rem] bg-white rounded-[2rem] overflow-auto max-h-[98vh]" @click.stop="">
                <img class="w-full mobile:hidden" src="/logo.jpg" alt="logo">
                <img class="w-full hidden mobile:block" src="/logoMobile.jpg" alt="logo">
            </div>
        </div>

        <div v-if="toast.load.value"
            class="fixed left-0 top-0 w-full h-full bg-[#00000040] backdrop-blur-[0.125rem] z-[199] flex items-center justify-center break-words">
            <div class="w-[50rem] bg-white rounded-[1rem] mx-4">
                <div
                    class="w-full h-[21.5rem] rounded-t-[1rem] flex items-center justify-end relative turn overflow-hidden">
                    <div class="px-4 pt-4 pb-2 rounded-l-[2rem] turn z-[3]">
                        <h1 class="font-bold text-[2.6rem] text-black leading-[2rem] relative">سامانه ایران و فرهنگ</h1>
                    </div>
                    <div class="w-full h-full absolute left-0 top-0 bg-right z-[1] bg-cover mobile:opacity-[0.6]"
                        style="background-image: url('/images/projects/books.png');"></div>
                </div>
                <div class="h-[3.75rem] px-6 flex items-center gap-4 text-[#81756F]">
                    <img class="w-8 h-8 rotating" src="/icons/load.png" alt="load">
                    <div class="text-black text-xl">
                        در حال بارگیری نتایج
                    </div>
                </div>
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
                    تایید
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
                    تایید
                </button>
            </div>
        </div>

        <div v-if="toast.showSuccess.value && !toast.showWarning.value && !toast.showError.value"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="toast.clearSuccess">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6 pt-10 pb-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/success.svg" alt="success">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p v-for="(item, index) in toast.success.value" :key="index"
                        class="text-center text-lg text-crs-black-1">
                        {{ item }}</p>
                </div>
                <button @click="toast.clearSuccess"
                    class="h-12 px-8 rounded-[0.5rem] bg-[#57C5C6] text-white mt-10 mx-auto block">
                    تایید
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
const { isLogo } = useToast()
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

<style scoped>
.rotating {
    animation: spin 1s linear infinite;
}



@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}
</style>