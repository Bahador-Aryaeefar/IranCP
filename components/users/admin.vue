<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input v-model="search"
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو نام و کد پرسنلی">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>
            <UiSelect class="w-[18rem] split:grow" :value="role" @pick="((picked) => role = picked)" placeHolder="نقش"
                :items="roles"></UiSelect>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-12rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead class="text-white font-bold text-lg whitespace-nowrap">
                    <tr>
                        <th>شماره</th>
                        <th>نام</th>
                        <th>کد پرسنلی</th>
                        <th>استان</th>
                        <th>شهر</th>
                        <th>استان داوری</th>
                        <th>شهر داوری</th>
                        <th>وضعیت</th>
                        <th>نقش</th>
                        <th>پروفایل</th>
                        <th>حذف</th>
                    </tr>
                </thead>

                <tbody class="text-black font-bold text-lg whitespace-nowrap text-center">
                    <tr
                        v-for="item,index in users?.filter(x => isRole(x.role_id) && ((x.name + ' ' + ((x?.last_name) ? x?.last_name : ''))?.includes(search) || x?.personal_code?.includes(search))).filter(x => useUser().user.value.id != x.id)">
                        <td>{{ index+1 }}</td>
                        <td>{{ (item.name + ' ' + ((item.last_name) ? item.last_name : '')) }}</td>
                        <td>{{ item.personal_code }}</td>
                        <td>{{ cities.searchProvince(item.province_id)?.title }}</td>
                        <td>{{ cities.searchCity(item.city_id)?.title }}</td>
                        <td class="link">
                            <UiSelect v-if="item.role_id == 3" class="w-[12rem]"
                                :value="cities.searchProvince(item.referee_province_id)?.title" :isInput="true"
                                :strict="true"
                                @pick="((picked) => admin.changeUser({ referee_province_id: cities.provinces.value.filter(x => x.title == picked)[0]?.id }, item.id))"
                                placeHolder="استان" :items="cities.provinces.value.map(x => x.title)"></UiSelect>
                            <span v-else>-</span>
                        </td>
                        <td class="link">
                            <UiSelect v-if="item.role_id == 3" class="w-[12rem]"
                                :value="cities.searchCity(item.referee_city_id)?.title" :isInput="true" :strict="true"
                                @pick="((picked) => admin.changeUser({ referee_city_id: cities.cities.value.filter(x => x.title == picked)[0]?.id }, item.id))"
                                placeHolder="شهر"
                                :items="cities.cities.value.filter(x => x.parent == item.referee_province_id).map(x => x.title)">
                            </UiSelect>
                            <span v-else>-</span>
                        </td>
                        <td>
                            <div class="flex justify-between px-6 gap-6 ">
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeUser({ status: 0 }, item.id)">
                                    <UiRadioButton :isSelected="item.status == '0'"></UiRadioButton>
                                    عدم تایید
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeUser({ status: 1 }, item.id)">
                                    <UiRadioButton :isSelected="item.status == '1'"></UiRadioButton>
                                    تایید
                                </div>
                            </div>
                        </td>
                        <td class="!max-w-[100rem]">
                            <div class="flex justify-between px-6 gap-6 ">
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeUser({ role_id: 5 }, item.id)">
                                    <UiRadioButton :isSelected="item?.role_id == 5"></UiRadioButton>
                                    دبیر
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeUser({ role_id: 4 }, item.id)">
                                    <UiRadioButton :isSelected="item?.role_id == 4"></UiRadioButton>
                                    کارشناس
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeUser({ role_id: 3 }, item.id)">
                                    <UiRadioButton :isSelected="item?.role_id == 3"></UiRadioButton>
                                    داور
                                </div>
                                <div class="flex gap-1 items-center cursor-pointer"
                                    @click="admin.changeUser({ role_id: 1 }, item.id)">
                                    <UiRadioButton :isSelected="item?.role_id == 2 || item?.role_id == 1"></UiRadioButton>
                                    مدیر
                                </div>
                            </div>
                        </td>
                        <td class="text-[#08B3B9] link">
                            <NuxtLink class="block py-2" :to="`/users/${item.id}`">مشاهده</NuxtLink>
                        </td>
                        <td class="text-[#EE0035] link">
                            <span class="cursor-pointer block py-2" @click="isDelete = true; deleteId = item.id">حذف</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



        <div v-if="isDelete"
            class="fixed px-4 left-0 top-0 w-full h-full bg-[#0000004D] backdrop-blur-[0.125rem] z-[200] flex items-center justify-center pb-20 break-words"
            @click="isDelete = false">
            <div class="w-[60rem] bg-white rounded-[0.5rem] p-6" @click.stop="">
                <img class="w-[6rem] h-[6rem] mb-6 mx-auto" src="/icons/orange-warning.svg" alt="fail">
                <div class="overflow-auto max-h-[30vh] px-2">
                    <p class="text-center text-lg text-crs-black-1">
                        آیا از حذف کاربر اطمینان دارید؟
                    </p>
                </div>
                <div class="flex justify-center gap-4">
                    <button @click="admin.deleteUser(deleteId); isDelete = false"
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
admin.getUsers()
const roles = [
    'همه',
    'دبیر',
    'کارشناس',
    'داور',
    'مدیر',
]
const role = ref("")
const users = computed(() => admin.users.value)
const cities = useCities()
if (cities.cities.value == null) {
    cities.getCities()
}

const isRole = (ro) => {
    if (!role.value || role.value == "همه") return true
    switch (ro) {
        case 1:
        case 2:
        case "1":
        case "2":
            if (role.value == "مدیر") return true
            else return false
        case 3:
        case "3":
            if (role.value == "داور") return true
            else return false
        case 4:
        case "4":
            if (role.value == "کارشناس") return true
            else return false
        case 5:
        case "5":
            if (role.value == "دبیر") return true
            else return false
    }
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
    overflow: visible;

}</style>