<script setup>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import { computed, ref } from 'vue'

const components = [ComponentA, ComponentB]
const index = ref(0)

const currentComponent = computed(() => components[index.value])

function switchComponent() {
  index.value = (index.value + 1) % components.length
}
</script>

<template>
    <h1>Dynamic Component</h1>
    <keep-alive>
        <component :is="currentComponent" />
    </keep-alive>
    <h3>{{ index }}</h3>
    <button @click="switchComponent">switchComponent</button>
</template>