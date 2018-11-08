<template>
  <div id="app">
    <window-manager />
    <menu-bar />
  </div>
</template>

<script>
import WindowManager from "./components/WindowManager.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
  name: "app",
  components: {
    WindowManager,
    MenuBar
  }
};
</script>
