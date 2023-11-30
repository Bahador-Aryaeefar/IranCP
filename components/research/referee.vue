<template>
    <div v-if="refer" class="px-4">
        <div class="max-w-[50rem] mx-auto w-full">
            <div class="mt-10 flex items-end justify-center max-w-[35rem] mx-auto items-center">
                <div class="text-center text-black font-bold text-2xl shrink-0">
                    <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                        style="background-image: url('/images/profile.png'); background-size: 70%;"></div>
                    {{ (research?.user?.name + ' ' + ((research?.user?.last_name) ? research?.user?.last_name : '')) }}
                </div>
            </div>

            <div v-if="!research.file_image" class="w-[20rem] h-[20rem] border-[0.2em] rounded-[2rem] mx-auto mt-8"></div>
            <img v-else class="mt-8 rounded-[2rem] shadow-md mx-auto w-full max-w-[20rem] border-[0.2em]"
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
                    استان
                    <span>{{ cities.searchProvince(research.province_id)?.title }}</span>
                </li>
                <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                <li class="flex justify-between">
                    شهر
                    <span>{{ cities.searchCity(research.city_id)?.title }}</span>
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

            <a v-if="research.file" :href="`https://api.37pajoohesh.ir/images/${research.file}`" target="_blank"
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
        </div>

        <div class="overflow-auto">
            <div class=" mx-auto w-fit">
                <div class="text-black font-bold text-2xl text-center mt-20">داوری</div>
                <div class="mt-4 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
                <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                    <thead class="text-white font-bold text-lg">
                        <tr>
                            <th>شماره</th>
                            <th>ملاک</th>
                            <th>گزینه ها</th>
                            <th>ضریب</th>
                            <th>امتیاز</th>
                        </tr>
                    </thead>

                    <tbody class="text-black font-bold text-lg text-center">
                        <tr v-for="item in questions">
                            <td>{{ item.id }}</td>
                            <td class="min-w-[10rem]">{{ item.title }}</td>
                            <td class="border-[0.125rem]"
                                :class="isConfirmed && item.score == null ? 'border-[#EE0035]' : 'border-white'">
                                <UiScore :state="item.score" @pick="(picked) => item.score = picked"></UiScore>
                            </td>
                            <td>{{ item.factor }}</td>
                            <td>{{ item.factor * item.score }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="questions"
            class="bg-white shadow-md rounded-full flex justify-between items-center text-2xl py-3 px-10 font-bold mt-10 max-w-[50rem] mx-auto">
            مجموع :
            <span> {{ questions.map(x => x.score * x.factor).reduce((a, b) => a + b) }}</span>
        </div>

        <div class="max-w-[50rem] mx-auto mt-20">
            <div class="text-2xl font-bold text-center">
                توضیحات داوری
            </div>

            <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-4"></div>

            <textarea id="description" v-model="description"
                :class="(isConfirmed && !description) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                class="h-[15rem] min-h-20 w-full bg-white rounded-[3rem] focus:outline-none px-8 py-3 mt-4 placeholder:text-[#707070] text-[#000000] text-xl text-center border-[0.125rem] focus:border-[#57C5C6] shadow-md"
                placeholder="توضیحات را وارد کنید"></textarea>
        </div>

        <button
            class="block h-20 rounded-[1.25rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full max-w-[50rem] mx-auto mt-8"
            @click="confirm()">ثبت</button>

        <div class="max-w-[50rem] mx-auto mt-20">
            <div class="text-2xl font-bold text-center">
                مکالمه با مجری
            </div>

            <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-4"></div>

            <textarea id="opinion" v-model="opinion"
                :class="(isOpinion && !opinion) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                class="h-[10rem] min-h-20 w-full bg-white rounded-[3rem] focus:outline-none px-8 py-3 mt-4 placeholder:text-[#707070] text-[#000000] text-xl text-center border-[0.125rem] focus:border-[#57C5C6] shadow-md"
                placeholder="پیام خود را وارد کنید"></textarea>

            <button
                class="block h-10 rounded-full bg-[#21C2C0] text-white border-[0.125rem] border-[#21C2C0] text-xl font-bold px-10 mx-auto mt-2"
                @click="setOpinion()">ثبت پیام</button>
        </div>

        <ul class="max-w-[50rem] mx-auto mt-10 break-words space-y-4">
            <li v-for="item in refer.opinions" class="rounded-[2rem] bg-white px-6 py-4 text-center">
                <div class="text-2xl font-bold">
                    {{ refer.referee_id == item.user_id ? 'داور' : 'مجری' }}
                </div>
                <div class="rounded-full h-[0.125rem] bg-[#21C2C0] mt-3"></div>
                <div class="text-xl mt-3">
                    {{ item.description }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const cities = useCities()
if (cities.cities.value == null) {
    cities.getCities()
}
const opinion = ref("")
const referee = useReferee()
const isConfirmed = ref(false)
const refer = computed(() => referee.research.value ? referee.research.value[0] : null)
const research = computed(() => (referee?.research?.value && referee?.research?.value[0]) ? referee?.research?.value[0]?.research : null)
referee.getResearch(id)
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

const description = ref(refer?.value?.description)

const questions = ref(referee.questions.value ? referee.questions.value.map(x => {
    let temp = refer.value?.questions.filter(y => x.id == y.pivot.question_id)[0]
    if (temp) x.score = temp.pivot.score
    else x.score = OnErrorEventHandlerNonNull
    return x
}) : null)

watch(() => referee.questions.value, (newV, oldV) => {
    if (newV == null) return
    questions.value = newV ? newV.map(x => {
        let temp = refer.value?.questions.filter(y => x.id == y.pivot.question_id)[0]
        if (temp) x.score = temp.pivot.score
        else x.score = null
        return x
    }) : null
    description.value = refer?.value?.description
})

const confirm = () => {
    if (!questions.value) return
    isConfirmed.value = true
    let isValid = true

    for (let item of questions.value) if (item.score == null) isValid = false
    if (!description.value) isValid = false

    if (!isValid) return

    const req = {
        questions: [],
        description: description.value
    }

    for (let item of questions.value) req.questions.push({
        question_id: item.id,
        score: item.score
    })

    console.log(req)
    referee.setScore(req, refer.value.id, id)
    isConfirmed.value = false
}

const isOpinion = ref(false)
const setOpinion = () => {
    if (!refer.value) return
    isOpinion.value = true
    if (!opinion.value) return

    isOpinion.value = false
    const req = {
        description: opinion.value
    }
    referee.setOpinion(req, refer.value.id, id)
    opinion.value = ""
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
    border-radius: 2rem;
    background-color: white;
    padding-inline: 1.5rem;
    padding-block: 0.5rem;
    box-shadow: 0 0.25rem 0.375rem -0.063rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1);
}
</style>