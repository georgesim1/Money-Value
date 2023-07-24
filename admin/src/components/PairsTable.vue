<script setup>
import { getPairs, getCurrencies, createPair, deletePair  } from '@/services/api';
import { ref, onMounted } from 'vue';

const pairs = ref(null);
async function fetchData() {
  const response = await getPairs()
  pairs.value = response
  console.log(pairs);
}
fetchData();

// handleButtonDelete function
const handleButtonDelete = async (item) => {
  console.log(`Delete button clicked for item with id: ${item.id}`);
  // Call the deletePair function from your api.
  await deletePair(item.id);
  // Fetch pairs again to update the list
  fetchData();
};

const currencies = ref([]);
const newPair = ref({ from: '', to: '', rate: 1 });
const isLoading = ref(true); // Loading state

// Fetch currencies when component is mounted
onMounted(async () => {
  const response = await getCurrencies();
  currencies.value = response;
  isLoading.value = false; // Set loading to false after data is fetched
});

const handleCreatePair = async () => {
  if (newPair.value.from && newPair.value.to && newPair.value.rate) {
    // Create pairData object
    const pairData = {
  from_currency: newPair.value.from.code,
  to_currency: newPair.value.to.code,
  currency_rate: newPair.value.rate,
};
  
    // Call the createPair API to create the new pair
    await createPair(pairData);
  
    // Reset the form
    newPair.value = { from: null, to: null, rate: 1 };
  
    // Fetch pairs again to update the list
    fetchData();
  }
};
</script>

<template>
  <v-container style="max-width: 700px;padding: 50px 0px 0px 0px;">
  <v-table
    fixed-header
    height="600px"
  >
    <thead>
      <tr>
        <th class="text-left">
          To
        </th>
        <th class="text-left">
          From
        </th>
        <th class="text-right">
          Conversion rate          
        </th>
        <th class="text-right">
        </th>
        <th class="text-right">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in pairs"
        :key="item.from"
      >
        <td>{{ item.from_currency.code }}</td>
        <td>{{ item.to_currency.code }}</td>
        <td>{{ item.currency_rate }}</td>
        <td class="text-right"><v-btn prepend-icon="mdi-file-edit" color="primary" :to="`/update-pairs/${item.id}`">Edit</v-btn></td>
        <td><v-btn prepend-icon="mdi-delete" color="red" @click="() => handleButtonDelete(item)">Delete</v-btn></td>
      </tr>
    </tbody>
   
  </v-table>
</v-container>
<v-container style="max-width: 700px;padding: 50px 0px 0px 0px;">

    <!-- Show a loading message while data is being fetched -->
    <div v-if="isLoading">Loading...</div>

<!-- Render the form only when data is ready -->
<div v-else>
  <v-form @submit.prevent="handleCreatePair">
    <v-select label="From" v-model="newPair.from" :items="currencies" item-text="code" item-value="code"></v-select>
    <v-select label="To" v-model="newPair.to" :items="currencies" item-text="code" item-value="code"></v-select>
    <v-text-field label="Conversion Rate" v-model.number="newPair.rate"></v-text-field>
    <v-btn type="submit" color="primary">Create</v-btn>
  </v-form>
</div>

  </v-container>
</template>