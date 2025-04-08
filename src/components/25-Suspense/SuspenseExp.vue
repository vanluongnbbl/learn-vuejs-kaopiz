<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const UserProfile = defineAsyncComponent(() => import('./UserProfile.vue'))

</script>


<!-- 
➡️ Khi AsyncComponent đang loading (đang fetch API), phần #fallback sẽ hiển thị.
➡️ Khi xong, #default sẽ được mount vào. 

✅ Điều kiện để dùng được <Suspense>
Bên trong <Suspense>, component con phải là một component bất đồng bộ (async).


-->
<template>
  <h1>Suspense</h1>
  <Suspense>
    <template #default>
      <UserProfile />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
