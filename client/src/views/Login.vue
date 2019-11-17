<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="text"
                :value="loginEmail"
                @input="setLoginEmail"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                append-icon="mdi-eye-off"
                type="password"
                :value="loginPassword"
                @input="setLoginPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-alert type="error" :value="loginError">{{ loginError }}</v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="login">
              <v-icon class="mr-2">mdi-fingerprint</v-icon>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'loginEmail',
      'loginPassword',
      'loginError',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setLoginEmail',
      'setLoginPassword',
      'setLoginError',
    ]),
    ...mapActions('authentication', [
      'login',
    ]),
  },
};
</script>
