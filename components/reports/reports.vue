<template>
    <div class="max-w-[72rem] mx-auto px-8">
        <div v-if="false"
            class="h-14 w-full px-12 pl-14 bg-white rounded-[1.5rem] text-2xl font-bold flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
            اقدام پژوهی
            <img class="absolute left-10 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg" alt="down">
        </div>

        <div v-if="false" class="flex mt-4 gap-3">
            <div
                class="flex-1 h-14 w-full px-12 pl-14 bg-white rounded-[1.5rem] text-2xl font-bold flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
                کرمانشاه
                <img class="absolute left-10 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg"
                    alt="down">
            </div>

            <div
                class="flex-1 h-14 w-full px-12 pl-14 bg-white rounded-[1.5rem] text-2xl font-bold flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
                1401
                <img class="absolute left-10 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg"
                    alt="down">
            </div>
        </div>

        <div class="flex flex-wrap items-center gap-8 justify-between mt-20">
            <div class="flex-1">
                <div class="bg-white rounded-[1.5rem] p-8 pb-6 font-bold">
                    <div class="w-[14rem] h-[14rem] relative mx-auto">
                        <div v-for="(item, index) in show" :key="index"
                            class="rounded-full absolute left-0 top-0 right-0 bottom-0 m-auto"
                            :style="`width: calc(100% - ${ranks[index] * 2}rem); height: calc(100% - ${ranks[index] * 2}rem); background-image: conic-gradient(transparent 0%, transparent ${(show[index - 1] ? show[index - 1] : 0)}%, ${colors[index]} ${(show[index - 1] ? show[index - 1] : 0)}%, ${colors[index]} ${item}%, transparent ${item}%);`">
                        </div>
                    </div>

                    <div class="flex items-center gap-8 justify-between text-black text-lg mt-6 text-center">
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#D9DDE1]"></div>
                            <div>
                                ابتدایی
                                <br>
                                <!-- {{ stats[0] }} -->
                                -
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#509499]"></div>
                            <div>
                                متوسطه
                                <br>
                                <!-- {{ stats[1] }} -->
                                -
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#DE3D3D]"></div>
                            <div>
                                تکمیلی
                                <br>
                                <!-- {{ stats[2] }} -->
                                -
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-[1.5rem] flex items-center justify-center h-14 mt-4 text-[1.75rem] font-bold">
                    <!-- {{ stats.reduce((a, b) => a + b) }} -->
                    -
                </div>
            </div>

            <div class="flex-1">
                <div class="bg-white rounded-[1.5rem] p-8 pb-6 font-bold">
                    <div class="w-[14rem] h-[14rem] relative mx-auto">
                        <div v-for="(item, index) in showG" :key="index"
                            class="rounded-full absolute left-0 top-0 right-0 bottom-0 m-auto"
                            :style="`width: calc(100% - ${ranksG[index] * 2}rem); height: calc(100% - ${ranksG[index] * 2}rem); background-image: conic-gradient(transparent 0%, transparent ${(showG[index - 1] ? showG[index - 1] : 0)}%, ${colorsG[index]} ${(showG[index - 1] ? showG[index - 1] : 0)}%, ${colorsG[index]} ${item}%, transparent ${item}%);`">
                        </div>
                    </div>

                    <div class="flex items-center gap-16 justify-center text-black text-lg mt-6 text-center">
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#E74C8A]"></div>
                            <div>
                                خانم
                                <br>
                                <!-- {{ statsG[0] }} -->
                                -
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#EBEBEB]"></div>
                            <div>
                                آقا
                                <br>
                                <!-- {{ statsG[1] }} -->
                                -
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-[1.5rem] flex items-center justify-center h-14 mt-4 text-[1.75rem] font-bold">
                    <!-- {{ statsG.reduce((a, b) => a + b) }} -->
                    -
                </div>
            </div>

            <div class="flex-1">
                <div class="bg-white rounded-[1.5rem] p-8 pb-6 font-bold">
                    <div class="w-[14rem] h-[14rem] relative mx-auto">
                        <div v-for="(item, index) in showT" :key="index"
                            class="rounded-full absolute left-0 top-0 right-0 bottom-0 m-auto"
                            :style="`width: calc(100% - ${ranksT[index] * 2}rem); height: calc(100% - ${ranksT[index] * 2}rem); background-image: conic-gradient(transparent 0%, transparent ${(showT[index - 1] ? showT[index - 1] : 0)}%, ${colorsT[index]} ${(showT[index - 1] ? showT[index - 1] : 0)}%, ${colorsT[index]} ${item}%, transparent ${item}%);`">
                        </div>
                    </div>

                    <div class="flex items-center gap-16 justify-center text-black text-lg mt-6 text-center">
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#A7DA42]"></div>
                            <div>
                                گروهی
                                <br>
                                <!-- {{ statsT[0] }} -->
                                -
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-[#EBEBEB]"></div>
                            <div>
                                فردی
                                <br>
                                <!-- {{ statsT[1] }} -->
                                -
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-[1.5rem] flex items-center justify-center h-14 mt-4 text-[1.75rem] font-bold">
                    <!-- {{ statsT.reduce((a, b) => a + b) }} -->
                    -
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const stats = ref([1000, 2000, 300])
const total = computed(() => stats.value.map((x) => x / stats.value.reduce((a, b) => a + b) * 100))
const ranks = computed(() => {
    let temp = []
    for (let item of stats.value) {
        let rank = 1
        for (let item2 of stats.value) {
            if (item < item2) rank++
        }
        temp.push(rank)
    }
    return temp
})
const show = computed(() => {
    let i = 0
    let temp = []
    for (let item of total.value) {
        i = item + i
        temp.push(parseInt(i))
    }
    return temp
})
const colors = ref(['#D9DDE1', '#509499', '#DE3D3D'])

const statsG = ref([800, 410])
const totalG = computed(() => statsG.value.map((x) => x / statsG.value.reduce((a, b) => a + b) * 100))
const ranksG = computed(() => {
    let temp = []
    for (let item of statsG.value) {
        let rank = 1
        for (let item2 of statsG.value) {
            if (item < item2) rank++
        }
        temp.push(rank)
    }
    return temp
})
const showG = computed(() => {
    let i = 0
    let temp = []
    for (let item of totalG.value) {
        i = item + i
        temp.push(parseInt(i))
    }
    return temp
})
const colorsG = ref(['#E74C8A', '#EBEBEB'])

const statsT = ref([200, 350])
const totalT = computed(() => statsT.value.map((x) => x / statsT.value.reduce((a, b) => a + b) * 100))
const ranksT = computed(() => {
    let temp = []
    for (let item of statsT.value) {
        let rank = 1
        for (let item2 of statsT.value) {
            if (item < item2) rank++
        }
        temp.push(rank)
    }
    return temp
})
const showT = computed(() => {
    let i = 0
    let temp = []
    for (let item of totalT.value) {
        i = item + i
        temp.push(parseInt(i))
    }
    return temp
})
const colorsT = ref(['#A7DA42', '#EBEBEB'])

</script>