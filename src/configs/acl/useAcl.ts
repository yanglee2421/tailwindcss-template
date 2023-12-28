// Acl Imports
import { useAbility } from "@casl/vue";

// Types Imports
import { AppAbility } from "./defineAbilityFor";

export function useAcl() {
  return useAbility<AppAbility>();
}
