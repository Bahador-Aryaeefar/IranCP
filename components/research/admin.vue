<template>
    <div v-if="research" class="px-4">
        <div class="max-w-[50rem] mx-auto w-full">
            <div class="mt-10 flex items-end justify-center max-w-[35rem] mx-auto items-center">
                <div class="text-center text-black font-bold text-2xl shrink-0">
                    <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                        style="background-image: url('/images/profile.png'); background-size: 70%;"></div>
                    {{ (research?.user?.name + ' ' + ((research?.user?.last_name) ? research?.user?.last_name : '')) }}
                </div>
            </div>

            <div v-if="!research.file_image" class="w-[20rem] h-[20rem] border-[0.2em] rounded-[2rem] mx-auto mt-8">
            </div>
            <img v-else class="mt-8 rounded-[2rem] shadow-md mx-auto w-full max-w-[20rem] border-[0.2em]"
                :src="`https://37pajoohesh.ir/images/research/${research.file_image}`" alt="book">
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
                <!-- <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                <li class="flex justify-between">
                    مرحله
                    <span>{{ levels[research.level] }}</span>
                </li> -->
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

            <a v-if="research.file" :href="`https://37pajoohesh.ir/files/${research.file}`" target="_blank"
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

        <div class="px-20 max-w-[100rem] mx-auto">
            <div class="overflow-auto">
                <div class="mx-auto w-full">
                    <div class="text-black font-bold text-2xl text-center mt-20">داوری شهرستان</div>
                    <div class="mt-4 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
                    <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                        <thead class="text-white font-bold text-lg">
                            <tr>
                                <th>نقش</th>
                                <th>نام</th>
                                <th>کد پرسنلی</th>
                                <th>شماره تماس</th>
                                <th>جزئیات</th>
                                <th>داوری</th>
                                <th>حذف</th>
                            </tr>
                        </thead>

                        <tbody class="text-black font-bold text-lg text-center whitespace-nowrap">
                            <tr v-for="(item, index) in research.referees.filter(x => x.pivot.type == 0)">
                                <td>
                                    داور
                                    {{ numbers[index] }}
                                </td>
                                <td>{{ (item.name + ' ' + ((item.last_name) ? item.last_name : '')) }}</td>
                                <td>{{ item.personal_code }}</td>
                                <td>{{ item.mobile }}</td>
                                <td class="link">
                                    <span @click="refe = item; isRefe = true"
                                        class="cursor-pointer text-[#08B3B9] block py-2">مشاهده</span>
                                </td>
                                <td class="link">
                                    <span v-if="referIndex == item.id"
                                        @click="useAdmin().referee.value = null; referIndex = -1;"
                                        class="cursor-pointer text-[#EE0035] block py-2">بستن</span>
                                    <span v-else @click="admin.getReferee(research.id, item.id); referIndex = item.id;"
                                        class="cursor-pointer text-[#08B3B9] block py-2">مشاهده</span>
                                </td>
                                <td class="link">
                                    <span @click="deleteId = item.id; isDelete = true"
                                        class="cursor-pointer text-[#EE0035] block py-2">حذف</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="cursor-pointer block h-12 rounded-[1rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full mt-4 pb-1 flex items-center justify-center"
                        @click="isOpen = true; type = 0">+
                    </div>
                </div>
            </div>

            <div class="overflow-auto mt-10">
                <div class="mx-auto w-full">
                    <div class="text-black font-bold text-2xl text-center mt-20">داوری استان</div>
                    <div class="mt-4 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
                    <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                        <thead class="text-white font-bold text-lg">
                            <tr>
                                <th>نقش</th>
                                <th>نام</th>
                                <th>کد پرسنلی</th>
                                <th>شماره تماس</th>
                                <th>جزئیات</th>
                                <th>داوری</th>
                                <th>حذف</th>
                            </tr>
                        </thead>

                        <tbody class="text-black font-bold text-lg text-center whitespace-nowrap">
                            <tr v-for="(item, index) in research.referees.filter(x => x.pivot.type == 1)">
                                <td>
                                    داور
                                    {{ numbers[index] }}
                                </td>
                                <td>{{ (item.name + ' ' + ((item.last_name) ? item.last_name : '')) }}</td>
                                <td>{{ item.personal_code }}</td>
                                <td>{{ item.mobile }}</td>
                                <td class="link">
                                    <span @click="refe = item; isRefe = true"
                                        class="cursor-pointer text-[#08B3B9] block py-2">مشاهده</span>
                                </td>
                                <td class="link">
                                    <span v-if="referIndex == item.id"
                                        @click="useAdmin().referee.value = null; referIndex = -1;"
                                        class="cursor-pointer text-[#EE0035] block py-2">بستن</span>
                                    <span v-else @click="admin.getReferee(research.id, item.id); referIndex = item.id;"
                                        class="cursor-pointer text-[#08B3B9] block py-2">مشاهده</span>
                                </td>
                                <td class="link">
                                    <span @click="deleteId = item.id; isDelete = true"
                                        class="cursor-pointer text-[#EE0035] block py-2">حذف</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="cursor-pointer block h-12 rounded-[1rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full mt-4 pb-1 flex items-center justify-center"
                        @click="isOpen = true; type = 1">+
                    </div>
                </div>
            </div>
        </div>
        
        <template v-if="refer">
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
                            <tr v-for="item, index in questions">
                                <td>{{ index + 1 }}</td>
                                <td class="min-w-[10rem]">{{ item.title }}</td>
                                <td class="border-[0.125rem]"
                                    :class="isConfirmed && item.score == null ? 'border-[#EE0035]' : 'border-white'">
                                    <UiScore :disabled="true" :state="item.score"></UiScore>
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
                <span> {{ questions && questions[0] ? questions?.map(x => x.score * x.factor)?.reduce((a, b) => a + b) :
                    0 }}</span>
            </div>

            <div class="max-w-[50rem] mx-auto mt-20">
                <div class="text-2xl font-bold text-center">
                    توضیحات داوری
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-4"></div>

                <div
                    class="border-[#E1E2E4] w-full bg-white rounded-[3rem] px-8 py-3 mt-4 text-[#000000] text-xl text-center border-[0.125rem] shadow-md">
                    {{ description ? description : "-" }}
                </div>
            </div>

            <div class="max-w-[50rem] mx-auto mt-20">
                <div class="text-2xl font-bold text-center">
                    مکالمه با داور
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
        </template>

        <div v-if="isOpen"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[100] flex items-center justify-center"
            @click="isOpen = false">
            <div @click.stop="" class="bg-white rounded-[1rem] py-6 px-10 mt-10">
                <h1 class="text-[2rem] font-bold leading-[3.5rem] text-[#57C5C6] text-center">
                    داور جدید
                </h1>

                <div class="h-14 w-[30rem] relative mt-4">
                    <input v-model="search"
                        :class="(isConfirmed && !search) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                        type="text" placeholder="جستجو">
                </div>

                <ul class="mt-4 overflow-auto max-h-[20rem] FirefoxScroll">
                    <template
                        v-for="(item, index) in users.filter(x => x?.role_id == 3 && (x.name + ' ' + ((x.last_name) ? x.last_name : '')).includes(search))">
                        <div v-if="index" class="h-[0.125rem] rounded-full bg-[#08B3B9] my-2"></div>
                        <li @click="addR(item.id, 0)"
                            class="flex items-center justify-between h-16 text-xl cursor-pointer hover:bg-[#A6EFF2] rounded-[1rem] px-4">
                            <span>{{ (item.name + ' ' + ((item.last_name) ? item.last_name : '')) }}</span>
                            <span>{{ item.personal_code }}</span>
                        </li>
                    </template>
                </ul>
            </div>
        </div>



        <div v-if="isDelete"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="isDelete = false">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/orange-warning.svg" alt="fail">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p class="text-center text-lg text-crs-black-1">
                        آیا از حذف داور اطمینان دارید؟
                    </p>
                </div>
                <div class="flex justify-center gap-4">
                    <button @click="admin.deleteReferee({ referees: [deleteId] }, research.id); isDelete = false"
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



        <div v-if="isRefe"
            class=" overflow-hidden fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] flex items-center justify-center break-words"
            @click="isRefe = false">
            <div class="w-[60rem] bg-white rounded-[2rem] p-6 overflow-auto max-h-[calc(100vh-10rem)]" @click.stop="">
                <div class="max-w-[40rem] mx-auto">
                    <div class="text-center text-black font-bold text-2xl shrink-0">
                        <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                            style="background-image: url('/images/profile.png'); background-size: 70%;"></div>
                        {{ (refe?.name + ' ' + ((refe?.last_name) ? refe?.last_name : '')) }}
                    </div>

                    <div class="rounded-full h-12 flex items-center justify-center bg-[#F5F5F5] text-xl mt-8">{{
                        refe.current_position }}</div>

                    <div class="flex gap-2 mt-2">
                        <div
                            class="rounded-full h-12 flex items-center justify-center bg-[#F5F5F5] text-xl grow w-[1rem]">
                            {{ refe.degree_education }}</div>
                        <div
                            class="rounded-full h-12 flex items-center justify-center bg-[#F5F5F5] text-xl grow w-[1rem]">
                            {{ refe.discipline }}</div>
                    </div>

                    <div class="flex gap-2 mt-2">
                        <div
                            class="rounded-full h-12 flex items-center justify-center bg-[#F5F5F5] text-xl grow w-[1rem]">
                            {{ cities.searchProvince(refe.province_id)?.title }}</div>
                        <div
                            class="rounded-full h-12 flex items-center justify-center bg-[#F5F5F5] text-xl grow w-[1rem]">
                            {{ cities.searchCity(refe.city_id)?.title }}</div>
                    </div>

                    <ul class="bg-white rounded-[2rem] py-4 px-8 mt-4 text-xl space-y-3">
                        <li class="flex justify-between">
                            کد ملی :
                            <span>{{ refe.national_code }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            کد پرسنلی :‌
                            <span>{{ refe.personal_code }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            ایمیل :‌
                            <span>{{ refe.email }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            شماره تماس :‌
                            <span>{{ refe.mobile }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            سابقه کار :
                            <span>{{ refe.work_experience }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            سمت فعلی :
                            <span>{{ refe.current_position }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            سابقه سمت فعلی :
                            <span>{{ refe.history_current_position }}</span>
                        </li>
                        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2 -mx-4"></div>
                        <li class="flex justify-between">
                            محل کار :
                            <span>{{ refe.work_address }}</span>
                        </li>
                    </ul>
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
const type = ref(0)
const referIndex = ref(-1)
const isOpen = ref(false)
const isDelete = ref(false)
const deleteId = ref(null)
const isRefe = ref(false)
const refe = ref(null)
const search = ref("")
const { id } = useRoute().params
const cities = useCities()
if (cities.cities.value == null) {
    cities.getCities()
}
const opinion = ref("")
const admin = useAdmin()
admin.getUsers()
const { users } = useAdmin()
const isConfirmed = ref(false)
const refer = computed(() => admin.referee.value ? admin.referee.value : null)
const research = computed(() => admin?.research?.value ? admin?.research?.value : null)
admin.getResearch(id)
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
const numbers = [
    "اول",
    "دوم",
    "سوم",
    "چهارم",
    "پنجم",
    "ششم"
]
const genders = ["مرد", "زن"]

const description = ref(refer?.value?.description)

const questions = ref(admin.questions.value ? admin.questions.value.map(x => {
    let temp = refer.value?.questions.filter(y => x.id == y.pivot.question_id)[0]
    if (temp) x.score = temp.pivot.score
    else x.score = null
    return x
}) : null)

watch(() => admin.questions.value, (newV, oldV) => {
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
    admin.setScore(req, refer.value.id, id)
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
    admin.setOpinion(req, refer.value.id, id, refer.value.referee_id)
    opinion.value = ""
}

const addR = (refId) => {
    console.log({ referees: refId, type });
    admin.addReferee({ referees: refId, type: type.value }, research.value.id)
    isOpen.value = false
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

.link {
    padding-inline: 0rem;
    padding-block: 0rem;
}
</style>

<style scoped>
.FirefoxScroll {
    scrollbar-color: #A8AEB5 transparent;
    scrollbar-width: thin;
}

/* width */
::-webkit-scrollbar {
    width: 0.188rem;
    height: 0;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #A8AEB5;
    border-radius: 300px;
}

::-webkit-scrollbar-button:end:increment {
    height: 0.2rem;
    display: block;
    background: transparent;
}

::-webkit-scrollbar-button:start:increment {
    height: 0.2rem;
    display: block;
    background: transparent;
}
</style>