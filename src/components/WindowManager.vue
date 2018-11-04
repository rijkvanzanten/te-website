<template>
  <div id="window-manager">
    <v-window>
      <h1>Hello World</h1>
    </v-window>
  </div>
</template>

<script>
import VWindow from "./VWindow.vue";

export default {
  name: "window-manager",
  components: {
    VWindow
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
