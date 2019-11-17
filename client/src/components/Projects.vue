<template>
  <Panel title="Projects" class="mt-4">
    <div
      v-for="project in projects"
      :key="project.id"
    >
      <v-layout row wrap class="mt-4">
        <v-flex xs9 class="test-xs-left pl-3">
          <span
            v-if="!project.isEditMode"
          >
            {{ project.title }}
          </span>
          <v-text-field
            autofocus
            v-if="project.isEditMode"
            :value="project.title"
            @keyup.enter="saveProject(project)"
            @input="setProjectTitle({
              project,
              title: $event,
            })"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon
            @click="setEditMode(project)"
            v-if="!project.isEditMode"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            @click="saveProject(project)"
            v-if="project.isEditMode"
          >
            mdi-check
          </v-icon>
          <v-icon
            @click="deleteProject(project)"
          >
            mdi-delete
          </v-icon>
        </v-flex>
      </v-layout>

    </div>
    <CreateRecord
      placeholder="My project name is..."
      @onInput="setNewProjectName"
      :value="newProjectName"
      @create="createProject"
    />
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';

export default {
  mounted() {
    this.fetchProjects();
  },
  components: {
    CreateRecord,
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'unsetEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProject',
      'saveProject',
      'deleteProject',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 18px;
}

.v-icon {
  cursor: pointer;
}

.v-icon:hover {
  color: #333;
}
</style>
