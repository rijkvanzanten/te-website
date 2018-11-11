<template>
  <nav
    v-show="navigationMenuActive"
    id="navigation-menu"
    v-click-outside="closeIfActive"
  >
    <ul>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('about');">About</a>
      </li>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('speakers');"
          >Speakers</a
        >
      </li>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('schedule');"
          >Schedule</a
        >
      </li>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('venue');">Venue</a>
      </li>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('attendees');"
          >Attendees</a
        >
      </li>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('contact');"
          >Contact</a
        >
      </li>
      <li>
        <a href="#" @click.prevent="openWindowAndCloseMenu('tickets');"
          >Ticket Info</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "navigation-menu",
  computed: mapState(["navigationMenuActive"]),
  methods: {
    ...mapActions(["openWindow", "toggleNavigationMenu"]),
    closeIfActive() {
      if (this.navigationMenuActive) {
        this.toggleNavigationMenu(false);
      }
    },
    openWindowAndCloseMenu(name) {
      this.openWindow(name);
      this.toggleNavigationMenu(false);
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (
            !(
              el == event.target ||
              el.contains(event.target) ||
              event.target.getAttribute("id") === "toggle-menu"
            )
          ) {
            vnode.context[binding.expression](event);
          }
        };

        window.addEventListener("mousedown", el.clickOutsideEvent);
      },
      unbind(el) {
        window.removeEventListener("mousedown", el.clickOutsideEvent);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#navigation-menu {
  position: absolute;
  background-color: var(--dark-gray);
  left: 0;
  bottom: var(--menu-bar-height);
  width: 400px;
  z-index: 500;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.5);
}
</style>
