<template>
  <div id="menubar">
    <count-down />
  </div>
</template>

<script>
import CountDown from "./MenuBarCountDown.vue";

export default {
  name: "menu-bar",
  components: {
    CountDown
  }
};
</script>

<style lang="scss" scoped>
#menubar {
  position: absolute;
  left: 0;
  right: 0;
  height: 60px;
  background-color: black;
  bottom: 0;
}
</style>
