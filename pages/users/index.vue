<template>
    <div>
        <UsersExpert v-if="user?.role_id == 4" class="mt-10"></UsersExpert>
        <UsersAdmin v-if="user?.role_id == 1 || user?.role_id == 2" class="mt-10"></UsersAdmin>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
const {user} = useUser()
</script>