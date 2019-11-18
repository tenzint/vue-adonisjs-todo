<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs9 class="test-xs-left pl-3">
      <span
        @click="$emit('onClick')"
        v-if="!isEditMode"
      >
        {{ title }}
      </span>
      <v-text-field
        autofocus
        v-if="isEditMode"
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"

      >
      </v-text-field>
    </v-flex>
    <v-flex xs3>
      <v-icon
        @click="$emit('onEdit')"
        v-if="!isEditMode"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        @click="$emit('onSave')"
        v-if="isEditMode"
      >
        mdi-check
      </v-icon>
      <v-icon
        @click="$emit('onDelete')"
      >
        mdi-delete
      </v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'title',
    'record',
  ],
};
</script>

<style>
</style>
