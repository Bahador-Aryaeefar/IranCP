<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو پیشرفته">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>

            <div @click="isOpen = true"
                class="cursor-pointer rounded-full flex items-center justify-center w-14 h-14 text-[3rem] pb-1.5 text-white bg-[#08B3B9] shrink-0">
                +</div>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-12rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead class="text-white font-bold text-lg whitespace-nowrap">
                    <tr>
                        <th>سال</th>
                        <th>وضعیت</th>
                        <th>حذف</th>
                    </tr>
                </thead>

                <tbody class="text-black font-bold text-lg whitespace-nowrap text-center">
                    <tr v-for="item in coords">
                        <td>{{ item.date }}</td>
                        <td>
                            <div class="flex gap-6 justify-between px-6">
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeCoords({ status: 0 }, item.id)">
                                    <UiRadioButton :isSelected="item.status == 0"></UiRadioButton>
                                    شروع نشده
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeCoords({ status: 1 }, item.id)">
                                    <UiRadioButton :isSelected="item.status == 1"></UiRadioButton>
                                    مرحله اول
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeCoords({ status: 2 }, item.id)">
                                    <UiRadioButton  :isSelected="item.status == 2"></UiRadioButton>
                                    مرحله دوم
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeCoords({ status: 3 }, item.id)">
                                    <UiRadioButton :isSelected="item.status == 3"></UiRadioButton>
                                    پایان یافته
                                </div>
                            </div>
                        </td>
                        <td class="text-[#EE0035]">
                            <span class="cursor-pointer" @click="admin.deleteCoords(item.id)">حذف</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="isOpen"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[100] flex items-center justify-center"
            @click="isOpen = false">
            <div @click.stop="" class="bg-white rounded-[1rem] py-6 px-10 mt-10">
                <h1 class="text-[2rem] font-bold leading-[3.5rem] text-[#57C5C6] text-center">
                    دوره جدید
                </h1>

                <form class="mt-4 flex gap-4 flex-wrap justify-center" @submit.prevent="" autocomplete="on">
                    <div class="h-14 w-[18rem] relative">
                        <input id="status" v-model="status"
                            :class="(isConfirmed && !status) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                            type="text" placeholder="مرحله">
                    </div>

                    <div class="h-14 w-[18rem] relative">
                        <input id="date" v-model="date"
                            :class="(isConfirmed && !date) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                            type="text" placeholder="سال">
                    </div>
                </form>

                <div @click="addCoord"
                    class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl">
                    ثبت
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const admin = useAdmin()
admin.getCoords()
const { coords } = useAdmin()
const isOpen = ref(false)

const status = ref("")
const date = ref("")
const isConfirmed = ref(false)
const addCoord = () => {
    isConfirmed.value = true
    let isValid = true
    if (!status.value) isValid = false
    if (!date.value) isValid = false
    if (!isValid) return

    const req = {
        status: status.value,
        date: date.value
    }

    admin.addCoords(req)
    isOpen.value = false
    status.value = ""
    date.value = ""
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
    border-radius: 100rem;
    background-color: white;
    padding-inline: 1.5rem;
    padding-block: 0.5rem;
    box-shadow: 0 0.25rem 0.375rem -0.063rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1);
    max-width: 20rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}</style>