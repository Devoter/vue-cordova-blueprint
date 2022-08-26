<template>
  <v-card flat height="100%">
    <v-card-text class="display_text">
      <div class="d-flex flex-column justify-space-between align-center">
        <v-img src="@/assets/logo.png" max-height="300" max-width="300" />
        <br />
        <p>Vue Cordova blueprint</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue';

function setup() {
  const title = inject<Ref<string>>('title')!;

  title.value = 'Home';

  return {};
}

export default defineComponent({ setup });
</script>
