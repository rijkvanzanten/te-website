<template>
  <nav v-show="navigationMenuActive" id="navigation-menu">
    <ul>
      <li><a href="#" @click.prevent="openWindow('about');">About</a></li>
      <li><a href="#" @click.prevent="openWindow('speakers');">Speakers</a></li>
      <li><a href="#" @click.prevent="openWindow('schedule');">Schedule</a></li>
      <li><a href="#" @click.prevent="openWindow('venue');">Venue</a></li>
      <li>
        <a href="#" @click.prevent="openWindow('attendees');">Attendees</a>
      </li>
      <li><a href="#" @click.prevent="openWindow('contact');">Contact</a></li>
      <li>
        <a href="#" @click.prevent="openWindow('tickets');">Ticket Info</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "navigation-menu",
  computed: mapState(["navigationMenuActive"]),
  methods: mapActions(["openWindow"])
};
</script>

<style lang="scss" scoped>
#navigation-menu {
  position: absolute;
  background-color: black;
  left: 0;
  bottom: var(--menu-bar-height);
  width: 400px;
}
</style>
