<template>
    <div class="mx-auto px-8">
        <div class="flex gap-4 flex-wrap">
            <div class="h-14 bg-white rounded-[1.5rem] flex items-center shadow-sm shrink-0 grow">
                <input
                    class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                    type="text" placeholder="جستجو پیشرفته">
                <img class="w-6 h-6 mx-5" src="/icons/personal/search.svg" alt="search">
            </div>
            <div
                class="h-14 w-[14rem] px-12 pl-14 bg-white rounded-[1.5rem] text-2xl font-bold flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
                1402
                <img class="absolute left-6 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg" alt="down">
            </div>
            <div
                class="h-14 w-[14rem] px-12 pl-14 bg-white rounded-[1.5rem] text-2xl font-bold flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
                شهرستان
                <img class="absolute left-6 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg" alt="down">
            </div>
            <div
                class="h-14 w-[14rem] px-12 pl-14 bg-white rounded-[1.5rem] text-2xl font-bold flex items-center justify-center relative cursor-pointer text-[#222323] pb-1">
                دسته
                <img class="absolute left-6 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/main/down.svg" alt="down">
            </div>
        </div>

        <div class="overflow-auto w-full h-[calc(100vh-20rem)]">
            <table class="w-full mt-4 border-spacing-[1rem] border-separate">
                <thead class="text-white font-bold text-lg whitespace-nowrap">
                    <th>شماره</th>
                    <th>وضعیت</th>
                    <th>عنوان</th>
                    <th>رشته</th>
                    <th>تاریخ ثبت</th>
                    <th>مجری و مشاور</th>
                    <th>داور اول</th>
                    <th>داور دوم</th>
                    <th>امتیاز استان</th>
                    <th>امتیاز کشور</th>
                    <th>جزئیات</th>
                </thead>

                <tbody  class="text-black font-bold text-lg whitespace-nowrap">
                    <td>1402029</td>
                    <td>جدید</td>
                    <td>افزایش انگیزه یادگیری هنرجویان یازدهم فتوگرافیک</td>
                    <td>هنر - گرافیک</td>
                    <td>1402/07/21</td>
                    <td>قصرشیرین</td>
                    <td>بهرام صفری</td>
                    <td>سعید جلالوندی</td>
                    <td>امیر مرادی</td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>
        </div>
    </div>
</template>

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
}
</style>