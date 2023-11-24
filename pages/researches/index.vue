<template>
    <div>
        <ResearchesExpert v-if="user.role_id == 4" class="mt-10"></ResearchesExpert>
        <ResearchesReferee v-if="user.role_id == 3" class="mt-10"></ResearchesReferee>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const {user} = useUser()

</script>