// Acl Imports
import { defineAbilityFor } from "./define-ability-for";
import { provideAbility } from "@casl/vue";

// Store Imports
import { useStoreLogin } from "@/hooks";

// Vue Imports
import * as Vue from "vue";

export function useAclProvider() {
  // Acl Hooks
  const { state } = useStoreLogin();
  const acl = defineAbilityFor(state.usr?.role || "");
  provideAbility(acl);

  Vue.watchPostEffect(() => {
    acl.update(defineAbilityFor(state.usr?.role || "").rules);
  });
}
