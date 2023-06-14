import { useRouter } from "vue-router";
import { useMutation } from "@tanstack/vue-query";

export function useLogoutPost() {
  const router = useRouter();
  return useMutation({
    async mutationFn() {},
    onSuccess() {
      router.push({ name: "login" });
    },
  });
}
