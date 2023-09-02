// Acl Imports
import {
  MongoAbility,
  createMongoAbility,
  CreateAbility,
  AbilityBuilder,
} from "@casl/ability";

const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

export function defineAbilityFor(role: string) {
  const { can, cannot, build } = new AbilityBuilder(createAppAbility);

  switch (role) {
    case "admin":
      // @ts-ignore
      can("manage", "all");
      break;
    case "client":
      // @ts-ignore
      can("read", "all");
      break;
    default:
      // @ts-ignore
      cannot("manage", "all");
  }

  return build();
}

type CRUD = "create" | "read" | "update" | "delete";
type Abilities = ["read", "User"] | [CRUD, "Article"];
export type AppAbility = MongoAbility<Abilities>;
