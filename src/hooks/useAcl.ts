import { useAbility } from "@casl/vue";
import { AppAbility } from "@/utils/defineAbilityFor";

export function useAcl() {
  return useAbility<AppAbility>();
}
