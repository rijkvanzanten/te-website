<template>
  <nav
    v-show="navigationMenuActive"
    id="navigation-menu"
    v-click-outside="closeIfActive"
  >
    <ul>
      <li
        :class="{ active: activePages.includes('speakers') }"
        data-page="speakers"
      >
        <a href="#" @click.prevent="openWindowAndCloseMenu('speakers');">
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 56h19v-4h10v4h-9v4H8v-8h4v4zm13-19h-4V25h18v12h-4v3H25v-3zm0-1h10v-7H25v7zm-9 8h4v4h-4v4h-4v-8h4zm4-44h20v4H20V0zm-8 4h8v4h-8V4zM8 8h4v4H8V8zm0 32h4v4H8v-4zm40 4h4v4h-4v-4zm0 4v4h-7v-4h7zm0-40h4v4h-4V8zm4 4h4v5h-4v-5zm0 27h4v5h-4v-5zM4 35h4v5H4v-5zm0-23h4v5H4v-5zm8 4h5v9h-5v-9zm31 0h5v9h-5v-9zM0 17h4v18H0V17zm56 0h4v22h-4V17zM40 4h8v4h-8V4z"
              fill-rule="nonzero"
            />
          </svg>
          <span>{{ $t("speakers") }}</span></a
        >
      </li>
      <li
        :class="{ active: activePages.includes('schedule') }"
        data-page="schedule"
      >
        <a href="#" @click.prevent="openWindowAndCloseMenu('schedule');"
          ><svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28 31H17v-4h11V8h4v23h-4zM18 0h24v4H18V0zm0 56h24v4H18v-4zM42 4h6v4h-6V4zM12 4h6v4h-6V4zm30 48h6v4h-6v-4zm6-44h4v4h-4V8zM8 8h4v4H8V8zm40 40h4v4h-4v-4zm4-36h4v6h-4v-6zM4 12h4v6H4v-6zm48 30h4v6h-4v-6zM18 52v4h-6v-4h6zm-6-4v4H8v-4h4zm-4-6v6H4v-6h4zM0 18h4v24H0V18zm56 0h4v24h-4V18z"
              fill-rule="nonzero"
            /></svg
          ><span>{{ $t("schedule") }}</span></a
        >
      </li>
      <li :class="{ active: activePages.includes('venue') }" data-page="venue">
        <a href="#" @click.prevent="openWindowAndCloseMenu('venue');">
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 60H0V22h18V0h42v60H18zm0-4V26H3.5v30H18zm4-52v53h34V4H22zm4 6h6v6h-6v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6zM26 20h6v6h-6v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6zM26 30h6v6h-6v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6zM26 40h6v6h-6v-6zM8 31h6v6H8v-6zm0 10h6v6H8v-6zm27-1h8v17h-8V40zm11 0h6v6h-6v-6z"
              fill-rule="nonzero"
            />
          </svg>
          <span>{{ $t("venue") }}</span>
        </a>
      </li>
      <li
        :class="{ active: activePages.includes('attendees') }"
        data-page="attendees"
      >
        <a href="#" @click.prevent="openWindowAndCloseMenu('attendees');"
          ><svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 36v4h-7v-4h3v-3h4v3zm-20 0h3v4H8v-7h4v3zm32 8v-4h4v4h4v4h-4v4h-4v-4h-4v-4h4zm-12 8H0v-8h4v4h28v-8h4v12h-4zM12 0h16v4H12V0zm28 32h12v4H40v-4zm0 24h12v4H40v-4zM8 4h4v4H8V4zM4 8h4v4H4V8zm-4 4h4v17H0V12zm36 0h4v17h-4V12zm-4-4h4v4h-4V8zM4 29h4v4H4v-4zm28 0h4v4h-4v-4zm20 7h4v4h-4v-4zm0 16h4v4h-4v-4zM36 36h4v4h-4v-4zm0 16h4v4h-4v-4zM4 40h4v4H4v-4zm52 0h4v12h-4V40zM28 4h4v4h-4V4z"
              fill-rule="nonzero"
            /></svg
          ><span>{{ $t("attendees") }}</span></a
        >
      </li>
      <li
        :class="{ active: activePages.includes('contact') }"
        data-page="contact"
      >
        <a href="#" @click.prevent="openWindowAndCloseMenu('contact');"
          ><svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 52h7v4h-8v-3h-3v-4h4v3zM4 8h16v4H4V8zm17-8h14v4H21V0zm14 4h9v4h-9V4zm9 4h4v4h-4V8zm4 4h4v4h-4v-4zm-8 7h4v4h-4v-4zm-4-4h4v4h-4v-4zm-8-4h8v4h-8v-4zM0 12h4v21H0V12zm4 21h4v8H4v-8zm8-7h4v7h-4v-7zm8-14h4v10h-4V12zm-4 10h4v4h-4v-4zm0 11h4v4h-4v-4zm4 4h4v4h-4v-4zm4 4h4v4h-4v-4zM8 41h4v4H8v-4zm4 4h4v4h-4v-4zm16 0h6v4h-6v-4zm-1 11h21v4H27v-4zm7-15h4v4h-4v-4zm4-4h10v4H38v-4zm10 4h4v15h-4V41zm4-25h4v7h-4v-7zm4 7h4v17h-4V23zm-12 0h4v8h-4v-8z"
              fill-rule="nonzero"
            /></svg
          ><span>{{ $t("contact") }}</span></a
        >
      </li>
      <li
        :class="{ active: activePages.includes('tickets') }"
        data-page="tickets"
      >
        <a href="#" @click.prevent="openWindowAndCloseMenu('tickets');"
          ><svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 56v-4h4v4h19v4H8v-4zm8-8v4h-4v-8h8v4h-4zm4-48h20v4H20V0zm-8 4h8v4h-8V4zm19 48h9v4h-9v-4zm9-4h8v4h-8v-4zM8 8h4v4H8V8zm0 32h4v4H8v-4zm-4-5h4v5H4v-5zm0-23h4v5H4v-5zm-4 5h4v18H0V17zm56 0h4v22h-4V17zm-4-5h4v5h-4v-5zm0 27h4v5h-4v-5zM48 8h4v4h-4V8zm0 36h4v4h-4v-4zM28 12h5v5h-5v-5zm0 9h5v20h-5V21zM40 4h8v4h-8V4z"
              fill-rule="nonzero"
            /></svg
          ><span>{{ $t("tickets") }}</span></a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "navigation-menu",
  computed: {
    ...mapState(["navigationMenuActive"]),
    activePages() {
      return Object.keys(this.$store.state.windows).filter(
        name => this.$store.state.windows[name].active
      );
    }
  },
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
  width: 360px;
  z-index: 510;
  box-shadow: 5px -5px 4px 0 rgba(0, 0, 0, 0.5);

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;

    li {
      flex-basis: 180px;

      a {
        padding: 40px 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-decoration: none;
        font-size: 1.2em;
        cursor: pointer;

        span {
          text-transform: uppercase;
          margin-top: 10px;
        }

        &:hover {
          background-color: var(--black);
        }
      }
    }
  }
}

svg {
  fill: var(--white);
}

[data-page="speakers"] a:hover,
[data-page="speakers"].active a {
  color: var(--orange-500);

  svg {
    fill: var(--orange-500);
  }
}

[data-page="schedule"] a:hover,
[data-page="schedule"].active a {
  color: var(--green-500);

  svg {
    fill: var(--green-500);
  }
}

[data-page="venue"] a:hover,
[data-page="venue"].active a {
  color: var(--blue-500);

  svg {
    fill: var(--blue-500);
  }
}

[data-page="attendees"] a:hover,
[data-page="attendees"].active a {
  color: var(--purple-500);

  svg {
    fill: var(--purple-500);
  }
}

[data-page="tickets"] a:hover,
[data-page="tickets"].active a {
  color: var(--red-500);

  svg {
    fill: var(--red-500);
  }
}

[data-page="contact"] a:hover,
[data-page="contact"].active a {
  color: var(--yellow-500);

  svg {
    fill: var(--yellow-500);
  }
}
</style>
