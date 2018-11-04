<template>
  <div v-drag class="window" @click="click">
    <button><img src="../assets/close.svg" alt="" /></button>
    <slot />
  </div>
</template>

<script>
import drag from "@branu-jp/v-drag";

export default {
  name: "v-window",
  directives: {
    drag
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
