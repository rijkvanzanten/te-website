<template>
  <div>
    <div
      id="bg-pattern"
      :style="{
        color: `var(--${color}-600)`,
        textShadow: `-4px 2px var(--${shadowColor}-600)`
      }"
    >
      {{ pattern }}
    </div>
    <h1 id="logo">Tech:Ethics</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import patterns from "../patterns/";

export default {
  name: "background-pattern",
  computed: {
    ...mapGetters(["frontWindow"]),
    pattern() {
      const language = "en";
      return patterns[language][this.frontWindow.name];
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
        case "blue":
        case "yellow":
          return "orange";
        case "purple":
          return "green";
        default:
          return "yellow";
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

  transition: color 200ms var(--transition);

  font-family: "Source Code Pro", monospace;
  font-size: 10px;
  font-weight: 800;
}

#logo {
  font-size: 8vw;
  color: var(--black);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  mix-blend-mode: overlay;
}
</style>
