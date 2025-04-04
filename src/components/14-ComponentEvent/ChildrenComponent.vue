<script setup>
const emit = defineEmits(['increase', ' increaseByTwoTime', 'increaseBy'])

const callFnIncrease = () => {
  emit('increase')
}

const callFnIncreaseTwoTime = () => {
  emit('increaseByTwoTime')
}

const callFnIncreaseBy = () => {
  emit('increaseBy', 10)
}
</script>

<template>
  <h1>Children</h1>

  <!-- Cach 1 -->
  <button @click="$emit('increase')">Increase</button>

  <br>
  <!-- Cach 2 -->
  <button @click="callFnIncrease">Increase 1</button>
  <button @click="callFnIncreaseTwoTime">Increase 2</button>
  <button @click="callFnIncreaseBy">Increase By</button>
</template>