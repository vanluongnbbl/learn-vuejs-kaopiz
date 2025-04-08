<template>
    <button @click="show = true">Open Modal</button>
  
    <teleport to="body">
      <div v-if="show" class="modal-backdrop">
        <div class="modal-content">
          <h2>Modal title</h2>
          <p>Some text...</p>
          <button @click="show = false">Close</button>
        </div>
      </div>
    </teleport>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const show = ref(false)
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 1rem;
    border-radius: 8px;
  }
  </style>