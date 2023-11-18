<template>
    <div class="max-w-[50rem] mx-auto">
        <NuxtLink :to="`/users/${book?.user_id}`" class="bg-white rounded-[2rem] flex items-center justify-between mt-10 px-6">
            <div class="flex items-center gap-4 text-2xl text-[#212121] font-bold">
                <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white -my-4 bg-no-repeat"
                    style="background-image: url('/icons/book/profile.png'); background-size: 70%;"></div>

                {{ author?.data.name }} {{ author?.data.last_name }}
            </div>

            <div class="flex items-center gap-2 text-2xl font-bold text-[#2D2D2D]">
                {{ author?.effects }}
                <img class="h-10" src="/icons/books/pen.svg" alt="pen">
            </div>
        </NuxtLink>

        <img class="mt-8 rounded-[2rem] shadow-md mx-auto w-full max-w-[20rem]"
            :src="`https://api.37pajoohesh.ir/images/${book?.file_image}`" alt="book">

        <div class="mt-8 flex px-4 justify-between items-center">
            <div class="h-10 w-[12.5rem] mt-2" :style="`background: linear-gradient(90deg, #ffb400 ${score / 5 * 100}%, #e1e1e1 ${score / 5 * 100}%); mask-image: url('/icons/profile/star.svg'); -webkit-mask-image: url('/icons/profile/star.svg'); 
                mask-size: 2.5rem; -webkit-mask-size: 2.5rem;`">
            </div>

            <div class="flex items-center gap-3 text-[#2D2D2D] font-bold text-[1.75rem]">
                {{ score }}
                <img class="h-8" src="/icons/profile/star.svg" alt="star">
            </div>
        </div>

        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2"></div>

        <div class="flex gap-1 px-4 justify-between items-center text-2xl font-bold text-[#2D2D2D]">
            به دیگران پیشنهاد میکنید؟

            <div class="flex -ml-3 items-center text-[1.75rem]">
                <span class="-ml-1">{{ book?.score }}</span>
                <img class="h-16 cursor-pointer" src="/icons/profile/like.svg" alt="like">
            </div>
        </div>

        <div class="bg-white rounded-[2rem] py-4 px-8 mt-12 shadow-md">
            <div class="flex items-center gap-1 text-[#808080] font-bold text-[1.625rem]">
                <img class="h-10" src="/icons/books/pen.svg" alt="pen">
                چکیده
            </div>

            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2"></div>

            <p class="text-justify text-xl text-[#3E3E3E] leading-[1.9rem] mt-3 pb-2">
                {{ book?.description }}
            </p>
        </div>

        <a :href="`https://api.37pajoohesh.ir/images/${book?.file}`" target="_blank"
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

        <div
            class="bg-white rounded-full px-10 py-3 flex items-center gap-3 mt-[6rem] w-fit mx-auto text-2xl text-[#808080]">
            <img src="/icons/book/comment.svg" alt="comment" class="h-8">
            نظرات کاربران
        </div>

        <div class="rounded-[3rem] border-[0.125rem] border-[#808080] px-6 py-4 mt-4">
            <div class="flex justify-between gap-8">
                <div
                    class="bg-white rounded-full py-2 flex items-center justify-center gap-2 w-fit mx-auto text-xl text-[#88C406] grow">
                    <img src="/icons/book/good.svg" alt="good" class="h-6">
                    خوب
                </div>

                <div
                    class="bg-white rounded-full py-2 flex items-center justify-center gap-2 w-fit mx-auto text-xl text-[#FFCB63] grow">
                    <img src="/icons/book/mid.svg" alt="mid" class="h-6">
                    متوسط
                </div>

                <div
                    class="bg-white rounded-full py-2 flex items-center justify-center gap-2 w-fit mx-auto text-xl text-[#F50000] grow">
                    <img src="/icons/book/bad.svg" alt="bad" class="h-6">
                    ضعیف
                </div>
            </div>

            <textarea
                class="h-[8rem] min-h-20 w-full bg-white rounded-[2rem] focus:outline-none px-8 py-3 mt-4 placeholder:text-[#707070] text-[#000000] text-xl text-center shadow-md"
                placeholder="نظر خود را ثبت کنید"></textarea>

            <button class="rounded-full px-12 py-1 text-white text-2xl bg-[#88C406] mx-auto block mt-4">ثبت</button>
        </div>

        <ul class="mt-8 space-y-8">
            <li class="flex rounded-[2rem] bg-white pl-6 pr-10 py-4">
                <div>
                    <div class="flex items-center gap-1 text-xl text-[#88C406] pr-2 shrink-0">
                        <img class="h-6" src="/icons/book/good.svg" alt="good">
                        <span class="shrink-0">خوب</span>
                    </div>

                    <div class="h-[0.125rem] rounded-r-full bg-[#8DC505] mt-2"></div>
                </div>

                <div class="grow text-center">
                    <div class="text-xl text-[#707070]">
                        آرین زرینی
                    </div>

                    <div class="h-[0.125rem] rounded-l-full bg-[#8DC505] mt-2"></div>

                    <div class="text-xl text-[#707070] mt-1">
                        کتاب خوبیه و مفاهیم رو خوب انتقال میدهه
                    </div>

                </div>

                <div class="text-2xl text-[#757575] shrink-0 text-center mr-3">
                    <img class="self-start h-16 cursor-pointer" src="/icons/profile/like.svg" alt="like">
                    <div class="-mt-4">3</div>
                </div>
            </li>

            <li class="flex rounded-[2rem] bg-white pl-6 pr-10 py-4">
                <div>
                    <div class="flex items-center gap-1 text-xl text-[#FFCB63] pr-2 shrink-0">
                        <img class="h-6" src="/icons/book/mid.svg" alt="mid">
                        <span class="shrink-0">متوسط</span>
                    </div>

                    <div class="h-[0.125rem] rounded-r-full bg-[#FFCB63] mt-2"></div>
                </div>

                <div class="grow text-center">
                    <div class="text-xl text-[#707070]">
                        احمدرضا فرخی
                    </div>

                    <div class="h-[0.125rem] rounded-l-full bg-[#FFCB63] mt-2"></div>

                    <div class="text-xl text-[#707070] mt-1">
                        معمولی بود . توقع بیشتری داشتم
                    </div>

                </div>

                <div class="text-2xl text-[#757575] shrink-0 text-center mr-3">
                    <img class="self-start h-16 cursor-pointer" src="/icons/profile/like.svg" alt="like">
                    <div class="-mt-4">1</div>
                </div>
            </li>

            <li class="flex rounded-[2rem] bg-white pl-6 pr-10 py-4">
                <div>
                    <div class="flex items-center gap-1 text-xl text-[#F50000] pr-2 shrink-0">
                        <img class="h-6" src="/icons/book/bad.svg" alt="bad">
                        <span class="shrink-0">ضعیف</span>
                    </div>

                    <div class="h-[0.125rem] rounded-r-full bg-[#F50000] mt-2"></div>
                </div>

                <div class="grow text-center">
                    <div class="text-xl text-[#707070]">
                        علیرضا نصیرمنش
                    </div>

                    <div class="h-[0.125rem] rounded-l-full bg-[#F50000] mt-2"></div>

                    <div class="text-xl text-[#707070] mt-1">
                        سطح مطالب بالا نبود
                    </div>

                </div>

                <div class="text-2xl text-[#757575] shrink-0 text-center mr-3">
                    <img class="self-start h-16 cursor-pointer" src="/icons/profile/like.svg" alt="like">
                    <div class="-mt-4">2</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const research = useResearches()
const book = computed(() => research?.research?.value)
research.getResearch(id)
const score = ref(0)

const author = computed(() => research.author?.value)



</script>