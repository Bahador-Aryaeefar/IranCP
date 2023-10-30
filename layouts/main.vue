<template>
    <div dir="rtl" class="font-Yekan pb-[30rem] max-w-[100rem] mx-auto">
        <MainNavbar></MainNavbar>
        <div class="h-16"></div>
        <div class="flex">
            <MainSidebar></MainSidebar>
            <div class="w-[20rem] shrink-0"></div>
            <div class="grow z-[1]">
                <slot />
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