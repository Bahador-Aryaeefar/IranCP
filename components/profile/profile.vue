<template>
    <div>

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
                <ul class="bg-white rounded-[2rem] py-4 px-8 mt-4 text-xl space-y-3">
                    <li class="flex justify-between">
                        کد ملی :
                        <span>{{ user.national_code }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        کد پرسنلی :‌
                        <span>{{ user.personal_code }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        ایمیل :‌
                        <span>{{ user.email }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        استان :
                        <span>{{ cities.searchProvince(user.province_id)?.title }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        شهر :‌
                        <span>{{ cities.searchCity(user.city_id)?.title }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        جنسیت :‌
                        <span>{{ genders[user.gender] }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        شماره تماس :‌
                        <span>{{ user.mobile }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        مدرک تحصیلی :‌
                        <span>{{ user.degree_education }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        رشته تحصیلی :‌
                        <span>{{ user.discipline }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        سابقه کار :
                        <span>{{ user.work_experience }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        سمت فعلی :
                        <span>{{ user.current_position }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        سابقه سمت فعلی :
                        <span>{{ user.history_current_position }}</span>
                    </li>
                    <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                    <li class="flex justify-between">
                        محل کار :
                        <span>{{ user.work_address }}</span>
                    </li>
                </ul>
            </div>
        </div>


        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">ویرایش</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
            <ProfileAuth class="mt-6 max-w-[50rem] shadow-md"></ProfileAuth>
        </div>
    </div>
</template>

<script setup>

const score = ref(0)
const cities = useCities()
const genders = ["مرد", "زن"]

if (cities.cities.value == null) {
    cities.getCities()
}

const myState = ref(1)
const bookState = ref(1)
const { user } = useUser()

</script>
