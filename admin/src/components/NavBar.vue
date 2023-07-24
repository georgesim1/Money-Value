<script setup>
import { store } from "@/services/auth.js";
import { useRouter } from 'vue-router';

const router = useRouter();  // move this line outside of the gotoLogin function

// define gotoLogin
const gotoLogin = () => {
  router.push('/login');
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover rail
        class="bg-deep-purple"
        theme="dark"
        permanent
      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-sync" title="Devises" to="/home"></v-list-item>
          <v-list-item prepend-icon="mdi-currency-usd" title="Pairs" to="/pairs"></v-list-item>
          
        </v-list>

        <template v-if="store.user"  v-slot:append> <!-- if user is logged in -->
          <v-list-item @click="store.handleLogout" prepend-icon="mdi-logout" title="Logout"></v-list-item>
        </template>

        <template v-else v-slot:append> <!-- if user is not logged in -->
          <v-list-item @click="gotoLogin" prepend-icon="mdi-login" title="Login"></v-list-item>
        </template>
       
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>