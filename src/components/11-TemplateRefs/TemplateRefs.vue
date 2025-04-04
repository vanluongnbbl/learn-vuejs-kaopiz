<script setup>
import { onMounted, ref } from 'vue';
const inputRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <h1>Template Refs </h1>

  <h3>Search</h3>
  <input type="text" ref="inputRef">

</template>
