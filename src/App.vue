<template>
  <div id="app">
    <window-manager />
    <p>Psst, the windows are stored in localstorage. If you hit close, it'll be gone forever.</p>
  </div>
</template>

<script>
import WindowManager from "./components/WindowManager.vue";

export default {
  name: "app",
  components: {
    WindowManager
  }
};
</script>
