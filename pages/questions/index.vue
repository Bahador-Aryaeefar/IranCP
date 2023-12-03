<template>
    <div>
        <QuestionsAdmin v-if="user?.role_id == 1 || user?.role_id == 2" class="mt-10"></QuestionsAdmin>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const { user } = useUser()

</script>