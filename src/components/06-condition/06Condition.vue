<!--
  v-if: ẩn hẳn khỏi DOM
  v-show: dùng css để ẩn element chứ ko remove hẳn khỏi DOM (display: none)
-->

<script setup>
import {ref} from 'vue'

const isLogged = ref(true)
const toggleLogin = () => {isLogged.value = !isLogged.value}
</script>

<template>
  <h1 v-if="isLogged">Đẵ đăng nhập</h1>
  <h1 v-else>Hello Guest</h1>

  <button @click="toggleLogin">{{ isLogged ? 'Đăng Xuất' : 'Đăng Nhập' }}</button>
  </template>