<template>
  <article v-drag class="window">
    <button @click="closeWindow(page)"><img src="../assets/close.svg" alt="" /></button>
    <component :is="'p-' + page" />
  </article>
</template>

<script>
import { mapActions } from "vuex";

import drag from "@branu-jp/v-drag";

export default {
  name: "v-window",
  props: {
    page: {
      type: String,
      required: true
    }
  },
  directives: {
    drag
  },
  methods: {
    ...mapActions(["closeWindow"])
  }
};
</script>

<style lang="scss">
.window {
  background-color: black;
  position: relative;
  color: white;
  width: max-content;
  padding: 10px 20px;
  touch-action: none;
  user-select: none;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: 0;

    img {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
