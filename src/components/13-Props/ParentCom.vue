<script setup>
import ChildrenCom from './ChildrenCom.vue';

const props = defineProps({
  message: {
    type: String,
    default: 'Default Value'
  }
 })

console.log(props.message);
</script>
<template>
  <h1>Props</h1>

  <h3>{{ message }}</h3>

  <ChildrenCom
    :propA="12"
    prop-b="Hiiiii"
    propC="CCCC"
    propE="{message: hello prop E}"
    propF="success"
    propG="Say Hi propG"
  />
</template>