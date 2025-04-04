<!--
 tại sao cần sử dụng ref?
 + Khi ref thay đổi thì vue sẽ biết và chỉ cập nhật DOM tương ứng
 + Nếu ko dùng ref: phải dùng DOM thật để cập nhật
-->

<!--
  Computed
  + chỉ cập nhật khi dependency thay đổi -> giúp giảm thiểu render

-->
<script setup>
import { computed, reactive, ref } from 'vue'

 const objectRef = reactive({
    count: 0,
    arr: [0]
  })
  const fnIncrease = () => {
    objectRef.count++
    objectRef.arr.push(objectRef.count)
  }

  const firstName = ref('Nguyen Van')
  const lastName = ref('A')
  const fullName = computed({
    get() {
      return firstName.value + ' ' + lastName.value
    },
    set(newValue) {
      [firstName.value, lastName.value] =  newValue.split(',')
    }
  })
  const changeFullName = () => {
    fullName.value = "Pham Hoang,Nam"
  }
</script>

<template>
    <button @click="fnIncrease">Increase</button>
  <h1>Count: {{ objectRef.count }}</h1>
  <h1>Array: {{ objectRef.arr }}</h1>

  <p>Fullname: {{ fullName }}</p>
  <button @click="changeFullName">Change FullName</button>
</template>