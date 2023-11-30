<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input id="search" v-model="search"
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو نام">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-12rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead class="text-white font-bold text-lg whitespace-nowrap">
                    <tr>
                        <th>شماره</th>
                        <th>ایمیل</th>
                        <th>نام</th>
                        <th>نام خانوادگی</th>
                        <th>کد پرسنلی</th>
                        <th>کد ملی</th>
                        <th>جنسیت</th>
                        <th>استان</th>
                        <th>شهر</th>
                        <th>مدرک تحصیلی</th>
                        <th>رشته تحصیلی</th>
                        <th>سابقه کار</th>
                        <th>سمت فعلی</th>
                        <th>سابقه سمت فعلی</th>
                        <th>شماره تلفن</th>
                        <th>آدرس محل کار</th>
                        <th>وضعیت</th>
                        <th>جزئیات</th>
                    </tr>
                </thead>

                <tbody class="text-black font-bold text-lg whitespace-nowrap text-center">
                    <tr v-for="item in users?.filter(x => (x.name + ' ' + ((x.last_name) ? x.last_name : '')).includes(search))">
                        <td>{{ item.id }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.last_name }}</td>
                        <td>{{ item.personal_code }}</td>
                        <td>{{ item.national_code }}</td>
                        <td>{{ genders[item.gender] }}</td>
                        <td>{{ cities.searchProvince(item.province_id)?.title }}</td>
                        <td>{{ cities.searchCity(item.city_id)?.title }}</td>
                        <td>{{ item.degree_education }}</td>
                        <td>{{ item.discipline }}</td>
                        <td>{{ item.work_experience }}</td>
                        <td>{{ item.current_position }}</td>
                        <td>{{ item.history_current_position }}</td>
                        <td>{{ item.mobile }}</td>
                        <td>{{ item.work_address }}</td>
                        <td class="flex gap-6">
                            <div class="flex gap-1 items-center cursor-pointer" @click="expert.changeUser({status: 0},item.id)">
                                <UiRadioButton :isSelected="item.status == '0'"></UiRadioButton>
                                عدم تایید
                            </div>
                            <div class="flex gap-1 items-center cursor-pointer" @click="expert.changeUser({status: 1},item.id)">
                                <UiRadioButton :isSelected="item.status == '1'"></UiRadioButton>
                                تایید
                            </div>
                        </td>
                        <td class="text-[#08B3B9]">
                            <NuxtLink :to="`/users/${item.id}`">مشاهده</NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const search = ref("")
const expert = useExpert()
expert.getUsers()
const genders = ['مرد', 'زن']
const users = computed(() => expert.users.value)
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