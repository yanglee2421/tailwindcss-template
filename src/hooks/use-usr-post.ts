// API Imports
import { usr_post } from "@/api/mock";
import { useMutation } from "@tanstack/vue-query";
import { Req, Res } from "@/api/mock/usr_post";

// Element Imports
import { ElMessage } from "element-plus";

export function useUsrPost() {
  // API Hooks
  return useMutation<Res, Error, Req>({
    mutationFn(req) {
      return usr_post(req);
    },
    onError(err) {
      ElMessage.error(err.message);
    },
  });
}
