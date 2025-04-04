<script setup>
import { onMounted, ref } from 'vue';

const list = ref(['Item 1', 'Item 2', 'Item 3'])
const itemRefs = ref([])
onMounted(async () => {
  console.log('itemRefs', itemRefs.value);
  itemRefs.value.forEach((item) => {
    item.style.transition = 'opacity 3s'
    setTimeout(() => {
        item.style.opacity = 1; // Apply opacity after a small delay
      }, 10); // Delay forces browser to recognize transition
  })
})

const initializeThirdPartyLibrary = (el) => {
  console.log(el);
}
</script>

<template>
  <h1>Refs V-For</h1>
  <input type="text" :ref="(el) => { // Ref kiểu hàm
    initializeThirdPartyLibrary(el)
  }">

<ul>
  <!-- <li v-for="(item, index) in list" :key="index" ref="itemRefs" style="opacity: 0">{{ item }}</li> -->
  <li v-for="(item, index) in list" :key="index" :ref="(el) => itemRefs[index] = el" style="opacity: 0">{{ item }}</li>

</ul>
</template>
