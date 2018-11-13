<template>
  <div id="language-switcher">
    <button
      :class="{ active: currentLang === 'en' }"
      id="lang-en"
      @click="setLang('en');"
    >
      EN
    </button>
    <button
      :class="{ active: currentLang === 'ja' }"
      id="lang-jp"
      @click="setLang('ja');"
    >
      JA
    </button>
  </div>
</template>

<script>
export default {
  name: "language-switcher",
  computed: {
    currentLang() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss" scoped>
#language-switcher {
  display: inline-flex;
  float: right;
  height: 100%;

  button {
    appearance: none;
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 20px;
    border-left: 2px solid var(--dark-gray);
    cursor: pointer;

    &.active {
      background-color: var(--dark-gray);
    }
  }
}
</style>
