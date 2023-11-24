<template>
    <div>
        <UserExpert class="mt-10"></UserExpert>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
</script>