<script setup>
import { getCurrencies } from '@/services/api';
import { ref } from 'vue';

const devises = ref(null);
async function fetchData() {
  const response = await getCurrencies()
  devises.value = response
}
fetchData();



</script>

<template>
  <v-container>
  <v-table
    fixed-header
    height="300px"
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
        <td class="text-right"><v-btn prepend-icon="mdi-file-edit" color="primary" :to="`/update-currency/${item.id}`">Edit</v-btn></td>
        <td><v-btn prepend-icon="mdi-delete" color="red" @click="handleButtonDelete(item)">Delete</v-btn></td>
      </tr>
    </tbody>
  </v-table>
</v-container>
</template>
