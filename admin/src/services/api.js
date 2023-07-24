import axiosInstance from "@/services/axios";

export async function getCurrencies() {
    const response = await axiosInstance.get('/api/currencies')
    return response.data;
}

export async function fetchCurrency(currencyId){
    const response = await axiosInstance.get(`api/currencies/${currencyId}`)
    return response.data
  }

  export async function fetchPairs(currencyId){
    const response = await axiosInstance.get(`api/pairs/${currencyId}`)
    return response.data
  }

  export async function updateCurrency(currencyId, data){
    const response = await axiosInstance.put(`api/currencies/${currencyId}`, data)
    return response.data
  }

  export async function deleteCurrency(currencyId){
    const response = await axiosInstance.delete(`api/currencies/${currencyId}`)
    return response.data
  }

  export async function getPairs() {
    const response = await axiosInstance.get('/api/pairs')
    return response.data;
}

export async function createPair(){
  const response = await axiosInstance.post("api/pairs")
  return response.data
}

export async function deletePair(currencyId){
  const response = await axiosInstance.delete(`api/pairs/${currencyId}`)
  return response.data
}

export async function updatePairs(currencyId, data){
  const response = await axiosInstance.put(`api/pairs/${currencyId}`, data)
  return response.data
}


