<template>
    <div class="mx-10 mobile:mx-6">
        <Profile></Profile>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const {user} = useUser()
</script>