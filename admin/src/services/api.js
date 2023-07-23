import axiosInstance from "@/services/axios";

export async function getCurrencies() {
    const response = await axiosInstance.get('/api/currencies')
    return response.data;
}

export async function fetchCurrency(currencyId){
    const response = await axiosInstance.get(`api/currencies/${currencyId}`)
    return response.data
  }

  export async function updateCurrency(currencyId, data){
    const response = await axiosInstance.put(`api/currencies/${currencyId}`, data)
    return response.data
  }


