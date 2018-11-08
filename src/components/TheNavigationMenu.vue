<template>
  <nav v-show="navigationMenuActive" id="navigation-menu">
    <ul>
      <a href="#">Link</a>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navigation-menu",
  computed: mapState(["navigationMenuActive"])
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
