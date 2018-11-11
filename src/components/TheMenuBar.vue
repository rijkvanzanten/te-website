<template>
  <div id="menubar" v-click-outside="closeIfActive">
    <button
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
  methods: {
    ...mapActions(["toggleNavigationMenu"]),
    closeIfActive() {
      if (this.navigationMenuActive) {
        this.toggleNavigationMenu(false);
      }
    }
  },
  computed: mapState(["navigationMenuActive"]),
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };

        window.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        window.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  }
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

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 800;
    height: 100%;
    padding: 0 30px;

    &:hover {
      background-color: var(--dark-gray);
    }

    &.active {
      background-color: var(--black);
    }
  }
}
</style>
