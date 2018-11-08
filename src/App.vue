<template>
  <div id="app">
    <window-manager />
    <navigation-menu />
    <menu-bar />
  </div>
</template>

<script>
import WindowManager from "./components/TheWindowManager.vue";
import MenuBar from "./components/TheMenuBar.vue";
import NavigationMenu from "./components/TheNavigationMenu.vue";

export default {
  name: "app",
  components: {
    WindowManager,
    MenuBar,
    NavigationMenu
  }
};
</script>
