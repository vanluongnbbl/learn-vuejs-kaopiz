<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';

const count = ref(0)
const question = ref('')
const loading = ref(false)
const answer = ref('')
const x = ref(1)
const y = ref(1)
const user = reactive({
  age: 18,
  name: 'Luong'
})

watch(count, (newValue, oldValue) => {
  console.log(`old: ${oldValue}, new: ${newValue}`)
})

watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'

    try {
      const response = await fetch('https://yesno.wtf/api')
      answer.value = (await response.json()).answer
    } catch {
      answer.value = 'Error!'
    }
    finally {
      loading.value = false
    }
  }
})

watch(() => x.value + y.value, (sum) => {
  console.log('Sum: ', sum)
})

watch([x, () => y.value + 100], ([newX, newY]) => {
  console.log('newX: ', newX)
  console.log('newY: ', newY)
})

watch(() => user.age, (newAge, oldAge) => {
  console.log('newAge: ', newAge)
  console.log('oldAge: ', oldAge)
})

watchEffect(() => {
  console.log('watchEffect newAge: ', user.age)
  console.log('watchEffect newX: ', x.value)
  console.log('watchEffect newY: ', y.value)
})

const increaseCount = () => count.value++
const increaseXY = () => {
  x.value++
  y.value++
}
const changeAge = () => user.age = 20
</script>

<template>

<h1>Count: {{count}}</h1>
<button @click="increaseCount">increaseCount</button>

<div>--------------------------------</div>
<h1>Question</h1>
<input type="text" v-model="question">
<h4>{{ answer }}</h4>

<div>---------------------------------</div>
<h1>các loại source Watcher</h1>
<button @click="increaseXY">increaseXY</button>

<div>---------------------------------</div>
<button @click="changeAge">changeAge</button>
<h3>{{ user.age }}</h3>

<div>---------------------------------</div>
<h1>watchEffect</h1>
</template>
