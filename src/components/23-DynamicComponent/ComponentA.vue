<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'


onMounted(() => console.log('🟢 A mounted'))
onActivated(() => console.log('✅ A activated'))
onDeactivated(() => console.log('🔒 A deactivated'))
onUnmounted(() => console.log('❌ A unmounted'))
</script>

<template>
    <h1>Component A</h1>
</template>