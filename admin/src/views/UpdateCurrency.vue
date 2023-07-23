<script setup>
import { toRefs, defineProps } from 'vue';
import { useCurrency } from "@/composables/curencies.js";
import { updateCurrency } from "@/services/api";
import { ref } from 'vue';

const props = defineProps(['currencyId']);

const { currencyId } = toRefs(props)

const { currency, isLoading, error } = useCurrency(currencyId.value)

const form = ref({
  name: "",
  code: "",
});

 async function validate(id) {
    try {
        const data = {
        name: currency.value.name ,
        code: currency.value.code
    }
    console.log(data);
    const response = await updateCurrency (id, data) 
    console.log(response);
    } catch (error) {
        console.log(error);
    }

}
console.log(currency);

</script>

<template>
    <v-sheet width="300" class="mx-auto">
  
      <v-form ref="form">
        <v-text-field v-if="currency"
          v-model="currency.name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field v-if="currency"
          v-model="currency.code"
          :counter="3"
          :rules="currencyRules"
          label="Currency"
          required
        ></v-text-field>
  
        <div class="d-flex flex-column">
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="()=>validate(currency.id)">
            Validate
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </template>