<template>
  <div
    id="bg-pattern"
    :style="{
      color: `var(--${color}-600)`,
      textShadow: `-4px 2px var(--${shadowColor}-600)`
    }"
  >
    {{ pattern }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import defaultPattern from "raw-loader!../patterns/default.txt";

export default {
  name: "background-pattern",
  computed: {
    ...mapGetters(["frontWindow"]),
    pattern() {
      return defaultPattern;
    },
    color() {
      return this.frontWindow.color;
    },
    shadowColor() {
      switch (this.color) {
        case "red":
        case "orange":
        case "green":
          return "yellow";
          break;
        case "blue":
        case "yellow":
          return "orange";
        default:
          return "red";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#bg-pattern {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  user-select: none;
  pointer-events: none;
  word-break: break-all;

  font-family: "Source Code Pro", monospace;
  font-size: 1.6vw;
  font-weight: 800;

  transition: color 200ms var(--transition);

  @media (orientation: portrait) {
    font-size: 1.6vh;
  }
}
</style>
