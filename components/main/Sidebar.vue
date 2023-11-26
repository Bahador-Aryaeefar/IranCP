<template>
    <div class="fixed right-0 left-0 top-0 pt-[4.5rem] pb-2 h-[100vh] w-full">
        <div class="bg-white h-full w-[20rem] flex flex-col justify-between">
            <div class="text-black text-lg p-6 pt-10">
                <NuxtLink to="/" class="flex rounded-full h-10 items-center cursor-pointer gap-1"
                    :class="route.path == '/' ? 'bg-[#F5F6FA] shadow-md' : ''">
                    <img class="h-8" src="/icons/main/reports.svg" alt="reports">
                    گزارش ها
                </NuxtLink>

                <hr class="border-[#08B3B9] my-2">

                <NuxtLink to="/researches" :class="route.path == '/researches' ? 'bg-[#F5F6FA] shadow-md' : ''"
                    class="flex rounded-full h-10 items-center cursor-pointer gap-2">
                    <img class="h-8  mr-2" src="/icons/main/edit.svg" alt="edit">
                    آثار
                </NuxtLink>

                <template v-if="[1, 2, 4].includes(user.role_id)">
                    <hr class="border-[#08B3B9] my-2">

                    <NuxtLink to="/users" :class="route.path == '/users' ? 'bg-[#F5F6FA] shadow-md' : ''"
                        class="flex rounded-full h-10 items-center cursor-pointer gap-1.5">
                        <img class="h-8 mr-2" src="/icons/main/profile.svg" alt="profile">
                        کاربران
                    </NuxtLink>
                </template>

                <template v-if="[1, 2, 4].includes(user.role_id)">
                    <hr class="border-[#08B3B9] my-2">

                    <NuxtLink to="/period" :class="route.path == '/period' ? 'bg-[#F5F6FA] shadow-md' : ''"
                        class="flex rounded-full h-10 items-center cursor-pointer gap-2">
                        <img class="h-7 mr-2.5" src="/icons/main/personal.svg" alt="personal">
                        دوره اقدام پژوهی
                    </NuxtLink>
                </template>
            </div>

            <div class="text-center text-lg text-[#00000065] pb-6">
                طراحی و توسعه توسط
                <br>
                شرکت سانا فناوری سورنا
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute()
const { user } = useUser()

</script>