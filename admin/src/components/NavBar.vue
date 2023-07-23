<script setup>
import { store } from "@/services/auth.js";

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
          <v-list-item prepend-icon="mdi-view-dashboard" title="Pairs" to="/conversion"></v-list-item>
          <v-list-item prepend-icon="mdi-sync" title="Conversion" to="/conversion"></v-list-item>
        </v-list>

        <template v-if="!store.user" v-slot:append>
        <v-list-item @click="store.handleLogout" prepend-icon="mdi-logout" title="Logout"></v-list-item>
        </template>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>