<template>
    <div class="pb-20">
        <ResearchExpert v-if="user.role_id == 4" class="mt-10"></ResearchExpert>
        <ResearchReferee v-if="user.role_id == 3" class="mt-10"></ResearchReferee>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const {user} = useUser()

</script>