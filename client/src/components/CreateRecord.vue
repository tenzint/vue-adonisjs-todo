<template>
  <v-layout row wrap>
    <v-flex xs8>
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create')"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs4>
      <v-btn
        @click="$emit('create')"
        class="pr-2 mt-2"
        color="green"
        dark
      >
        <v-icon class="px-2">mdi-plus-circle</v-icon>
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'placeholder',
    'value',
  ],
};
</script>

<style>

</style>
