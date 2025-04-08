import {ref} from 'vue'

export const useCounter = () => {
  const count = ref(0)

  const increase = () => { count.value++ }
  const decrease = () => {count.value--}

  return { count, increase, decrease }
}