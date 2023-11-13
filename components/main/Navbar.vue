<template>
    <nav class="h-[4rem] bg-[#57C5C6] flex items-center justify-between px-8 text-white text-xl fixed top-0 left-0 right-0 z-[2]">
        <div>سامانه ایران و فرهنگ</div>

        <div
            class="h-10 w-fit px-12 bg-white rounded-full text-xl flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
            {{user.user.value ? (user.user.value.name + ' ' + ((user.user.value.last_name) ? user.user.value.last_name : '')) : '-'}}
            <!-- <img class="absolute left-4 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg" alt="down"> -->
        </div>
    </nav>
</template>

<script setup>

const user = useUser()

</script>

