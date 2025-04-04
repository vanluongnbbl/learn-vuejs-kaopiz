<script setup>
import { ref } from 'vue';
import ChildrenComponent from './ChildrenComponent.vue';
const count = ref(0)

const increaseBy = (number) => {
  count.value = count.value + number
}
</script>

<template>
  <h1>Component Event</h1>

  <ChildrenComponent
  @increase="count++"
  @increaseByTwoTime="count = count + 2"
  @increaseBy="increaseBy"
  />
  <h3>{{ count }}</h3>
</template>