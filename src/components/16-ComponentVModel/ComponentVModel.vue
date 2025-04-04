<script setup>
import { ref } from 'vue';
import ComponentVModelChildren from './ComponentVModelChildren.vue';
const email = ref('')
const userName = ref('')
const changeEmailDefaultFromParent = () => {
  email.value = 'emailDefaultFromParent@gmail.com'
}

const changeUserNameDefaultFromParent = () => {
  userName.value = 'Nguyen Van Parent'
}

</script>

<template>

<ComponentVModelChildren v-model:email="email" v-model:userName.capitalize="userName"/>
<button @click="changeEmailDefaultFromParent">Change email default from parent</button>
<button @click="changeUserNameDefaultFromParent">Change userName default from parent</button>

</template>