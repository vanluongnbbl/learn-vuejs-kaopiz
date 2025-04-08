<script setup>
import { useCounter } from './useCounter';

const {count, increase, decrease} = useCounter()
</script>

<template>
  <h1>Composables</h1>
  <h3>{{ count }}</h3>
  <button @click="increase">increase</button>
  <button @click="decrease">decrease</button>
</template>