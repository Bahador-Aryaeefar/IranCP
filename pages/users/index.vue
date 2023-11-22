<template>
    <div>
        <UsersExpert class="mt-10"></UsersExpert>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
</script>