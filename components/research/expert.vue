<template>
    <div v-if="research" class="max-w-[50rem] mx-auto">
        <div class="mt-10 flex items-end justify-center max-w-[35rem] mx-auto items-center">
            <div class="text-center text-black font-bold text-2xl shrink-0">
                <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                    style="background-image: url('/images/profile.png'); background-size: 70%;"></div>
                {{ research.name }}
            </div>
        </div>

        <img class="mt-8 rounded-[2rem] shadow-md mx-auto w-full max-w-[20rem]"
            :src="`https://api.37pajoohesh.ir/images/${research.file_image}`" alt="book">
        <h1 class="text-center text-[2rem] text-bold mt-2">
            {{ research.name }}
        </h1>

        <ul class="bg-white rounded-[2rem] py-4 px-8 mt-8 shadow-md text-xl space-y-3">
            <li class="flex justify-between">
                شماره
                <span>{{ research.id }}</span>
            </li>
            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
            <li class="flex justify-between">
                عنوان
                <span>{{ research.name }}</span>
            </li>
            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
            <li class="flex justify-between">
                موضوع
                <span>{{ categories[research.category_id - 1] }}</span>
            </li>
            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
            <li class="flex justify-between">
                مقطع تحصیلی اثر
                <span>{{ grades[research.grade_id - 1] }}</span>
            </li>
            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
            <li class="flex justify-between">
                نوع اثر
                <span>{{ types[research.individual] }}</span>
            </li>
            <div v-if="research.individual" class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
            <li v-if="research.individual" class="flex justify-between">
                همکاران
                <span>{{ research.partners }}</span>
            </li>
        </ul>

        <div class="bg-white rounded-[2rem] py-4 px-8 mt-4 shadow-md">
            <div class="flex items-center gap-1 text-[#808080] font-bold text-[1.625rem]">
                <img class="h-10" src="/icons/books/pen.svg" alt="pen">
                چکیده
            </div>

            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2"></div>

            <p class="text-justify text-xl text-[#3E3E3E] leading-[1.9rem] mt-3 pb-2">
                {{ research.description }}
            </p>
        </div>

        <a :href="`https://api.37pajoohesh.ir/images/${research.file}`" target="_blank"
            class="mt-8 rounded-full h-16 bg-[#57C5C6] flex items-center justify-between px-6">
            <div class="text-white font-bold text-2xl">
                دانلود فایل
                <span class="font-normal text-xl">

                </span>
            </div>

            <div class="flex items-center gap-2 text-white text-lg">
                <span dir="ltr"></span>
                <img class="h-8" src="/icons/book/download.svg" alt="download">
            </div>
        </a>

        <div class="text-black font-bold text-2xl text-center mt-20">وضعیت</div>
        <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0] max-w-[50rem] mx-auto"></div>
        <div class="flex bg-white rounded-full gap-6 w-fit mx-auto py-4 px-10 mt-6 text-2xl">
            <div class="flex gap-2 items-center cursor-pointer" @click="expert.changeResearch({ expert_confirm: 0 }, research.id)">
                <UiRadioButton :isSelected="!research.expert_confirm"></UiRadioButton>
                عدم تایید
            </div>
            <div class="flex gap-2 items-center cursor-pointer" @click="expert.changeResearch({ expert_confirm: 1 }, research.id)">
                <UiRadioButton :isSelected="research.expert_confirm"></UiRadioButton>
                تایید
            </div>
        </div>

    </div>
</template>

<script setup>

const { id } = useRoute().params
const cities = useCities()
if (cities.cities.value == null) {
    cities.getCities()
}
const { research } = useExpert()
const expert = useExpert()
useExpert().getResearch(id)
const categories = [
    'آموزش و یادگیری',
    'بهداشت و محیط زیست',
    'تربیت بدنی و سلامت',
    'دینی و اجتماعی',
    'روانشناسی',
    'سایر',
    'علوم پایه',
    'فرهنگی و هنری',
    'فناوری و اطلاعات',
    'فنی حرفه ای و کاردانش',
    'کودکان استثنایی',
    'مدیریت',
]
const grades = [
    'ابتدایی',
    'متوسطه اول',
    'متوسطه دوم',
    'کاردانش و فنی حرفه ای',
    'اداری',
    'دانشجو معلم'
]
const types = [
    'انفرادی',
    'گروهی'
]
</script>