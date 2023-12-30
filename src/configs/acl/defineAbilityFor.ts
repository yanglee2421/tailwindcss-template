// Acl Imports
import {
  MongoAbility,
  createMongoAbility,
  AbilityBuilder,
} from "@casl/ability";

export function defineAbilityFor(role: string) {
  const builder = new AbilityBuilder<AppAbility>(createMongoAbility);

  switch (role) {
    case "admin":
      builder.can("manage", "all");
      break;
    case "client":
      builder.can("read", "all");
      break;
    default:
      builder.cannot("manage", "all");
  }

  return builder.build();
}

export type AppAbility = MongoAbility<[string, string]>;
