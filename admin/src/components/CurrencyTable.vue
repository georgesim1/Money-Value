<script setup>
import { getCurrencies, deleteCurrency } from '@/services/api';
import { ref, onMounted } from 'vue';

const devises = ref(null);

async function fetchData() {
  try {
    const response = await getCurrencies()
    devises.value = response
  } catch (error) {
    console.error('Failed to fetch currencies:', error);
  }
}

onMounted(fetchData);

const handleButtonDelete = async (item) => {
  console.log(`Delete button clicked for item with id: ${item.id}`);
  // Call the deleteCurrency function with the id of the item to delete
  try {
    await deleteCurrency(item.id);
    console.log('Deleted currency:', item.id);
    // After deleting successfully, fetch data again to update the table
    await fetchData();
  } catch (error) {
    console.error(`Failed to delete currency: ${error}`);
  }
};
</script>

<template>
  <v-container style="max-width: 700px;padding: 50px 0px 0px 0px;">
  <v-table
    fixed-header
    height="400px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Currency
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
        v-for="item in devises"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.currency_rate }}</td>
        <td class="text-right"><v-btn prepend-icon="mdi-file-edit" color="primary" :to="`/update-currency/${item.id}`">Edit</v-btn></td>
        <td><v-btn prepend-icon="mdi-delete" color="red" @click="() => handleButtonDelete(item)">Delete</v-btn></td>
      </tr>
    </tbody>
  </v-table>
</v-container>
</template>