<template>
  <v-app>
    <v-navigation-drawer persistent v-model="drawer" :clipped="clipped" app>
      <v-list dense nav>
        <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.route" :disabled="item.disabled">
          <v-list-item-action>
            <v-icon v-html="item.icon" :disabled="item.disabled" />
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" :disabled="item.disabled" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <!-- <div class="d-flex align-center">
        <span v-if="deviceReady">READY</span>
        <span v-else>NOT READY</span>
      </div> -->

      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <v-col>v{{ VERSION }}</v-col>
      <v-col class="copy-text">&copy; {{ AUTHOR_NAME }}, {{ COPY_YEAR }}</v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed, ref, provide } from 'vue';

import { COPY_YEAR, VERSION, AUTHOR_NAME } from '@/constants';

function setup() {
  const drawer = ref(false);
  const clipped = ref(false);
  const title = ref('');
  const deviceReady = ref(false);

  provide('title', title);

  const items = computed(() => {
    return [
      {
        title: 'Home',
        route: '/'
      },
      {
        title: 'About',
        route: '/about'
      }
    ];
  });

  document.addEventListener(
    'DOMContentLoaded',
    () =>
      document.addEventListener(
        'deviceready',
        () => {
          window.screen.orientation.lock('portrait');
          deviceReady.value = true;
        },
        false
      ),
    false
  );

  return { drawer, clipped, title, deviceReady, items, COPY_YEAR, VERSION, AUTHOR_NAME };
}

export default defineComponent({ setup });
</script>

<style lang="scss" scoped>
.copy-text {
  text-align: right;
  white-space: nowrap;
}
</style>
