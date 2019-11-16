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
                :value="registerEmail"
                @input="setRegisterEmail"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                append-icon="mdi-eye-off"
                type="password"
                :value="registerPassword"
                @input="setRegisterPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-alert type="error" :value="registerError">{{ registerError }}</v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="register">
              <v-icon class="mr-2">mdi-account-circle</v-icon>
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
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
      'setRegisterError',
    ]),
    ...mapActions('authentication', [
      'register',
    ]),
  },
};
</script>
