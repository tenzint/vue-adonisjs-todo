<template>
  <Panel title="Projects">
    <div
      v-for="project in projects"
      :key="project.id"
    >
      {{ project.title }}
    </div>
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
          placeholder="My project name..."
          @input="setNewProjectName"
          :value="newProjectName"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn
          @click="createProject"
          class="pr-2 mt-2"
          color="green"
          dark
        >
          <v-icon class="px-2">mdi-plus-circle</v-icon>
          Create
        </v-btn>
      </v-flex>
    </v-layout>

  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
    ]),
    ...mapActions('projects', [
      'createProject',
    ]),
  },
};
</script>

<style>

</style>
