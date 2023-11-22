<template>
    <div class="fixed left-0 top-0 w-[100vw] h-[100vh] z-[10] flex break-words overflow-auto px-10">
        <div class="w-[42rem] bg-white rounded-[1rem] py-6 px-10 m-auto">
            <h1 class="text-[2rem] font-bold leading-[3.5rem] text-[#57C5C6] text-center">
                {{ !isLogin ? "ثبت نام" : "ورود" }}
            </h1>
            <h2 class="text-[#5B4A42] leading-[1.75rem] text-center">به سامانه
                <NuxtLink to="/" class="text-[#57C5C6]">
                    ایران و فرهنگ
                </NuxtLink>
                خوش آمدید
            </h2>

            <div class="flex p-1 h-[2.5rem] bg-[#F7F7F9] rounded-full text-[#514037] w-[13.25rem] mx-auto mt-4">
                <div class="w-1/2 cursor-pointer flex items-center justify-center rounded-full"
                    :class="!isLogin ? 'text-[#57C5C6] bg-white' : ''" @click="isLogin = false">
                    ثبت نام
                </div>

                <div class="w-1/2 cursor-pointer flex items-center justify-center rounded-full"
                    :class="isLogin ? 'text-[#57C5C6] bg-white' : ''" @click="isLogin = true">
                    ورود
                </div>
            </div>

            <form class="mt-4 flex gap-4 flex-wrap justify-center" @submit.prevent="" autocomplete="on">
                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="email" v-model="email"
                        :class="(isConfirmed && !email) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="ایمیل">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="name" v-model="name"
                        :class="(isConfirmed && !name) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="نام">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
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

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="national" v-model="national"
                        :class="(isConfirmed && !national) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="کد ملی">
                </div>

                <UiSelect v-if="!isLogin" class="w-[18rem]" :value="gender" :error="isConfirmed && !gender"
                    @pick="((picked) => gender = picked)" placeHolder="جنسیت" :items="['مرد', 'زن']"></UiSelect>

                <UiSelect v-if="!isLogin" class="w-[18rem]" :value="province" :error="isConfirmed && !province"
                    @pick="((picked) => province = picked)" placeHolder="استان"
                    :items="cities.provinces.value.map(x => x.title)" :isInput="true" :strict="true"></UiSelect>

                <UiSelect v-if="!isLogin" class="w-[18rem]" :value="city" @pick="((picked) => city = picked)"
                    :error="isConfirmed && !city" placeHolder="شهر"
                    :items="(province ? cities.cities.value.filter(x => x.parent == provinceID.id).map(x => x.title) : [])"
                    :isInput="true" :strict="true"></UiSelect>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="degree" v-model="degree"
                        :class="(isConfirmed && !degree) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="مدرک تحصیلی">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="discipline" v-model="discipline"
                        :class="(isConfirmed && !discipline) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="رشته تحصیلی">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="experience" v-model="experience"
                        :class="(isConfirmed && !experience) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="سابقه کار">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="position" v-model="position"
                        :class="(isConfirmed && !position) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="سمت فعلی">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="positionHistory" v-model="positionHistory"
                        :class="(isConfirmed && !positionHistory) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="سابقه سمت فعلی">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="phone" v-model="mobile"
                        :class="(isConfirmed && !mobile) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="شماره تلفن">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="serviceDate" v-model="serviceDate"
                        :class="(isConfirmed && !serviceDate) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="شروع کار">
                </div>

                <div class="h-14 w-[18rem] relative">
                    <input id="password" v-model="password"
                        :class="(isConfirmed && !password) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        :type="isPass ? 'password' : 'text'" placeholder="رمز">
                    <img @click="isPass = !isPass"
                        class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                        :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                </div>

                <div v-if="!isLogin" class="h-14 w-[18rem] relative">
                    <input id="confirm" v-model="confirm"
                        :class="(isConfirmed && (!confirm || confirm != password)) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        :type="isPass ? 'password' : 'text'" placeholder="تکرار رمز">
                    <img @click="isPass = !isPass"
                        class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                        :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                </div>
            </form>

            <div @click="getAuth"
                class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl">
                <img class="w-6" :src="`/icons/auth/${isLogin ? 'login-a' : 'register'}.svg`" alt="login">
                {{ isLogin ? "ورود" : "ثبت نام" }}
            </div>

            <div v-if="isLogin" class="mt-4 text-center text-[#A69F9B] leading-[1.75rem] text-lg">
                حساب کاربری ندارید؟
                <span class="mx-2 text-[#57C5C6] cursor-pointer" @click="isLogin = false">ثبت نام</span>
            </div>

            <div v-else class="mt-4 text-center text-[#A69F9B] leading-[1.75rem] text-lg">
                حساب کاربری دارید؟
                <span class="mx-2 text-[#57C5C6] cursor-pointer" @click="isLogin = true">ورود</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRoute()
const isLogin = ref(router.query.type == 's' ? false : true)
const email = ref("")
const name = ref("")
const password = ref("")
const confirm = ref("")
const isPass = ref(true)
const isConfirmed = ref(false)

const degree = ref("")
const discipline = ref("")
const experience = ref("")
const position = ref("")
const positionHistory = ref("")
const serviceDate = ref("")
const national = ref("")

const cities = useCities()
cities.getCities()

const lastName = ref("")
const city = ref("")
const cityID = computed(() => city.value ? cities.cities.value.filter(x => x.title == city.value)[0] : null)
const province = ref("")
const provinceID = computed(() => province.value ? cities.provinces.value.filter(x => x.title == province.value)[0] : null)
const gender = ref("")

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
const mobile = ref("")
const code = ref("")

const auth = useAuth()
const getAuth = () => {
    if (isLogin.value) login()
    else registerTeacher()
}

const login = () => {
    isConfirmed.value = true
    let isValid = true

    if (!code.value) isValid = false
    if (!password.value) isValid = false

    if (!isValid) return

    const req = {
        personal_code: code.value,
        password: password.value
    }

    console.log(req)
    auth.login(req)
}

const register = () => {
    isConfirmed.value = true
    let isValid = true

    if (!email.value) isValid = false
    if (!name.value) isValid = false
    if (genderID.value == null) isValid = false
    if (!password.value) isValid = false
    if (password.value != confirm.value) isValid = false

    if (!isValid) return

    const req = {
        name: name.value,
        email: email.value,
        gender: genderID.value,
        password: password.value
    }

    console.log(req)
    auth.register(req)
}

const registerTeacher = () => {
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
    if (!password.value) isValid = false
    if (password.value != confirm.value) isValid = false

    if (!degree.value) isValid = false
    if (!discipline.value) isValid = false
    if (!experience.value) isValid = false
    if (!position.value) isValid = false
    if (!positionHistory.value) isValid = false
    if (!serviceDate.value) isValid = false
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
        password: password.value,

        degree_education: degree.value,
        discipline: discipline.value,
        work_experience: experience.value,
        current_position: position.value,
        history_current_position: positionHistory.value,
        service_start_date: serviceDate.value,
        national_code: national.value,
    }

    console.log(req)
    auth.registerTeacher(req)
}
</script>