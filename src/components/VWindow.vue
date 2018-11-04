<template>
  <article
    class="window"
    @mousedown="dragStart"
    @touchstart="dragStart"
    :style="{ left: left + 'px', top: top + 'px' }">
    <button @click="closeWindow(page)"><img src="../assets/close.svg" alt="" /></button>
    <component :is="'p-' + page" />
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "v-window",
  data() {
    return {
      top: 0,
      left: 0,
      offsetX: 0,
      offsetY: 0
    };
  },
  props: {
    page: {
      type: String,
      required: true
    }
  },
  computed: mapState(["positions"]),
  created() {
    this.left = this.positions[this.page].left;
    this.top = this.positions[this.page].top;
  },
  methods: {
    ...mapActions(["closeWindow", "setLastPosition"]),
    dragStart(event) {
      event.preventDefault();
      this.offsetX = event.clientX;
      this.offsetY = event.clientY;

      document.addEventListener("mouseup", this.dragEnd);
      document.addEventListener("touchend", this.dragEnd);
      document.addEventListener("mousemove", this.drag);
      document.addEventListener("touchmove", this.drag);
    },
    drag(event) {
      event.preventDefault();

      this.left = this.left - (this.offsetX - event.clientX);
      this.top = this.top - (this.offsetY - event.clientY);

      this.offsetX = event.clientX;
      this.offsetY = event.clientY;
    },
    dragEnd() {
      document.removeEventListener("mouseup", this.dragEnd);
      document.removeEventListener("touchend", this.dragEnd);
      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("touchmove", this.drag);

      this.setLastPosition({
        page: this.page,
        left: this.left,
        top: this.top
      });
    }
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

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
