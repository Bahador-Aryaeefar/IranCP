<template>
    <div class="max-w-[50rem] mx-auto">
        <div class="bg-white rounded-[2rem] py-6 px-10">
            <form class="flex gap-4 flex-wrap justify-center" @submit.prevent="" autocomplete="on">
                <div class="h-14 w-[18rem] relative">
                    <input id="email" v-model="email"
                        :class="(isConfirmed && !email) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="ایمیل">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="name" v-model="name"
                        :class="(isConfirmed && !name) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="نام">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="lastname" v-model="lastName"
                        :class="(isConfirmed && !lastName) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="نام خانوادگی">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="code" v-model="code"
                        :class="(isConfirmed && !code) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="کد پرسنلی">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="national" v-model="national"
                        :class="(isConfirmed && !national) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="کد ملی">
                </div>

                <UiSelect class="w-[18rem]" :value="gender" :error="isConfirmed && !gender"
                    @pick="((picked) => gender = picked)" placeHolder="جنسیت" :items="['مرد', 'زن']"></UiSelect>

                <UiSelect class="w-[18rem]" :value="province" :error="isConfirmed && !province"
                    @pick="((picked) => province = picked)" placeHolder="استان"
                    :items="cities.provinces.value.map(x => x.title)" :isInput="true" :strict="true"></UiSelect>

                <UiSelect class="w-[18rem]" :value="city" @pick="((picked) => city = picked)" :error="isConfirmed && !city"
                    placeHolder="شهر"
                    :items="(province ? cities.cities.value.filter(x => x.parent == provinceID?.id).map(x => x.title) : [])"
                    :isInput="true" :strict="true"></UiSelect>

                <div class="h-14 w-[18rem] relative">
                    <input id="degree" v-model="degree"
                        :class="(isConfirmed && !degree) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="مدرک تحصیلی">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="discipline" v-model="discipline"
                        :class="(isConfirmed && !discipline) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="رشته تحصیلی">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="experience" v-model="experience"
                        :class="(isConfirmed && !experience) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="سابقه کار">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="position" v-model="position"
                        :class="(isConfirmed && !position) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="سمت فعلی">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="positionHistory" v-model="positionHistory"
                        :class="(isConfirmed && !positionHistory) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="سابقه سمت فعلی">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="phone" v-model="mobile"
                        :class="(isConfirmed && !mobile) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="شماره تلفن">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="address" v-model="address"
                        :class="(isConfirmed && !address) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="محل کار">
                </div>
            </form>

            <div @click="edit"
                class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl">
                ثبت
            </div>
        </div>

        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">تغییر رمز</div>
            <div class="my-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
            <div class="bg-white rounded-[2rem] py-6 px-10">
                <form class="mt-4 flex gap-4 flex-wrap justify-center" @submit.prevent="" autocomplete="on">
                    <div class="h-14 w-[18rem] relative">
                        <input id="password" v-model="password"
                            :class="(passCon && !password) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                            :type="isPass ? 'password' : 'text'" placeholder="رمز">
                        <img @click="isPass = !isPass"
                            class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                            :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                    </div>

                    <div class="h-14 w-[18rem] relative">
                        <input id="confirm" v-model="confirm"
                            :class="(passCon && (!confirm || confirm != password)) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                            :type="isPass ? 'password' : 'text'" placeholder="تکرار رمز">
                        <img @click="isPass = !isPass"
                            class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                            :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                    </div>
                </form>

                <div @click="change"
                    class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl">
                    ثبت
                </div>
            </div>
        </div>
    </div>ّ
</template>

<script setup>
const genders = ['مرد', 'زن']
const { id } = useRoute().params
const { user } = useAdmin()
const email = ref(user.value.email)
const name = ref(user.value.name)
const password = ref("")
const confirm = ref("")
const isPass = ref(true)
const isConfirmed = ref(false)

const degree = ref(user.value.degree_education)
const discipline = ref(user.value.discipline)
const experience = ref(user.value.work_experience)
const position = ref(user.value.current_position)
const positionHistory = ref(user.value.history_current_position)
const address = ref(user.value.work_address)
const national = ref(user.value.national_code)

const cities = useCities()

const lastName = ref(user.value.last_name)
const city = ref(cities.searchCity(user.value.city_id)?.title)
const cityID = computed(() => city.value ? cities.cities.value.filter(x => x.title == city.value)[0] : null)
const province = ref(cities.searchProvince(user.value.province_id)?.title)
const provinceID = computed(() => province.value ? cities.provinces.value.filter(x => x.title == province.value)[0] : null)
const gender = ref(genders[user.value.gender])

const genderID = computed(() => {
    switch (gender.value) {
        case 'مرد':
            return 0
        case 'زن':
            return 1
        default:
            null
    }
})

const mobile = ref(user.value.mobile)
const code = ref(user.value.personal_code)

const edit = () => {
    isConfirmed.value = true
    let isValid = true

    if (!email.value) isValid = false
    if (!name.value) isValid = false
    if (!lastName.value) isValid = false
    if (genderID.value == null) isValid = false
    if (!provinceID.value) isValid = false
    if (!cityID.value) isValid = false
    if (!mobile.value) isValid = false
    if (!code.value) isValid = false

    if (!degree.value) isValid = false
    if (!discipline.value) isValid = false
    if (!experience.value) isValid = false
    if (!position.value) isValid = false
    if (!positionHistory.value) isValid = false
    if (!address.value) isValid = false
    if (!national.value) isValid = false


    if (!isValid) return

    const req = {
        name: name.value,
        last_name: lastName.value,
        city_id: cityID.value.id.toString(),
        province_id: provinceID.value.id.toString(),
        gender: genderID.value,
        mobile: mobile.value,
        personal_code: code.value,
        email: email.value,
        degree_education: degree.value,
        discipline: discipline.value,
        work_experience: experience.value,
        current_position: position.value,
        history_current_position: positionHistory.value,
        work_address: address.value,
        national_code: national.value,
    }

    console.log(req)
    isConfirmed.value = false
    useAdmin().changeUser(req, id)
}

const passCon = ref(false)
const change = () => {
    passCon.value = true
    let isValid = true

    if (!password.value) isValid = false
    if (password.value != confirm.value) isValid = false


    if (!isValid) return

    const req = {
        password: password.value
    }

    console.log(req)
    passCon.value = false
    useAdmin().changeUser(req, id)
}
</script>