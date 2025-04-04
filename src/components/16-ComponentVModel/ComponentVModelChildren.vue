<script setup>
const email = defineModel('email')
const [userName, modifiers] = defineModel('userName', {
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})

console.log('modifiers', modifiers);
const setEmailDefault = () => {
  email.value = 'exampleLuong@gmail.com'
}

const setUserNameDefault = () => {
  userName.value = 'Nguyen Van A'
}
</script>

<template>
 <h1>Component V-Model</h1>

 <div>
  <label for="Email">Email</label>
  <input type="text" v-model="email">
  <p>{{ email }}</p>
  <button @click="setEmailDefault">Set Email Default</button>
 </div>

 <div>
  <label for="UserName">UserName</label>
  <input type="text" v-model="userName">
  <p>{{ userName }}</p>
  <button @click="setUserNameDefault">Set UserName Default</button>
 </div>
</template>