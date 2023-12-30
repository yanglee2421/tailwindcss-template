// Vue Imports
import * as Vue from "vue";

// Acl Imports
import { defineAbilityFor } from "./defineAbilityFor";
import { abilitiesPlugin } from "@casl/vue";

export const AclPlugin: Vue.Plugin = {
  install(app) {
    app.use(abilitiesPlugin, defineAbilityFor(""));
  },
};
