import { useLoginStore } from "@/hooks";

// Query Imports
import { useMutation } from "@tanstack/vue-query";

// Router Imports
import { useRoute, useRouter } from "vue-router";

// API Imports
import { auth_login } from "@/api/auth_login";

export function useLoginPost() {
  const router = useRouter();
  const route = useRoute();
  const { setState } = useLoginStore();
  return useMutation({
    mutationFn() {
      return auth_login({
        username: "admin",
        password: "admin",
      });
    },
    onSuccess(data) {
      localStorage.setItem("token", data.token);
      setState((prev) => (prev.isLogined = true));
      const redirectUrl = decodeURIComponent(String(route.query.returnUrl));
      router.push(redirectUrl || "/");
    },
  });
}
