import { fetchPairs } from '@/services/api'
import { ref } from 'vue'



export function usePairs(currencyId) {
    const pairs = ref(null)
    const error = ref(null)
    const isLoading = ref(false)
  
    async function fetchData() {
      isLoading.value = true
  
      try {
        const response = await fetchPairs(currencyId)
        pairs.value = response
      } catch (err) {
        error.value = message
      } finally {
        isLoading.value = false
      }
    }
  
    fetchData()
  
    return { pairs, error, isLoading }
  }