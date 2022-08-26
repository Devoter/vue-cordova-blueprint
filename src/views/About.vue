<template>
  <v-card flat>
    <v-card-text>
      <p>
        This is a blueprint for cordova applications with support of Vue, Vue Composition API, Vue Router, Vuetify, SASS, and
        TypeScript.
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue';

import { COPY_YEAR, VERSION } from '@/constants';

function setup() {
  const title = inject<Ref<string>>('title')!;

  title.value = 'About';

  return { COPY_YEAR, VERSION };
}

export default defineComponent({ setup });
</script>
