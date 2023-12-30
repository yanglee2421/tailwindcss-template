// Router Imports
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes } from "./routes";

// Nprogress Imports
import NProgress from "nprogress";

// Store Imports
import { useAuth } from "@/hooks/store";

// Acl Imports
import { useAcl } from "@/configs/acl";

// Vue Imports
import * as Vue from "vue";

export const router = createRouter({
  history: import.meta.env.DEV
    ? createWebHistory("/vue-ele")
    : createWebHashHistory(),
  routes,
});

// Router Guard
router.beforeEach((to) => {
  const [authRef] = useAuth();
  const acl = useAcl();

  const auth = Vue.unref(authRef);

  switch (to.meta.auth) {
    case "guest": {
      if (auth.currentUser) {
        return { name: "home" };
      }

      return true;
    }

    case "none":
      return true;

    case "auth":
    default: {
      // Not logged in
      if (!auth.currentUser) {
        return { name: "401" };
      }

      // Can access route
      if (
        acl.can(
          String(to.meta.aclAction || "read"),
          String(to.meta.aclSubject || "fallback")
        )
      ) {
        return true;
      }

      // Can not access route
      return { name: "403" };
    }
  }
});

// ** Title
router.afterEach((to) => {
  const title = to.meta.title;

  if (!title) return;

  if (typeof title === "string") {
    document.title = title;
  }
});

// ** Nprogress
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
