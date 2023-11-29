<template>
    <div class="pb-20">
        <ResearchExpert v-if="user.role_id == 4" class="mt-10"></ResearchExpert>
        <ResearchReferee v-if="user.role_id == 3" class="mt-10"></ResearchReferee>
        <ResearchAdmin v-if="user.role_id == 1 || user.role_id == 2" class="mt-10"></ResearchAdmin>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const {user} = useUser()

</script>