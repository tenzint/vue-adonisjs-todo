<template>
  <v-app>
    <Headers/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Headers from '@/components/Headers.vue';

export default {
  name: 'App',
  components: {
    Headers,
  },
  data: () => ({
    //
  }),
};
</script>
