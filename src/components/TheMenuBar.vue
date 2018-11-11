<template>
  <div id="menubar">
    <button
      id="toggle-menu"
      :class="{ active: navigationMenuActive }"
      @click="toggleNavigationMenu();"
    >
      {{ $t("menu") }}
    </button>
    <count-down />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CountDown from "./CountDown.vue";

export default {
  name: "menu-bar",
  components: {
    CountDown
  },
  methods: mapActions(["toggleNavigationMenu"]),
  computed: mapState(["navigationMenuActive"])
};
</script>

<style lang="scss" scoped>
#menubar {
  position: absolute;
  left: 0;
  right: 0;
  height: var(--menu-bar-height);
  background-color: var(--gray);
  bottom: 0;
  z-index: 500;

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 800;
    height: 100%;
    padding: 0 30px;
    float: left;
    border-right: 2px solid var(--dark-gray);
    cursor: pointer;

    &:hover {
      background-color: var(--dark-gray);
    }

    &.active {
      background-color: var(--black);
    }
  }
}
</style>
