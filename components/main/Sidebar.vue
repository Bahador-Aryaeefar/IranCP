<template>
    <div class="fixed right-0 left-0 top-0 pt-[4.5rem] pb-2 h-[100vh] w-full max-w-[100rem] mx-auto">
        <div class="bg-white h-full w-[20rem] flex flex-col justify-between">
            <div class="text-black text-lg p-6 pt-10">
                <a href="/" class="flex rounded-full h-10 items-center cursor-pointer gap-1" :class="route.path == '/' ? 'bg-[#F5F6FA] shadow-md' : ''">
                    <img class="h-8" src="/icons/main/reports.svg" alt="reports">
                    گزارش ها
                </a>

                <hr class="border-[#08B3B9] my-2">
                
                <!-- <a href="/personal" :class="route.path == '/personal' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer">
                    <img class="h-6 mt-1 mx-3.5" src="/icons/main/personal.svg" alt="personal">
                    پرسنل اجرایی
                </a>

                <hr class="border-[#08B3B9] my-2">
                
                <a href="/projects" :class="route.path == '/projects' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer gap-2 pr-2.5">
                    <img class="h-8 mt-1" src="/icons/main/projects.svg" alt="projects">
                    اقدام پژوهی
                </a>

                <hr class="border-[#08B3B9] my-2">
                
                <a href="/conference" :class="route.path == '/conference' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer gap-2.5">
                    <img class="h-8 mt-1 mr-3" src="/icons/main/gathering.svg" alt="gathering">
                    همایش
                </a>

                <hr class="border-[#08B3B9] my-2">
                
                <a href="/tops" :class="route.path == '/tops' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer gap-3">
                    <img class="h-6 mt-1 mr-3" src="/icons/main/tops.svg" alt="tops">
                    تجربه های برتر
                </a>

                <hr class="border-[#08B3B9] my-2"> -->
                
                <a href="/works" :class="route.path == '/works' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer gap-2">
                    <img class="h-8  mr-2" src="/icons/main/edit.svg" alt="edit">
                    آثار
                </a>

                <hr class="border-[#08B3B9] my-2">
                
                <!-- <a href="/users" :class="route.path == '/users' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer gap-1.5">
                    <img class="h-8 mr-2" src="/icons/main/profile.svg" alt="profile">
                    کاربران
                </a>

                <hr class="border-[#08B3B9] my-2">
                
                <a href="/settings" :class="route.path == '/settings' ? 'bg-[#F5F6FA] shadow-md' : ''" class="flex rounded-full h-10 items-center cursor-pointer gap-2">
                    <img class="h-7 mr-2" src="/icons/main/settings.svg" alt="settings">
                    تنظیمات
                </a>

                <hr class="border-[#08B3B9] my-2"> -->
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

</script>