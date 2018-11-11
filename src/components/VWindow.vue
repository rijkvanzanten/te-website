<template>
  <article
    v-show="show"
    class="window"
    :class="[{ active: frontWindow }, color]"
    @mousedown="dragStart"
    @touchstart="dragStart"
    :style="{ transform: `translate3d(${left}px, ${top}px, 0px)`, zIndex }"
  >
    <button @click.stop.prevent="closeWindow(page);">
      <svg viewBox="0 0 10 10" class="close-icon">
        <path
          d="m7.1 1.4 1.4 1.4-5.6 5.6-1.4-1.4zm-4.2 0l5.6 5.6-1.4 1.4-5.6-5.6z"
        />
      </svg>
    </button>
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
    },
    color: {
      type: String,
      default: null
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
    },
    frontWindow() {
      return this.window.sort === 0;
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

    transition: transform 180ms var(--transition);

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    &:active {
      transform: scale(1);
    }
  }

  .close-icon {
    fill: var(--gray);
    transition: fill 200ms var(--transition-out);
  }

  background-color: var(--dark-gray);

  transition: background-color 200ms var(--transition-out);

  /deep/ h2 {
    transition: color 200ms var(--transition-out);
    color: var(--light-gray);
  }

  &.purple {
    background-color: var(--purple-900);

    /deep/ h2 {
      color: var(--purple-700);
    }

    .close-icon {
      fill: var(--purple-700);
    }
  }

  &.red {
    background-color: var(--red-900);

    /deep/ h2 {
      color: var(--red-700);
    }

    .close-icon {
      fill: var(--red-700);
    }
  }

  &.orange {
    background-color: var(--orange-900);

    /deep/ h2 {
      color: var(--orange-700);
    }

    .close-icon {
      fill: var(--orange-700);
    }
  }

  &.yellow {
    background-color: var(--yellow-900);

    /deep/ h2 {
      color: var(--yellow-700);
    }

    .close-icon {
      fill: var(--yellow-700);
    }
  }

  &.green {
    background-color: var(--green-900);

    /deep/ h2 {
      color: var(--green-700);
    }

    .close-icon {
      fill: var(--green-700);
    }
  }

  &.blue {
    background-color: var(--blue-900);

    /deep/ h2 {
      color: var(--blue-700);
    }

    .close-icon {
      fill: var(--blue-700);
    }
  }

  &.active {
    background-color: var(--gray);

    transition: background-color 200ms var(--transition-in);

    /deep/ h2 {
      transition: color 200ms var(--transition-in);
      color: var(--white);
    }

    .close-icon {
      fill: var(--white);
      transition: fill 200ms var(--transition-in);
    }

    &.purple {
      background-color: var(--purple-700);

      /deep/ h2 {
        color: var(--purple-500);
      }
    }

    &.red {
      background-color: var(--red-700);

      /deep/ h2 {
        color: var(--red-500);
      }
    }

    &.orange {
      background-color: var(--orange-700);

      /deep/ h2 {
        color: var(--orange-500);
      }
    }

    &.yellow {
      background-color: var(--yellow-700);

      /deep/ h2 {
        color: var(--yellow-500);
      }
    }

    &.green {
      background-color: var(--green-700);

      /deep/ h2 {
        color: var(--green-500);
      }
    }

    &.blue {
      background-color: var(--blue-700);

      /deep/ h2 {
        color: var(--blue-500);
      }
    }
  }
}
</style>
