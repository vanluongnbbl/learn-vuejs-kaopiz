<script setup>
import { provide, ref } from 'vue';
import LocaleComponent from './LocaleComponent.vue';

const locale = ref('Ha Noi')
const updateLocale = () => {
  locale.value = 'Ho Chi Minh'
}
provide('locale', { locale, updateLocale })
</script>

<template>
  <h1>Provide and Inject</h1>
  <button @click="locale = 'Da Nang'">Change Locale</button>

  <LocaleComponent />
</template>