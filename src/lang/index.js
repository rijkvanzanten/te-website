import Vue from "vue";
import Vuei18n from "vue-i18n";

import en from "./english";
import ja from "./japanese";

Vue.use(Vuei18n);

const messages = {
  en,
  ja
};

const i18n = new Vuei18n({
  messages,
  locale: "en"
});

export default i18n;
