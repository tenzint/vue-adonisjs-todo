<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
      app
    >

      <v-toolbar-title class="mr-4">Vue Todo</v-toolbar-title>

      <v-btn text v-if="isLoggedIn">
        <v-icon class="mr-2">mdi-playlist-check</v-icon>
        Project
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text to="/register" v-if="!isLoggedIn">
        <v-icon class="mr-2">mdi-account-box</v-icon>
        Register
      </v-btn>

      <v-btn text v-if="!isLoggedIn">
        <v-icon class="mr-2">mdi-fingerprint</v-icon>
        Login
      </v-btn>
      <v-btn text v-if="isLoggedIn">
        <v-icon class="mr-2">mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>

<style>

</style>
