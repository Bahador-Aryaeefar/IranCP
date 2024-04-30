<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input  v-model="search"
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو عنوان و کد پرسنلی">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-12rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead class="text-white font-bold text-lg whitespace-nowrap">
                    <tr>
                        <th>شماره</th>
                        <th>عنوان</th>
                        <th>کد پرسنلی</th>
                        <th>استان</th>
                        <th>شهر</th>
                        <th>موضوع</th>
                        <!-- <th>مرحله</th> -->
                        <th>وضعیت</th>
                        <th>جزئیات</th>
                        <th>حذف</th>
                    </tr>
                </thead>

                <tbody class="text-black font-bold text-lg whitespace-nowrap text-center">
                    <tr v-for="item,index in researches?.filter(x => x.name.includes(search) || x.user.personal_code.includes(search))">
                        <td>{{ index+1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.user.personal_code }}</td>
                        <td>{{ cities.searchProvince(item.province_id)?.title }}</td>
                        <td>{{ cities.searchCity(item.city_id)?.title }}</td>
                        <td>{{ categories[item.category_id - 1] }}</td>
                        <!-- <td>{{ levels[item.level] }}</td> -->
                        <td>
                            <div class="flex justify-between px-6 gap-6 ">
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeResearch({ expert_confirm: 0 }, item.id); admin.levelUp({level: 0}, item.id);">
                                    <UiRadioButton :isSelected="!item.expert_confirm"></UiRadioButton>
                                    عدم تایید
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeResearch({ expert_confirm: 1 }, item.id); ((item.level == 0) ? admin.levelUp({level: 1}, item.id) : '');">
                                    <UiRadioButton :isSelected="item.expert_confirm"></UiRadioButton>
                                    تایید
                                </div>
                            </div>
                        </td>
                        <td class="text-[#08B3B9] link">
                            <NuxtLink class="block py-2" :to="`/researches/${item.id}`">مشاهده</NuxtLink>
                        </td>
                        <td class="text-[#EE0035] link">
                            <span class="cursor-pointer block py-2" @click="deleteId = item.id; isDelete = true">حذف</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="isDelete"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="isDelete = false">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/orange-warning.svg" alt="fail">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p class="text-center text-lg text-crs-black-1">
                        آیا از حذف اثر اطمینان دارید؟
                    </p>
                </div>
                <div class="flex justify-center gap-4">
                    <button @click="admin.deleteResearch(deleteId); isDelete = false"
                        class="h-12 px-8 rounded-[0.5rem] bg-[#EE0035] text-white mt-10 block">
                        بله
                    </button>
                    <button @click="isDelete = false"
                        class="h-12 px-8 rounded-[0.5rem] bg-[#57C5C6] text-white mt-10 block">
                        خیر
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const levels = [
    'کارشناسی شهرستان',
    'داوری شهرستان',
    'داوری استان'
]
const search = ref("")
const isDelete = ref(false)
const deleteId = ref(null)
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

.link {
    padding-inline: 0rem;
    padding-block: 0rem;
}
</style>