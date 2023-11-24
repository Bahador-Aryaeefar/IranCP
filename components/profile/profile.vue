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
                <ul class="text-xl text-black flex flex-wrap gap-10 gap-y-5 justify-center">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کد پرسنلی :
                        {{ user.personal_code }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کد ملی :
                        {{ user.national_code }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        استان :
                        {{ cities.searchProvince(user.province_id)?.title}}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        شهر :‌ 
                        {{ cities.searchCity(user.city_id)?.title }}
                    </li>
                </ul>
            </div>
        </div>

        <ProfileAuth class="mt-10 max-w-[50rem] shadow-md"></ProfileAuth>
    </div>
</template>

<script setup>

const score = ref(0)
const cities = useCities()

if (cities.cities.value == null) {
    cities.getCities()
}

const myState = ref(1)
const bookState = ref(1)
const { user } = useUser()

</script>
