<!-- src/components/UserProfile.vue -->
<template>
    <div class="user-card">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const user = ref(null)
  
  await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => user.value = data)
  </script>
  
  <style scoped>
  .user-card {
    background: #f3f3f3;
    padding: 1rem;
    border-radius: 8px;
    width: 300px;
  }
  </style>
  