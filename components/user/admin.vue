<template>
    <div class="px-6" v-if="user && cities.cities.value && cities.provinces.value">
        <div class="mt-10 mb-16 flex items-end justify-center max-w-[35rem] mx-auto items-center">
            <div class="text-center text-black font-bold text-2xl shrink-0">
                <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                    style="background-image: url('/images/profile.png'); background-size: 70%;"></div>
                {{ (user.name + ' ' + ((user.last_name) ? user.last_name : '')) }}
            </div>
        </div>

        <UserAuth class="mx-auto max-w-[50rem] w-full"></UserAuth>

        <div class="text-black font-bold text-2xl text-center mt-10">وضعیت</div>
        <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0] max-w-[50rem] mx-auto"></div>
        <div class="flex bg-white rounded-full gap-6 w-fit mx-auto py-4 px-10 mt-6 text-2xl">
            <div class="flex gap-2 items-center cursor-pointer" @click="admin.changeUser({ status: 0 }, user.id)">
                <UiRadioButton :isSelected="user.status == '0'"></UiRadioButton>
                عدم تایید
            </div>
            <div class="flex gap-2 items-center cursor-pointer" @click="admin.changeUser({ status: 1 }, user.id)">
                <UiRadioButton :isSelected="user.status == '1'"></UiRadioButton>
                تایید
            </div>
        </div>

        <div class="text-black font-bold text-2xl text-center mt-10">نقش</div>
        <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0] max-w-[50rem] mx-auto"></div>
        <div class="flex bg-white rounded-full gap-6 w-fit mx-auto py-4 px-10 mt-6 text-2xl">
            <div class="flex gap-6 ">
                <div class="flex gap-1 items-center cursor-pointer" @click="admin.changeUser({ role_id: 5 }, id)">
                    <UiRadioButton :isSelected="user.role_id == 5"></UiRadioButton>
                    دبیر
                </div>
                <div class="flex gap-1 items-center cursor-pointer" @click="admin.changeUser({ role_id: 4 }, id)">
                    <UiRadioButton :isSelected="user.role_id == 4"></UiRadioButton>
                    کارشناس
                </div>
                <div class="flex gap-1 items-center cursor-pointer" @click="admin.changeUser({ role_id: 3 }, id)">
                    <UiRadioButton :isSelected="user.role_id == 3"></UiRadioButton>
                    داور
                </div>
                <div class="flex gap-1 items-center cursor-pointer" @click="admin.changeUser({ role_id: 1 }, id)">
                    <UiRadioButton :isSelected="user.role_id == 2 || user.role_id == 1"></UiRadioButton>
                    مدیر
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const { id } = useRoute().params
const genders = ["مرد", "زن"]
const cities = useCities()

if (cities.cities.value == null)
{
    cities.getCities()
}
const admin = useAdmin()
const { user } = useAdmin()
useAdmin().getUser(id)
</script>
