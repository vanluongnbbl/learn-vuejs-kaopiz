<script setup>
import { ref} from 'vue'
  const todoList = ref([])
  const newValue = ref('')

  const addTodo = () => {
    console.log('newValue.value.trim()', newValue.value.trim());
    if (newValue.value.trim() === '') return
    todoList.value.push(newValue.value)
    newValue.value = ''
  }

  // const onChangeValue = (event) => {
  //   newValue.value = event.target.value
  // }
</script>

<template>

<input type="text" v-model="newValue" @keyup.enter="addTodo"/>
<button @click="addTodo">Add TODO</button>

<div>
  <ul>
    <li v-for="item in todoList" :key="item">
      {{ item }}
    </li>
  </ul>
</div>
</template>
