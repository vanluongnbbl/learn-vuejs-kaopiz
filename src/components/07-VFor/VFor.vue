<script setup>
import { ref} from 'vue'

const listFruit = ref([
  {name: 'banana', price: 5}, {name: 'apple', price: 10}
])

const users = ref([
  {name: 'John', isActive: true},
  {name: 'Bob', isActive: false},
  {name: 'Carol', isActive: true}
])
</script>

<template>

<div>
  <ul>
    <li v-for="item in listFruit" :key="item.name">
      {{ item.name }} - {{ item.price }}
   </li>
</ul>
<div v-for="n in 10" :key="n">{{ n }}</div>
</div>

<h1>List User</h1>
<ul>
  <template v-for="user in users" :key="user">
    <!-- <li>{{ user.name }} - Active: {{ user.isActive ? 'Active' : 'Deactive' }}</li> -->
    <li v-if="user.isActive">{{ user.name }}</li>
  </template>
</ul>
</template>
