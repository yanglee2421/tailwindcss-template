import { useAbility } from "@casl/vue";
import { AppAbility } from "./defineAbilityFor";

export function useAcl() {
  return useAbility<AppAbility>();
}
