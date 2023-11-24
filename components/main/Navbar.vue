<template>
    <nav
        class="h-[4rem] bg-[#57C5C6] flex items-center justify-between px-8 text-white text-xl fixed top-0 left-0 right-0 z-[2]">
        <div class="flex items-center gap-3">
            <NuxtLink v-if="auth.isLogin()" to="/profile" class="hover:text-[#BCF5F1]">{{ user.user.value ?
                (user.user.value.name + ' ' + ((user.user.value.last_name) ? user.user.value.last_name : '')) : '-' }}
            </NuxtLink>
            <NuxtLink v-else to="auth" class="cursor-pointer hover:text-[#BCF5F1]">ورود</NuxtLink>
            <div class="h-4 w-[0.125rem] bg-white rounded-full"></div>
            <div @click="auth.logout()" v-if="auth.isLogin()" class="cursor-pointer hover:text-[#BCF5F1]">خروج</div>
            <NuxtLink v-else to="auth?type=s" class="cursor-pointer hover:text-[#BCF5F1]">ثبت نام</NuxtLink>
        </div>

        <div>سامانه ایران و فرهنگ</div>
    </nav>
</template>

<script setup>
const auth = useAuth()
const user = useUser()
</script>

