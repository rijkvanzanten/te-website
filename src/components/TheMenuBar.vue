<template>
  <div id="menubar">
    <button
      id="toggle-menu"
      :class="{ active: navigationMenuActive }"
      @click="toggleNavigationMenu();"
    >
      {{ $t("menu") }}
    </button>
    <a href="https://www.eventbrite.com/e/techethics-tickets-52506837364">{{
      $t("tickets")
    }}</a>
    <count-down />
    <language-switcher />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CountDown from "./CountDown.vue";
import LanguageSwitcher from "./TheLanguageSwitcher.vue";

export default {
  name: "menu-bar",
  components: {
    CountDown,
    LanguageSwitcher
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
  box-shadow: 0 -10px 70px 4px rgba(0, 0, 0, 0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);

  button,
  a {
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

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
}
</style>
