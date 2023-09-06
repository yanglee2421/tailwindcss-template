// Router Imports
import { RouteLocationRaw, LocationQueryValue } from "vue-router";

export function toHomeRoute(params: ToHomeRouteParams): RouteLocationRaw {
  if (Array.isArray(params)) {
    return { name: "home" };
  }
  if (!params) return { name: "home" };
  return { path: decodeURIComponent(params) };
}
type ToHomeRouteParams = LocationQueryValue | LocationQueryValue[];
