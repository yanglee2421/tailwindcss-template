import { useMutation } from "@tanstack/vue-query";
import { useRouter } from "vue-router";

export function useLoginPost() {
  const router = useRouter();
  return useMutation({
    async mutationFn() {},
    onSuccess() {},
  });
}
