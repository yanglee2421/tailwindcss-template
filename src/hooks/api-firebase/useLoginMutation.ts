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
import { useAuth } from "@/hooks/store";

export function useLoginMutation() {
  const [, updateAuth] = useAuth();

  return useMutation<UserCredential, Error, Req>({
    async mutationFn(req) {
      return signInWithEmailAndPassword(getAuth(app), req.email, req.password);
    },
    onError(error) {
      console.error(error);
    },
    onSuccess() {
      updateAuth();
    },
  });
}

export interface Req {
  email: string;
  password: string;
}
