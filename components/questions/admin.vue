<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input  v-model="search"
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو سوال">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>

            <div class="w-14 h-14 shrink-0 rounded-full bg-[#08B3B9] relative cursor-pointer shadow-md"
                @click="isOpen = true; isEdit = false; title = ''; factor = ''">
                <div class="w-[50%] h-[0.25rem] bg-white rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                </div>
                <div class="h-[50%] w-[0.25rem] bg-white rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                </div>
            </div>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-12rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead class="text-white font-bold text-lg whitespace-nowrap">
                    <tr>
                        <th>شماره</th>
                        <th>سال</th>
                        <th>سوال</th>
                        <th>ضریب</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                </thead>

                <tbody class="text-black font-bold text-lg whitespace-nowrap text-center">
                    <tr v-for="item in questions?.filter(x => x.title.includes(search))">
                        <td>{{ item.id }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.factor }}</td>
                        <td class="text-[#08B3B9] link">
                            <span class="cursor-pointer block py-2"
                                @click="isEdit = true; isOpen = true; title = item.title; factor = item.factor; questionsID = item.id">ویرایش</span>
                        </td>
                        <td class="text-[#EE0035] link">
                            <span @click="isDelete = true; deleteId = item.id" class="cursor-pointer block py-2">حذف</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="isOpen"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[100] flex items-center justify-center"
            @click="isOpen = false; isEdit = false">
            <div @click.stop="" class="bg-white rounded-[1rem] py-6 px-10 mt-10">
                <h1 v-if="isEdit" class="text-[2rem] font-bold leading-[3.5rem] text-[#57C5C6] text-center">
                    ویرایش سوال
                </h1>
                <h1 v-else class="text-[2rem] font-bold leading-[3.5rem] text-[#57C5C6] text-center">
                    سوال جدید
                </h1>

                <form class="mt-4 flex gap-4 flex-wrap justify-center" @submit.prevent="" autocomplete="on">
                    <div class="h-14 w-[18rem] relative">
                        <input id="title" v-model="title"
                            :class="(isConfirmed && !title) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                            type="text" placeholder="سوال">
                    </div>

                    <div class="h-14 w-[18rem] relative">
                        <input id="factor" v-model="factor"
                            :class="(isConfirmed && !factor) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-full"
                            type="text" placeholder="ضریب">
                    </div>
                </form>

                <div @click="addQuestion"
                    class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl">
                    ثبت
                </div>
            </div>
        </div>

        <div v-if="isDelete"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="isDelete = false">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/orange-warning.svg" alt="fail">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p class="text-center text-lg text-crs-black-1">
                        آیا از حذف سوال اطمینان دارید؟
                    </p>
                </div>
                <div class="flex justify-center gap-4">
                    <button @click="admin.deleteQuestions(deleteId);  isDelete = false"
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
    </div>
</template>

<script setup>
const search = ref("")
const admin = useAdmin()
const isDelete = ref(false)
const deleteId = ref(null)
admin.getQuestions()
const { questions } = useAdmin()
const isOpen = ref(false)
const isEdit = ref(false)
const questionsID = ref("")

const title = ref("")
const factor = ref("")
const isConfirmed = ref(false)
const addQuestion = () => {
    isConfirmed.value = true
    let isValid = true
    if (title.value == null) isValid = false
    if (factor.value == null) isValid = false
    if (!isValid) return

    const req = {
        title: title.value,
        factor: factor.value
    }

    if (isEdit.value) admin.changeQuestions(req, questionsID.value)
    else admin.addQuestions(req)
    isOpen.value = false
    title.value = ""
    factor.value = ""
    questionsID.value = ""
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
}

.link {
    padding-inline: 0rem;
    padding-block: 0rem;
}
</style>