<template>
  <Panel title="Tasks" class="mt-4">
    <div
      class="tasks mt-2"
      v-for="task in tasks"
      :key="task.id"
    >
      <EditableRecord
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onInput="setTaskDescription({
          task,
          description: $event,
        })"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      >
        <v-icon
          @click="checkClicked(task)"
        >
          {{ task.completed ? 'mdi-check-box-outline' : 'mdi-checkbox-blank-outline'}}
        </v-icon>
      </EditableRecord>
    </div>
    <CreateRecord
      placeholder="I need to..."
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
      'deleteTask',
      'saveTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setEditMode',
      'setTaskDescription',
      'toggleCompleted',
    ]),
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style>
.tasks {
  font-size: 18px;
}
</style>
