<template>
    <div>
        <UserExpert v-if="user?.role_id == 4" class="mt-10"></UserExpert>
        <UserAdmin v-if="user?.role_id == 1 || user?.role_id == 2" class="mt-10"></UserAdmin>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
const {user} = useUser()
</script>