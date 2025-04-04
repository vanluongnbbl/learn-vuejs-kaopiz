<script setup>
import { defineAsyncComponent } from 'vue';


const AsyncComponentChildren = defineAsyncComponent({
  loader: () => import("./AsyncComponentChildren.vue"),
  loadingComponent: () => import("./LoadingComponent.vue"),
  errorComponent: () => import("./ErrorComponent.vue"),
  delay: 200,
})
</script>

<template>
  <h1>Async Component</h1>

  <AsyncComponentChildren />
</template>