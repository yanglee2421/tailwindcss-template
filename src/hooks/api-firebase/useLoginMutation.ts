import { useMutation } from "@tanstack/vue-query";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/api/firebase/app";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import type { UserCredential } from "firebase/auth";

export function useLoginMutation() {
  const authStore = useAuthStore();

  return useMutation<UserCredential, Error, Req>({
    mutationFn(req) {
      return signInWithEmailAndPassword(getAuth(app), req.email, req.password);
    },
    onError(error) {
      console.error(error);
    },
    onSuccess() {
      authStore.update();
    },
  });
}

export interface Req {
  email: string;
  password: string;
}
