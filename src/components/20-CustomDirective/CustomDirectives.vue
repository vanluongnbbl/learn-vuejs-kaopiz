<script setup>
import vAutofocus from './v-autofocus';
</script>

<template>
    <h1>Custom Directives</h1>

    <input type="text" v-autofocus>
    <h3>{{ $formatCurrency(50000) }}</h3>
</template>