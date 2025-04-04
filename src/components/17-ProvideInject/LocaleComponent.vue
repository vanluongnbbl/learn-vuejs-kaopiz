<script setup>
import { inject } from 'vue';

const {locale, updateLocale} = inject('locale')

</script>

<template>
  <button @click="updateLocale">Update Locale</button>
  <p>Locale: {{ locale }}</p>
</template>