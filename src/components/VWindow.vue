<template>
  <article
    v-show="show"
    class="window"
    @mousedown="dragStart"
    @touchstart="dragStart"
    :style="{ transform: `translate3d(${left}px, ${top}px, 0px)`, zIndex }">
    <button @click.stop.prevent="closeWindow(page)"><img src="../assets/close.svg" alt="" /></button>
    <component :is="'p-' + page" />
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
import throttle from "lodash.throttle";

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
  computed: {
    ...mapState(["windows"]),
    window() {
      return this.windows[this.page];
    },
    show() {
      return this.window.active;
    },
    zIndex() {
      return 100 - this.window.sort;
    }
  },
  created() {
    this.left = this.windows[this.page].left;
    this.top = this.windows[this.page].top;

    this.drag = throttle(this.drag, 12); // Just under 60fps. Jankfree dragging
  },
  methods: {
    ...mapActions(["closeWindow", "setLastPosition", "bringToFront"]),
    dragStart(event) {
      event.preventDefault();
      this.offsetX = event.clientX;
      this.offsetY = event.clientY;

      document.addEventListener("mouseup", this.dragEnd);
      document.addEventListener("touchend", this.dragEnd);
      document.addEventListener("mousemove", this.drag);
      document.addEventListener("touchmove", this.drag);

      this.bringToFront(this.page);
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

<style lang="scss" scoped>
.window {
  background-color: #333;
  position: absolute;
  color: white;
  width: max-content;
  padding: 10px 20px;
  touch-action: none;
  user-select: none;
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);

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
