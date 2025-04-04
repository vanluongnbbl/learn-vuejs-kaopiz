<script setup>
import { ref } from 'vue';

  const checked = ref()
  const checkedArr = ref([])
</script>

<template>
<p>Checked: {{ checked }}</p>
<input type="checkbox" id="a" v-model="checked" true-value="hehehe" false-value="huhuhu">

<p>Multiples Checkbox: {{ checkedArr }}</p>
<input type="checkbox" id="b" v-model="checkedArr" value="B">
<label for="b">B</label>
<input type="checkbox" id="c" v-model="checkedArr" value="C">
<label for="c">C</label>
<input type="checkbox" id="d" v-model="checkedArr" value="D">
<label for="d">D</label>

</template>
