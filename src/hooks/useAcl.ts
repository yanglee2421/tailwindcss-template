import { useAbility } from "@casl/vue";
import type { AppAbility } from "@/libs/defineAbilityFor";

export function useAcl() {
  return useAbility<AppAbility>();
}
