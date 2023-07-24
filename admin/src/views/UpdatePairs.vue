<script setup>
import { toRefs, defineProps } from 'vue';
import { usePairs } from "@/composables/pairs.js";
import { updatePairs } from "@/services/api";
import { ref } from 'vue';

const props = defineProps(['currencyId']);

const { currencyId } = toRefs(props)

const { pairs,} = usePairs(currencyId.value)

const form = ref({
  from_currency: "",
  to_currency: "",
  conversion: ""
});

async function validate(id) {
    try {
        if(pairs.value) {
            const data = {
                from_currency: pairs.value.from_currency.code,
                to_currency: pairs.value.to_currency.code,
                currency_rate: pairs.value.currency_rate
            }
            console.log(data);
            const response = await updatePairs (id, data) 
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <v-container class="mx-auto">
    <v-sheet width="300" class="mx-auto">
      <v-form ref="form">
        <v-text-field v-if="pairs"
          v-model="pairs.from_currency.code"
          :counter="10"
          label="From"
          required
        ></v-text-field>
  
        <v-text-field v-if="pairs"
          v-model="pairs.to_currency.code"
          :counter="3"
          label="To"
          required
        ></v-text-field>

        <v-text-field v-if="pairs"
          v-model="pairs.currency_rate"
          :counter="3"
          label="Conversion rate"
          required
        ></v-text-field>
  
        <div class="d-flex flex-column">
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="()=>validate(pairs.id)">
            Validate
          </v-btn>
          <v-btn
            color="warning"
            class="mt-4"
            block
            to="/pairs">
            All currencies
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
</v-container>
</template>