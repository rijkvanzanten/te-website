<template>
  <div id="menubar">
    <button @click="toggleNavigationMenu()">Menu</button>
    <count-down />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CountDown from "./CountDown.vue";

export default {
  name: "menu-bar",
  components: {
    CountDown
  },
  methods: {
    ...mapActions(["toggleNavigationMenu"])
  }
};
</script>

<style lang="scss" scoped>
#menubar {
  position: absolute;
  left: 0;
  right: 0;
  height: var(--menu-bar-height);
  background-color: black;
  bottom: 0;
}
</style>
