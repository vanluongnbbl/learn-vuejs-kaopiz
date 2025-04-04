<script setup>

const props = defineProps({
  message: String,
  propA: Number,
  propB: [String, Number],
  propC: {
    type: String,
    required: true
  },
  propD: {
    type: Number,
    default: 100
  },
  propE: {
    type: Object,
  },
  propF: {
    type: String,
    validator(value) {
      return ['success', 'warning', 'error'].includes(value)
    }
  },
  propG: {
    type: Function,
  }
 })

</script>
<template>
  <h1>Children component</h1>

  <h3>propA: {{ props.propA }}</h3>
  <h3>propB: {{ props.propB }}</h3>
  <h3>propC: {{ props.propC }}</h3>
  <h3>propD: {{ props.propD }}</h3>
  <h3>propE: {{ props.propE }}</h3>
  <h3>propF: {{ props.propF }}</h3>
  <h3>propG: {{ props.propG }}</h3>

</template>