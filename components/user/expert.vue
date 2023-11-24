<template>
    <div v-if="user">
        <div class="mt-10 flex items-end justify-center max-w-[35rem] mx-auto items-center">
            <div class="text-center text-black font-bold text-2xl shrink-0">
                <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                    style="background-image: url('/images/profile.png'); background-size: 70%;"></div>
                {{ (user.name + ' ' + ((user.last_name) ? user.last_name : '')) }}
            </div>
        </div>

        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">درباره من</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>

            <div class="mt-6">
                <ul class="text-xl text-black flex flex-wrap gap-10 gap-y-5 justify-center">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        ایمیل :‌
                        {{ user.email }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        کد پرسنلی :
                        {{ user.personal_code }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        کد ملی :
                        {{ user.national_code }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        استان :
                        {{ cities.searchProvince(user.province_id)?.title }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        شهر :‌
                        {{ cities.searchCity(user.city_id)?.title }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        جنسیت :‌
                        {{ genders[user.gender] }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        مدرک تحصیلی :‌
                        {{ user.degree_education }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        رشته تحصیلی :‌
                        {{ user.discipline }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        سابقه کار :‌
                        {{ user.work_experience }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        سمت فعلی :‌
                        {{ user.current_position }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        سابقه سمت فعلی :‌
                        {{ user.history_current_position }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2.5 shrink-0"></div>
                        شماره تلفن :‌
                        {{ user.mobile }}
                    </li>
                </ul>
            </div>
        </div>


        <div class="text-black font-bold text-2xl text-center mt-20">وضعیت</div>
        <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0] max-w-[50rem] mx-auto"></div>
        <div class="flex bg-white rounded-full gap-6 w-fit mx-auto py-4 px-10 mt-6 text-2xl">
            <div class="flex gap-2 items-center cursor-pointer" @click="expert.changeUser({ status: 0 }, user.id)">
                <UiRadioButton :isSelected="!user.status"></UiRadioButton>
                عدم تایید
            </div>
            <div class="flex gap-2 items-center cursor-pointer" @click="expert.changeUser({ status: 1 }, user.id)">
                <UiRadioButton :isSelected="user.status"></UiRadioButton>
                تایید
            </div>
        </div>

    </div>
</template>

<script setup>
const {id} = useRoute().params
const genders = ["مرد", "زن"]
const cities = useCities()

if (cities.cities.value == null) {
    cities.getCities()
}
const { user } = useExpert()
const expert = useExpert()
useExpert().getUser(id)
</script>
