// API Imports
import { usr_post } from "@/api/mock";
import { useMutation } from "@tanstack/vue-query";
import { Req, Res } from "@/api/mock/usr_post";

// Element Imports
import { ElMessage } from "element-plus";

// Hooks Imports
import { useLogin } from "./use-login";

export function useUsrPost() {
  // Login Hooks
  const { signIn } = useLogin();

  // API Hooks
  return useMutation<Res, Error, Req>({
    mutationFn(req) {
      return usr_post(req);
    },
    async onSuccess(data) {
      await signIn(data);
    },
    onError(err) {
      ElMessage.error(err.message);
    },
  });
}
