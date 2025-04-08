<script setup>
import { useCounterStore } from '@/store/useCounterStore';
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { name, count, doubleCount } = storeToRefs(counterStore)
// the increment action can just be destructured
const { increment  } = counterStore
</script>

<template>
    <h1>Demo Pinia</h1>
    <h3>Count: {{ count }}</h3>
    <h3>doubleCount: {{ doubleCount }}</h3>
    <p>Name: {{ name }}</p>
    <button @click="increment()">Increment</button>
</template>