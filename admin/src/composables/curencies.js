import { fetchCurrency } from '@/services/api'
import { ref } from 'vue'



export function useCurrency(currencyId) {
    const currency = ref(null)
    const error = ref(null)
    const isLoading = ref(false)
  
    async function fetchData() {
      isLoading.value = true
  
      try {
        const response = await fetchCurrency(currencyId)
        currency.value = response
      } catch (err) {
        error.value = message
      } finally {
        isLoading.value = false
      }
    }
  
    fetchData()
  
    return { currency, error, isLoading }
  }