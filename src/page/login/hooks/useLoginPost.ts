import { useLoginStore } from "@/hooks";
import { useMutation } from "@tanstack/vue-query";
import { useRoute, useRouter } from "vue-router";

export function useLoginPost() {
  const router = useRouter();
  const route = useRoute();
  const { setState } = useLoginStore();
  return useMutation({
    async mutationFn() {
      return {};
    },
    onSuccess() {
      setState((prev) => (prev.isLogined = true));
      const redirectUrl = decodeURIComponent(String(route.query.returnUrl));
      router.push(redirectUrl || "/");
    },
  });
}
