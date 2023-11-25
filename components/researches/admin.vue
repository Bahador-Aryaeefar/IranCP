r<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو پیشرفته">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-12rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead @click="me" class="text-white font-bold text-lg whitespace-nowrap">
                    <tr>
                        <th>شماره</th>
                        <th>عنوان</th>
                        <th>استان</th>
                        <th>شهر</th>
                        <th>موضوع</th>
                        <th>مقطع تحصیلی اثر</th>
                        <th>نوع اثر</th>
                        <th>همکاران</th>
                        <th>چکیده اثر</th>
                        <th>وضعیت</th>
                        <th>جزئیات</th>
                    </tr>
                </thead>

                <tbody class="text-black font-bold text-lg whitespace-nowrap text-center">
                    <tr v-for="item in researches">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ cities.searchProvince(item.province_id)?.title }}</td>
                        <td>{{ cities.searchCity(item.city_id)?.title }}</td>
                        <td>{{ categories[item.category_id - 1] }}</td>
                        <td>{{ grades[item.grade_id - 1] }}</td>
                        <td>{{ types[item.individual] }}</td>
                        <td>{{ item.partners }}</td>
                        <td class="max-w-[20rem] truncate">{{ item.description }}</td>
                        <td class="flex gap-6">
                            <div class="flex gap-1 items-center cursor-pointer"
                                @click="admin.changeResearch({ expert_confirm: 0 }, item.id)">
                                <UiRadioButton :isSelected="!item.expert_confirm"></UiRadioButton>
                                عدم تایید
                            </div>
                            <div class="flex gap-1 items-center cursor-pointer"
                                @click="admin.changeResearch({ expert_confirm: 1 }, item.id)">
                                <UiRadioButton :isSelected="item.expert_confirm"></UiRadioButton>
                                تایید
                            </div>
                        </td>
                        <td class="text-[#08B3B9]">
                            <NuxtLink :to="`/researches/${item.id}`">مشاهده</NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const admin = useAdmin()
admin.getResearches()
const researches = computed(() => admin.researches.value)
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

const me = () => {
    console.log(researches.value)
}

const cities = useCities()
if (cities.cities.value == null) {
    cities.getCities()
}
</script>

<style scoped>
th {
    border-radius: 100rem;
    background-color: #08B3B9;
    padding-inline: 1.5rem;
    padding-block: 0.5rem;
}

td {
    border-radius: 100rem;
    background-color: white;
    padding-inline: 1.5rem;
    padding-block: 0.5rem;
    box-shadow: 0 0.25rem 0.375rem -0.063rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1);
    max-width: 20rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>