<script setup>
import { ref } from 'vue';

const show = ref(false)
const items = ref([
  {text: 'text 1', id: 1},
  {text: 'text 2', id: 2}
])

const showHello = () => show.value = !show.value
</script>
<template>
  <transition name="fade">
    <p v-if="show">Hello Vue!</p>
  </transition>
  <button @click="showHello">showHello</button>

  <transition-group name="fade">
    <ul v-if="show">
      <li v-for="item in items" :key="item.id" >{{ item.text }}</li>
    </ul>
</transition-group>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>