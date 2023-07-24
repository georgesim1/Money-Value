<script setup>
import { ref, onMounted } from 'vue';
import { getPairs, getCurrencies } from '@/services/api';

const currencies = ref([]);
const pairs = ref([]);
const fromCurrency = ref(null);
const toCurrency = ref(null);
const amount = ref(null);
const convertedAmount = ref(null);

// Fetch currencies and pairs when component is mounted
onMounted(async () => {
  const responseCurrencies = await getCurrencies();
  const responsePairs = await getPairs();
  currencies.value = responseCurrencies;
  pairs.value = responsePairs;
});

const handleConversion = () => {
  convertedAmount.value = amount.value * findConversionRate(fromCurrency.value, toCurrency.value);
};

const findConversionRate = (from, to) => {
  const pair = pairs.value.find(p => p.from_currency.code === from && p.to_currency.code === to);
  return pair ? pair.currency_rate : 1;
};
</script>

<template>
<v-container style="max-width: 500px;padding: 0px 0px 0px 0px;">
  <h1>Currency Converter</h1>
  <v-form @submit.prevent="handleConversion">
    <v-select label="From" v-model="fromCurrency" :items="currencies" item-text="code" item-value="code"></v-select>
    <v-select label="To" v-model="toCurrency" :items="currencies" item-text="code" item-value="code"></v-select>
    <v-text-field label="Amount" v-model.number="amount"></v-text-field>
    <v-btn type="submit" color="primary">Convert</v-btn>
  </v-form>
  <p v-if="convertedAmount">{{ amount }} {{ fromCurrency }} is approximately {{ convertedAmount }} {{ toCurrency }}</p>
</v-container>
</template>