<template>
    <div class="bg-white rounded-[1rem] px-10 m-auto overflow-hidden transition-all duration-[500ms]" :class="isOpen ? 'max-h-[50rem]' : 'max-h-16'">
        <div @click="isOpen = !isOpen" class="cursor-pointer flex h-16 items-center justify-between text-black font-bold text-2xl -mx-10 pr-10 pl-6">
            ویرایش
            <img class="transition-all duration-[500ms] w-8 mt-1"
                :class="(isOpen) ? 'rotate-180' : ''" src="/icons/ui/down.svg" alt="down">
        </div>

        <form class="flex gap-4 flex-wrap justify-center mt-4" @submit.prevent="" autocomplete="on">
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

            <UiSelect class="w-[18rem]" :value="gender" :error="isConfirmed && !gender"
                @pick="((picked) => gender = picked)" placeHolder="جنسیت" :items="['مرد', 'زن']"></UiSelect>

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
            class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl mb-6">
            <!-- <img class="w-6" :src="`/icons/auth/register.svg`" alt="login"> -->
            ویرایش
        </div>
    </div>
</template>

<script setup>
const { user } = useUser()
const isOpen = ref(false)
const router = useRoute()
const email = ref(user.value.email)
const name = ref(user.value.name)
const isConfirmed = ref(false)

const degree = ref(user.value.degree_education)
const discipline = ref(user.value.discipline)
const experience = ref(user.value.work_experience)
const position = ref(user.value.current_position)
const positionHistory = ref(user.value.history_current_position)
const address = ref(user.value.work_address)

const cities = useCities()
if (cities.cities.value == null) {
    cities.getCities()
}

const genders = ["مرد", "زن"]

const lastName = ref(user.value.last_name)
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

const auth = useAuth()

const edit = () => {
    isConfirmed.value = true
    let isValid = true

    if (!email.value) isValid = false
    if (!name.value) isValid = false
    if (!lastName.value) isValid = false
    if (genderID.value == null) isValid = false
    if (!mobile.value) isValid = false

    if (!degree.value) isValid = false
    if (!discipline.value) isValid = false
    if (!experience.value) isValid = false
    if (!position.value) isValid = false
    if (!positionHistory.value) isValid = false
    if (!address.value) isValid = false


    if (!isValid) return

    const req = {
        name: name.value,
        last_name: lastName.value,
        gender: genderID.value,
        mobile: mobile.value,
        email: email.value,

        degree_education: degree.value,
        discipline: discipline.value,
        work_experience: experience.value,
        current_position: position.value,
        history_current_position: positionHistory.value,
        work_address: address.value,
    }

    console.log(req)
    auth.update(req)
    isOpen.value = false
}
</script>