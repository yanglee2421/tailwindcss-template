// Acl Imports
import { useAbility } from "@casl/vue";

// Types Imports
import { AppAbility } from "./define-ability-for";

export function useAcl() {
  return useAbility<AppAbility>();
}
