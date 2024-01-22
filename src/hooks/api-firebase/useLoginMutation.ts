// Query Imports
import { useMutation } from "@tanstack/vue-query";

// Firebase Imports
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { app } from "@/api/firebase";

// Store Imports
import { useAuthStore } from "@/hooks/store";

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
