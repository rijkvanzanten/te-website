<template>
  <div id="window-manager">
    <v-window
      v-for="page in pages"
      :page="page"
      :key="page"
      :color="windows[page].color || null"
      :close="windows[page].close"
      :name="$t(windows[page].name)"
      :style="{ height: windows[page].height + 'px' }"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import VWindow from "./VWindow.vue";

export default {
  name: "window-manager",
  components: {
    VWindow
  },
  computed: {
    ...mapState(["windows"]),
    pages() {
      return Object.keys(this.windows).sort();
    }
  }
};
</script>

<style lang="scss">
#window-manager {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
